import React, { useContext, useRef, useState } from 'react';
import { SearchComponentContext } from '../../App';
import useOutsideClick from '../../hooks/useOutsideClick';
import { MovieIcon } from '../Icons/MovieIcon';
import { InputPopover } from '../InputPopover/InputPopover';

export const SearchInput: React.FC = () => {
  const node = useRef<HTMLDivElement>(null);

  const { state: { selectedMovie } } = useContext(SearchComponentContext);
  const [inputPopoverOpen, setInputPopoverOpen] = useState(false);

  useOutsideClick(node, () => {
    setInputPopoverOpen(false);
  });

  const handleInputPopoverOpen = () => {
    setInputPopoverOpen(true);
  }

  return (
    <div className="search-input">
      <button
        className="search-input__button"
        onClick={handleInputPopoverOpen}>
        <div className="search-input__button__icon">
          <MovieIcon />
        </div>
        <div className="search-input__button__placeholder">
          {selectedMovie.title || 'Enter movie name'}
        </div>
      </button>
      <div ref={node}>
        <InputPopover
          open={inputPopoverOpen}
          setInputPopoverOpen={setInputPopoverOpen}
        />
      </div>
    </div>
  );
}
