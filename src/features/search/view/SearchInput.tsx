import { useState, SyntheticEvent } from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchInputProps = {
  handleSearch: (s: string) => void;
};

export function SearchInput({ handleSearch }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <Box
      component="form"
      sx={{
        bgcolor: '#fff',
        p: '2px 4px',
        mb: 4,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movie Title"
        inputProps={{ 'aria-label': 'search movie title' }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={handleSearchSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
