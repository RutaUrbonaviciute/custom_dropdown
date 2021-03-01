import React from 'react';

interface Props {
  movieList: any,
  handleDropdownClick: (movie: any) => void;
}

export const CustomDropdown: React.FC<Props> = ({ movieList, handleDropdownClick }) => (
  <ul className='custom-dropdown'>
    {movieList.map((movie: any) => (
      <>

        <li key={movie.id} className="custom-dropdown__element" onClick={handleDropdownClick}>
          <div id='movie-title' className="custom-dropdown__element__title">{movie.title}</div>
          <div className="custom-dropdown__element__subtitle">
            {movie.vote_average} Rating,
             {movie.release_date && movie.release_date.substr(0, 4)}
          </div>
        </li>

      </>
    ))}
  </ul>
);

