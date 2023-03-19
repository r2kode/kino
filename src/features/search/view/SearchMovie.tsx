import { useState } from 'react';
import { useSearchMovieQuery } from '@/app/services/movies';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

export function SearchMovie() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const { data, isLoading } = useSearchMovieQuery(searchPhrase);

  if (isLoading) return <div>Loading..</div>;

  const { results, expression } = data;

  return (
    <div>
      <SearchInput handleSearch={setSearchPhrase} />

      <div>{!isLoading ? <SearchResults movieList={results} /> : null}</div>
    </div>
  );
}
