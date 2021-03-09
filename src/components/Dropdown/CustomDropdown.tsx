import React from 'react';
import { SelectedMovieType } from '../state/types';
import { ErrorDropdown } from './ErrorDropdown'
import { LoaderDropdown } from './LoaderDropdown';

interface Props {
  isLoading: boolean;
  error: boolean;
  data: any;
  handleDropdownClick: (movie: any) => void;
}

export const CustomDropdown: React.FC<Props> = ({ isLoading, error, data, handleDropdownClick }) => {
  const elementsToShow = 8;

  const getDropdownContent = () => {
    if (error) {
      return (
        <ErrorDropdown />
      )
    } else if (isLoading) {
      return (
        <LoaderDropdown />
      )
    } else if (data && data.results.length) {
      return (
        <>
          {data.results.slice(0, elementsToShow).map((movie: SelectedMovieType) => (
            <li key={movie.id} className="custom-dropdown__element" onClick={(event: any) => { handleDropdownClick(movie) }}>
              <div id='movie-title' className="custom-dropdown__element__title">{movie.title}</div>
              <div className="custom-dropdown__element__subtitle">
                {`${movie.vote_average} Rating, ${movie.release_date && movie.release_date.substr(0, 4)}`}
              </div>
            </li>
          ))}
        </>
      );
    }
    return null;
  }

  return (
    <ul className='custom-dropdown' id={'custom-dropdown'}>
      {getDropdownContent()}
    </ul>
  );
}


