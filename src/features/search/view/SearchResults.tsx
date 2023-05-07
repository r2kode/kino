import { Box, Typography, List } from '@mui/material';
import { useSearchMovieQuery } from '@/app/services/imdb';
import { MovieSearchResult, MovieSearchResponse } from '@/types/movie';
import { SearchResultsItem } from './SearchResultsItem';

type SearchResultsProps = {
  searchPhrase: string;
};

export function SearchResults({ searchPhrase }: SearchResultsProps) {
  const { data, isLoading } = useSearchMovieQuery(searchPhrase);

  if (isLoading) return <div>Loading..</div>;

  const { results, expression } = data as MovieSearchResponse;

  return (
    <Box sx={{ bgcolor: '#fff', px: 2 }}>
      <Typography variant="h6" sx={{ color: '#222' }}>
        {expression}
      </Typography>
      <List>
        {results.map((movie: MovieSearchResult) => {
          const { id } = movie;
          return <SearchResultsItem key={id} movie={movie} />;
        })}
      </List>
    </Box>
  );
}
