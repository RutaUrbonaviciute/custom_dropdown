import React, { useEffect, useState } from 'react';
import { useHttp } from '../hooks/http';
import { InputPopover } from './InputPopover';
import { MovieIconContainer } from './MovieIconContainer';


export const SearchInput: React.FC = () => {
  const [searchContainerValue, setSearchContainerValue] = useState('Enter movie name')

  const myEl = document.getElementById('input-field');
  console.log(myEl === document.activeElement)

  const toggleVisibility = (id: string) => {
    let e = document.getElementById(id)!;
    if (e.style.display === 'flex') {
      e.style.display = 'none';
    } else {
      e.style.display = 'flex'
    };
  }

  const handleInputFieldOpen = () => {
    toggleVisibility('input-field-popover');
  }

  return (
    <>
      <div className="search-input">
        <button
          className="search-input__button"
          onClick={handleInputFieldOpen}>

          <div className="search-input__button__icon">
            <MovieIconContainer />
          </div>
          <div className="search-input__button__placeholder">
            {searchContainerValue}
          </div>

        </button>

        <InputPopover />
      </div>
      {/* <div>
        <input autoFocus type="text" id="input-field" onFocus={handleInputFocus} onBlur={handleInputBlur} className="search-input__field" placeholder="Enter movie name" value={inputValue} onChange={handleInputChange} />
        {fetchedData.results.length > 0 && inputFocus && fetchedData.results.map((movie: any) => (
          <button key={movie.id} className="search-input__dropdown-element" onClick={() => handleDropdownClick(movie)}>
            <div>{movie.title}</div>
            <div>{movie.release_date}</div>
          </button>
        ))}
      </div> */}
    </>
  );
}
