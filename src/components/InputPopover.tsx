import React from 'react';
import { InputPopoverField } from './InputPopoverField';
import { MovieIconContainer } from './MovieIconContainer';

interface Props {
  onInputPopoverToggle: () => void;
  setSearchContainerValue: (title: string) => void;
}

export const InputPopover: React.FC<Props> = ({ onInputPopoverToggle, setSearchContainerValue }) => {
  return (
    <div id='input-field-popover' className="input-popover">
      <div className="input-popover__icon">
        <MovieIconContainer />
      </div>
      <InputPopoverField
        onInputPopoverToggle={onInputPopoverToggle}
        setSearchContainerValue={setSearchContainerValue}
      />
    </div >
  )
}

