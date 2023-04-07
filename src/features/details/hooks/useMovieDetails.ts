export const useMovieDetails = (id: string) => {
  const addToCollection = () => {
    console.log('ADD', id);
  };

  return { addToCollection };
};
