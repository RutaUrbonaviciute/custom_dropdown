import React, { useContext, useState } from 'react';
import { SearchComponentContext } from '../../App';
import { SearchButton } from '../Buttons/SearchButton';
import { SelectedMovieType } from '../state/types';
import { SearchInput } from './SearchInput';

export const SearchContainer: React.FC = () => {
  const { state: { selectedMovie } } = useContext(SearchComponentContext);
  const [movie, setMovie] = useState<SelectedMovieType | null>(null);

  const handleSearchButtonClick = () => {
    setMovie(selectedMovie);
  }

  return (
    <>
      <div className="search-container">
        <SearchInput />
        <SearchButton onClick={handleSearchButtonClick} />
      </div>
      {movie &&
        <div className="movie-container">
          <div className="movie-container__content">
            <h1 className="movie-container__title">{movie.title}</h1>
            <h3 className="movie-container__date">{movie.release_date}</h3>
            <p className="movie-container__overview">{movie.overview}</p>
          </div>
        </div>}
    </>
  );
}
