import { Image } from 'mui-image';
import { useGetMovieDetailsQuery } from '@/app/services/movies';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// import { Movie } from '@/types';

type MovieDetailsProps = {
  id: string;
  // id: Pick<Movie, 'id'>;
};

export function MovieDetails({ id }: MovieDetailsProps) {
  const { data, isLoading } = useGetMovieDetailsQuery(id);

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
        <Typography variant="body1">
          <p>{year}</p>
          <p>{type}</p>
          <p>{stars}</p>
          <p>{genres}</p>
          <p>{plot}</p>
          <p>{countries}</p>
        </Typography>
        <Typography variant="caption">{id}</Typography>
      </Grid>
    </Grid>
  );
}
