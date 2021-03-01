import React, { useEffect, useState } from 'react';
import { useHttp } from '../hooks/http';
import { CustomDropdown } from './CustomDropdown';
import { MovieIconContainer } from './MovieIconContainer';

interface Props {
  onInputPopoverToggle: () => void;
  setSearchContainerValue: (title: string) => void;
}

export const InputPopoverField: React.FC<Props> = ({ onInputPopoverToggle, setSearchContainerValue }) => {
  const key = "82f71ccc5d36993ad9e836050b46a0ab";

  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, fetchedData, error] = useHttp(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${inputValue}}`,
    [inputValue])

  const handleInputFocus = () => {
    setInputFocus(true)
  }

  const handleInputBlur = () => {
    // nebepasiselectina itemas, fix
    // setInputFocus(false);
    // onInputPopoverToggle();
  }

  const handleInputChange = (event: any) => {
    const eventValue = event.target.value
    setInputValue(eventValue);


    if (eventValue.length >= 3) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  }

  const handleDropdownClick = (movie: any) => {
    const movieTitle = movie.currentTarget.firstChild.innerHTML;
    setInputValue(movieTitle || '');
    setSearchContainerValue(movieTitle || '');
    onInputPopoverToggle();
    setDropdownOpen(false);
  }

  // if (isLoading) return <>Loading...</>
  if (error) return <>Yikes error...</>

  if (fetchedData) {
    // console.log(fetchedData.results)
  }
  console.log(fetchedData)


  return (
    <>
      <div className='input-popover__field-container'>
        <input
          autoFocus
          type="text"
          id="input-field"
          className='input-popover__input'
          value={inputValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange} />
        <div className='input-popover__label'>Enter a movie name</div>
      </div>
      <div>
        {dropdownOpen && fetchedData && fetchedData.results.length > 0 && inputFocus &&
          <CustomDropdown
            movieList={fetchedData.results}
            handleDropdownClick={handleDropdownClick}
          />
        }
      </div>
    </>
  )
}

