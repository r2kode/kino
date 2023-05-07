import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Image } from 'mui-image';
import { useGetMovieDetailsQuery } from '@/app/services/imdb';
import { useGetCollectionMovieQuery } from '@/app/services/kino';
import { AddToCollectionBtn } from './AddToCollectionBtn';

type MovieDetailsProps = {
  id: string;
};

export function MovieDetails({ id }: MovieDetailsProps) {
  const { data, isLoading } = useGetMovieDetailsQuery(id);
  const { data: collectionMovie, isLoading: collectionLoading } =
    useGetCollectionMovieQuery(id);

  if (isLoading) return <h3>Loading...</h3>;

  const { title, year, stars, genres, plot, countries, type, image } = data;
  const isInCollection = collectionMovie?.length > 0;

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
            <AddToCollectionBtn
              movieDetails={data}
              isInCollection={isInCollection}
            />
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
