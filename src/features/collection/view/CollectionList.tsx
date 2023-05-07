import { Box, List } from '@mui/material';
import { useGetCollectionQuery } from '@/app/services/kino';
import type { Movie } from '@/types/movie';
import { CollectionItem } from './CollectionItem';

export function CollectionList() {
  const { data: movies, error, isLoading } = useGetCollectionQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {movies?.map((movie: Movie) => {
          const { ttid } = movie;
          return <CollectionItem key={ttid} movieItem={movie} />;
        })}
      </List>
    </Box>
  );
}
