import React, { ChangeEvent, useContext, useState } from 'react';
import { SearchComponentDispatch } from '../../App';
import { API_KEY } from '../../constants';
import { useHttp } from '../../hooks/useHttp';
import { CustomDropdown } from '../Dropdown/CustomDropdown';
import { SelectedMovieType } from '../state/types';

interface Props {
  setInputPopoverOpen: (isOpen: boolean) => void;
}

export const InputPopoverField: React.FC<Props> = ({ setInputPopoverOpen }) => {
  const { dispatch } = useContext(SearchComponentDispatch);

  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [shouldFetch, setShouldFetch] = useState(false);
  const [isLoading, fetchedData, error] = useHttp(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}}`,
    [inputValue], shouldFetch)

  const handleInputFocus = () => {
    setInputFocus(true)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value
    setInputValue(eventValue);

    if (eventValue.length >= 3) {
      setShouldFetch(true);
      setDropdownOpen(true);
    } else {
      setShouldFetch(false);
      setDropdownOpen(false);
    }
  }

  const handleDropdownClick = (movie: SelectedMovieType) => {
    const movieTitle = movie.title;

    setInputValue(movieTitle);
    setDropdownOpen(false);
    setInputPopoverOpen(false);

    dispatch({ type: 'SET_SELECTED_MOVIE', selectedMovie: movie })
  }

  return (
    <>
      <div className='input-popover__field-container'>
        <input
          autoComplete="off"
          type="text"
          id="input-field"
          className='input-popover__input'
          value={inputValue}
          onFocus={handleInputFocus}
          onChange={handleInputChange} />
        <div className='input-popover__label'>Enter a movie name</div>
      </div>
      <div>
        {dropdownOpen && inputFocus &&
          <CustomDropdown
            isLoading={!!isLoading}
            error={!!error}
            data={fetchedData}
            handleDropdownClick={handleDropdownClick}
          />
        }
      </div>
    </>
  )
}
