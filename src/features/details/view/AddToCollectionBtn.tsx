import { IconButton } from '@mui/material';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Movie } from '@/types/movie';

type AddToCollectionProps = {
  movieDetails: Movie;
  isInCollection: boolean;
};

export function AddToCollectionBtn({
  movieDetails,
  isInCollection = false,
}: AddToCollectionProps) {
  const { title } = movieDetails;
  const { addToCollection } = useMovieDetails();
  const handleAddToCollection = () => {
    addToCollection(movieDetails);
  };

  return (
    <IconButton
      aria-label={`Add ${title} to your collection`}
      size="large"
      color="secondary"
      onClick={handleAddToCollection}
      disabled={isInCollection}
    >
      <VideoLibraryIcon fontSize="inherit" />
    </IconButton>
  );
}
