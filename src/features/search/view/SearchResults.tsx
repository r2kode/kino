import {
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Movie } from '@/types/movie';

type SearchResultsProps = {
  movieList: Movie[];
};

export function SearchResults({ movieList }: SearchResultsProps) {
  return (
    <Paper>
      {movieList.map(({ id, title }) => (
        <List key={id}>
          <ListItem disablePadding>
            <ListItemButton component="a" href={`#${id}`}>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </Paper>
  );
}
