import { Link } from 'react-router-dom';
import { Paper, List, ListItem, ListItemText } from '@mui/material';
import { Movie } from '@/types/movie';
import { RoutePaths } from '@/router';

type SearchResultsProps = {
  movieList: Movie[];
};

export function SearchResults({ movieList }: SearchResultsProps) {
  return (
    <Paper>
      {movieList.map(({ id, title }) => (
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
