// import { useAddCollectionMovieMutation } from '@/app/services/kino';
import { Movie } from '@/types/movie';

export const useMovieDetails = () => {
  // const { addCollectionMovie } = useAddCollectionMovieMutation();
  const addToCollection = (movie: Movie) => {
    console.log('ADD', movie);
  };

  return { addToCollection };
};
