export type Movie = {
  id: string;
  ttid: string;
  title: string;
  year: string;
  genres: string;
  type: string;
  stars: string;
  image: string;
};

export type MovieSearchResult = {
  id: string;
  resultType: 'Title';
  image: string;
  title: string;
  description: string;
};

export type MovieSearchResponse = {
  results: MovieSearchResult[];
  expression: string;
  errorMessage: string;
  searchType: string;
};
