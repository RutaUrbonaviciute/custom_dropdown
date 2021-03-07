import React, { useEffect } from 'react';
import { MovieIcon } from '../Icons/MovieIcon';
import { InputPopoverField } from './InputPopoverField';

interface Props {
  open: boolean;
  setInputPopoverOpen: (isOpen: boolean) => void;
  setSearchContainerValue: (title: string) => void;
}

export const InputPopover: React.FC<Props> = ({ open, setInputPopoverOpen, setSearchContainerValue }) => {
  useEffect(() => {
    const inputPopover = document.getElementById('input-field-popover')!;
    const inputField = document.getElementById('input-field')!;

    if (open) {
      inputPopover.style.display = 'flex';
      inputField.focus();
      inputPopover.style.opacity = '1';
      inputPopover.style.transition = 'opacity .3s ease-out';
    } else {
      inputPopover.style.opacity = '0';
      inputPopover.style.display = 'none';
    }
  })

  return (
    <div id='input-field-popover' className="input-popover">
      <div className="input-popover__icon">
        <MovieIcon />
      </div>
      <InputPopoverField
        setInputPopoverOpen={setInputPopoverOpen}
        setSearchContainerValue={setSearchContainerValue}
      />
    </div >
  )
}

