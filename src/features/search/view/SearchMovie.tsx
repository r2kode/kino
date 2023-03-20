import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

export function SearchMovie() {
  const [searchPhrase, setSearchPhrase] = useState<null | string>(null);

  return (
    <div>
      <SearchInput handleSearch={setSearchPhrase} />
      <div>
        {searchPhrase ? <SearchResults searchPhrase={searchPhrase} /> : null}
      </div>
    </div>
  );
}
