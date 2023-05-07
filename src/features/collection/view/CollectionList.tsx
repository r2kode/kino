import { useState, ChangeEvent } from 'react';
import { Box, List, Pagination } from '@mui/material';
import { useGetCollectionQuery, Collection } from '@/app/services/kino';
import type { Movie } from '@/types/movie';
import { CollectionItem } from './CollectionItem';

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;

export function CollectionList() {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const { data, error, isLoading } = useGetCollectionQuery({
    page,
    pageSize: PAGE_SIZE,
  });

  if (isLoading && !data) return <p>Loading...</p>;

  const { movies, collectionCount } = data as Collection;
  const paginationSize = Math.ceil(collectionCount / PAGE_SIZE);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {movies?.map((movie: Movie) => {
          const { ttid } = movie;
          return <CollectionItem key={ttid} movieItem={movie} />;
        })}
      </List>
      <Box sx={{ mt: 2, mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={paginationSize}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}
