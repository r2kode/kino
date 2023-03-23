export type Movie = {
  id: string;
  resultType: 'Title';
  image: string;
  title: string;
  description: string;
};

export type MovieResponse = {
  results: Movie[];
  expression: string;
  errorMessage: string;
  searchType: string;
};
