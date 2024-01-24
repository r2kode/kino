import { useState, ChangeEvent } from 'react';
import { Stack, Typography, Pagination } from '@mui/material';

export function Pager() {
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
