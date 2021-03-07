import React from 'react';
import { SearchButton } from '../Buttons/SearchButton';
import { SearchInput } from './SearchInput';

export const SearchContainer: React.FC = () => {
  const handleSearchButtonClick = () => {
    alert('click')
  }
  return (
    <div className="search-container">
      <SearchInput />
      <SearchButton onClick={handleSearchButtonClick} />
    </div>
  );
}
