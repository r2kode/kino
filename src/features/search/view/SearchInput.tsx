import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

type SearchInputProps = {
  handleSearch: (s: string) => void;
};

export function SearchInput({ handleSearch }: SearchInputProps) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        mb: 4,
        display: 'flex',
        alignItems: 'center',
        width: 600,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movie Title"
        inputProps={{ 'aria-label': 'search movie title' }}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={() => handleSearch(searchInput)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
