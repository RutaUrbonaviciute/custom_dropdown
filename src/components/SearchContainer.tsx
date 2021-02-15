import React from 'react';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';

export const SearchContainer: React.FC = () => {
  return (
    <div className="search-container">
      <SearchInput />
      <SearchButton />
    </div>
  );
}
