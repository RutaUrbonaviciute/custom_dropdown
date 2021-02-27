import React from 'react';
import { InputPopoverField } from './InputPopoverField';
import { MovieIconContainer } from './MovieIconContainer';


export const InputPopover: React.FC = () => {
  return (
    <div id='input-field-popover' className="input-popover">
      <div className="input-popover__icon">
        <MovieIconContainer />
      </div>
      <InputPopoverField />
    </div >
  )
}

