import React from 'react';

export const SearchButton: React.FC = () => {
  return (
    <button className="search-button">
      <div className="search-button__icon"><img src="/search.svg" alt="search icon" /></div>
    </button>
  );
}
