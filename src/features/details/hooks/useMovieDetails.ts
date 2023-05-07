import { Movie } from '@/types/movie';
import { useAddCollectionMovieMutation } from '@/app/services/kino';
import { useAuth } from '@/app/providers/auth/useAuth';

export const useMovieDetails = () => {
  const [addCollectionMovie] = useAddCollectionMovieMutation();
  const { session } = useAuth();

  const addToCollection = (movie: Movie) => {
    const { id, title, year, genres, type, image, stars } = movie;
    addCollectionMovie({
      ttid: id,
      uid: session?.user?.id,
      title,
      year,
      genres,
      type,
      image,
      stars,
    });
  };

  return { addToCollection };
};
