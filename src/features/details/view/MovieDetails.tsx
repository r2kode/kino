import { Box, IconButton, Stack, Typography } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Grid from '@mui/material/Unstable_Grid2';
import { Image } from 'mui-image';
import { useGetMovieDetailsQuery } from '@/app/services/movies';
import { useMovieDetails } from '../hooks/useMovieDetails';
// import { Movie } from '@/types';

type MovieDetailsProps = {
  id: string;
  // id: Pick<Movie, 'id'>;
};

export function MovieDetails({ id }: MovieDetailsProps) {
  const { data, isLoading } = useGetMovieDetailsQuery(id);
  const { addToCollection } = useMovieDetails(id);

  if (isLoading) return <h3>Loading...</h3>;

  const { title, year, stars, genres, plot, countries, type, image } = data;

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
      </Grid>
      <Grid xs={12} md={5}>
        <Image src={image} />
      </Grid>
      <Grid md={7}>
        <Box mb={2}>
          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="add to collection"
              size="large"
              color="secondary"
              onClick={addToCollection}
            >
              <VideoLibraryIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Box>
        <Box>
          <Typography variant="body1" mb={1}>
            {year}
          </Typography>
          <Typography variant="body1" mb={1}>
            {type}
          </Typography>
          <Typography variant="body1" mb={1}>
            {stars}
          </Typography>
          <Typography variant="body1" mb={1}>
            {genres}
          </Typography>
          <Typography variant="body1" mb={1}>
            {plot}
          </Typography>
          <Typography variant="body1" mb={1}>
            {countries}
          </Typography>
          <Typography variant="caption">{id}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
