import React, { useRef, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { InputPopover } from './InputPopover';
import { MovieIconContainer } from './MovieIconContainer';


export const SearchInput: React.FC = () => {
  const node = useRef<HTMLDivElement>(null);
  const [inputPopoverOpen, setInputPopoverOpen] = useState(false);
  const [searchContainerValue, setSearchContainerValue] = useState('Enter movie name');

  useOutsideClick(node, () => {
    setInputPopoverOpen(false);
  });

  const handleInputPopoverOpen = () => {
    setInputPopoverOpen(true);
  }

  return (
    <>
      <div className="search-input">
        <button
          className="search-input__button"
          onClick={handleInputPopoverOpen}>
          <div className="search-input__button__icon">
            <MovieIconContainer />
          </div>
          <div className="search-input__button__placeholder">
            {searchContainerValue}
          </div>
        </button>
        <div ref={node} className="outsideClickWrapper">
          <InputPopover
            open={inputPopoverOpen}
            setInputPopoverOpen={setInputPopoverOpen}
            setSearchContainerValue={setSearchContainerValue} />
        </div>

      </div>
    </>
  );
}
