import React, { useEffect } from 'react';
import { MovieIcon } from '../Icons/MovieIcon';
import { InputPopoverField } from './InputPopoverField';

interface Props {
  open: boolean;
  setInputPopoverOpen: (isOpen: boolean) => void;
}

export const InputPopover: React.FC<Props> = ({ open, setInputPopoverOpen }) => {
  useEffect(() => {
    const inputPopover = document.getElementById('input-field-popover')!;
    const inputField = document.getElementById('input-field')!;

    if (open) {
      inputField.focus();
      inputPopover.classList.add("input-popover--open")
    } else {
      inputPopover.classList.remove("input-popover--open")
    }
  })

  return (
    <div id='input-field-popover' className="input-popover">
      <div className="input-popover__icon">
        <MovieIcon />
      </div>
      <InputPopoverField
        setInputPopoverOpen={setInputPopoverOpen}
      />
    </div >
  )
}

