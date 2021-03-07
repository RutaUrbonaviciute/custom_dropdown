import React, { useEffect } from 'react';
import { InputPopoverField } from './InputPopoverField';
import { MovieIconContainer } from './MovieIconContainer';

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
      inputField.focus()
    } else {
      inputPopover.style.display = 'none';
    }
  })

  return (
    <div id='input-field-popover' className="input-popover">
      <div className="input-popover__icon">
        <MovieIconContainer />
      </div>
      <InputPopoverField
        setInputPopoverOpen={setInputPopoverOpen}
        setSearchContainerValue={setSearchContainerValue}
      />
    </div >
  )
}

