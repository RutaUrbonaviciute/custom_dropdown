import React, { useEffect, useState } from 'react';
import { useHttp } from '../hooks/http';

interface Props {
  movieList: any,
  setInputValue: (movieElement: any) => void
}

export const CustomDropdown: React.FC<Props> = ({ movieList, setInputValue }) => {

  const handleDropdownClick = (movie: any) => {
    setInputValue(movie?.title || '')
  }

  return (
    <>
      {movieList.map((movie: any) => (
        <button key={movie.id} className="dropdown__element" onClick={handleDropdownClick}>
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
        </button>
      ))}
    </>
  );
}
