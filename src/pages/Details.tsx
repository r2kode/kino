import { useParams } from 'react-router-dom';
import { MovieDetails } from '@/features/details';

export function Details() {
  const { id = '' } = useParams();
  return <MovieDetails id={id} />;
}
