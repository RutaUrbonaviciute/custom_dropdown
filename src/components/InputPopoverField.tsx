import React, { useEffect, useState } from 'react';
import { useHttp } from '../hooks/http';
import { MovieIconContainer } from './MovieIconContainer';


export const InputPopoverField: React.FC = () => {
  const key = "82f71ccc5d36993ad9e836050b46a0ab";

  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, fetchedData, error] = useHttp(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${inputValue}}`,
    [inputValue])




  const myEl = document.getElementById('input-field');
  console.log(myEl === document.activeElement)

  const handleInputFocus = () => {
    setInputFocus(true)
  }

  const handleInputBlur = () => {
    // setInputFocus(false)
  }

  const handleInputChange = (event: any) => {
    // console.log('stop ptopagation')
    // event.stopPropagation();
    // event.stopImmediatePropagation();

    const eventValue = event.target.value
    setInputValue(eventValue);

    // eventValue.length >= 3
  }


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

  const handleDropdownClick = (movie: any) => {
    // const selectedElement = movieListExample.find((item: any) => item.id === id);
    setInputValue(movie?.title || '')
    console.log(movie)
  }




  if (isLoading) return <>Loading...</>
  if (error) return <>Yikes error...</>

  if (fetchedData) {
    console.log(fetchedData.results)
  }
  console.log(fetchedData)


  return (
    <div className='input-popover__field-container'>
      <input
        autoFocus
        type="text"
        id="input-field"
        className='input-popover__input'
        value={inputValue}
        onChange={handleInputChange} />
      <div className='input-popover__label'>Enter movie name</div>
    </div>
  )
}

