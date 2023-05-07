import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@/app/providers/router';
import type { MovieSearchResult } from '@/types/movie';

type MovieItemProps = {
  movie: MovieSearchResult;
};

export function SearchResultsItem({ movie }: MovieItemProps) {
  const { id, title, image, description } = movie;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={`${title} poster`} src={image} />
      </ListItemAvatar>
      <ListItemText
        primary={<Link to={`${RoutePaths.DETAILS}/${id}`}>{title}</Link>}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            ></Typography>
            {description}
          </>
        }
      />
    </ListItem>
  );
}
