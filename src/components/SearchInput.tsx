import React, { useEffect, useState } from 'react';
import { useHttp } from '../hooks/http';
import { InputPopover } from './InputPopover';
import { MovieIconContainer } from './MovieIconContainer';


export const SearchInput: React.FC = () => {
  const [searchContainerValue, setSearchContainerValue] = useState('Enter movie name')

  const toggleVisibility = (id: string) => {
    let e = document.getElementById(id)!;
    if (e.style.display === 'flex') {
      e.style.display = 'none';
    } else {
      e.style.display = 'flex'
    };
  }

  const handleInputPopoverToggle = () => {
    toggleVisibility('input-field-popover');
  }

  return (
    <>
      <div className="search-input">
        <button
          className="search-input__button"
          onClick={handleInputPopoverToggle}>

          <div className="search-input__button__icon">
            <MovieIconContainer />
          </div>
          <div className="search-input__button__placeholder">
            {searchContainerValue}
          </div>

        </button>

        <InputPopover onInputPopoverToggle={handleInputPopoverToggle} setSearchContainerValue={setSearchContainerValue} />
      </div>
    </>
  );
}
