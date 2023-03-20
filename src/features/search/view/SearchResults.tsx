import { Link } from 'react-router-dom';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSearchMovieQuery } from '@/app/services/movies';
import { Movie } from '@/types/movie';
import { RoutePaths } from '@/router';

type SearchResultsProps = {
  searchPhrase: string;
};

export function SearchResults({ searchPhrase }: SearchResultsProps) {
  const { data, isLoading } = useSearchMovieQuery(searchPhrase);

  if (isLoading) return <div>Loading..</div>;

  const { results, expression } = data;

  return (
    <Paper>
      <Typography variant="h2">{expression}</Typography>
      {results.map(({ id, title }: Movie) => (
        <List key={id}>
          <ListItem disablePadding>
            <Link to={`${RoutePaths.DETAILS}/${id}`}>
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        </List>
      ))}
    </Paper>
  );
}
