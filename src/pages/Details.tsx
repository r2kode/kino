import { useParams } from 'react-router-dom';
import { Image } from 'mui-image';
import { useGetMovieDetailsQuery } from '@/app/services/movies';

export function Details() {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieDetailsQuery(id);

  if (isLoading) return <h3>Loading...</h3>;

  const { title, year, stars, genres, plot, countries, type, image } = data;
  return (
    <div>
      <h2>Details</h2>
      <span>{id}</span>
      <Image src={image} width="30vw" />
      <h3>{title}</h3>
      <p>{year}</p>
      <p>{type}</p>
      <p>{stars}</p>
      <p>{genres}</p>
      <p>{plot}</p>
      <p>{countries}</p>
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}
