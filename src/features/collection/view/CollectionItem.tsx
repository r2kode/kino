import {
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@/app/providers/router';
import type { Movie } from '@/types/movie';

type MovieItemProps = {
  movieItem: Movie;
};

export function CollectionItem({ movieItem }: MovieItemProps) {
  const { ttid, title, image, genres, year, type, stars } = movieItem;

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={`${title} poster`} src={image} />
      </ListItemAvatar>
      <ListItemText
        primary={<Link to={`${RoutePaths.DETAILS}/${ttid}`}>{title}</Link>}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {`${year} | ${type} | ${genres}`}
            </Typography>
            {` - ${stars}`}
          </>
        }
      />
    </ListItem>
  );
}
