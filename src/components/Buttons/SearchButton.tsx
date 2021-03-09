import React from 'react';
import { SearchIcon } from '../Icons/SearchIcon';

interface Props {
  onClick: () => void;
}

export const SearchButton: React.FC<Props> = ({ onClick }) => (
  <button className="search-button" onClick={onClick}>
    <div className="search-button__icon">
      <SearchIcon />
    </div>
  </button>
);
