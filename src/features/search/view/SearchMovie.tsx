import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

export function SearchMovie() {
  const [searchPhrase, setSearchPhrase] = useState<null | string>(null);

  return (
    <>
      <SearchInput handleSearch={setSearchPhrase} />
      {searchPhrase ? <SearchResults searchPhrase={searchPhrase} /> : null}
    </>
  );
}
