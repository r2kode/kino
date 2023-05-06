import { Box, List } from '@mui/material';
import { useGetCollectionQuery } from '@/app/services/kino';
import type { Movie } from '@/types/movie';
import { movies } from '@/data/movies';
import { CollectionItem } from './CollectionItem';

export function CollectionList() {
  const { data, error, isLoading } = useGetCollectionQuery();
  console.log(isLoading);
  console.log(error);
  console.log(data);

  return (
    <Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {movies.map((movie: Movie) => {
          const { ttid } = movie;
          return <CollectionItem key={ttid} movieItem={movie} />;
        })}
      </List>
    </Box>
  );
}
