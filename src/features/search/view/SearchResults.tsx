import { Link } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSearchMovieQuery } from '@/app/services/movies';
import { Movie, MovieResponse } from '@/types/movie';
import { RoutePaths } from '@/router';

type SearchResultsProps = {
  searchPhrase: string;
};

export function SearchResults({ searchPhrase }: SearchResultsProps) {
  const { data, isLoading } = useSearchMovieQuery(searchPhrase);

  if (isLoading) return <div>Loading..</div>;

  const { results, expression } = data as MovieResponse;

  return (
    <Box sx={{ bgcolor: '#fff', px: 2 }}>
      <Typography variant="h6" sx={{ color: '#222' }}>
        {expression}
      </Typography>
      {results.map(({ id, title }: Movie) => (
        <List key={id}>
          <ListItem disablePadding>
            <Link to={`${RoutePaths.DETAILS}/${id}`}>
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        </List>
      ))}
    </Box>
  );
}
