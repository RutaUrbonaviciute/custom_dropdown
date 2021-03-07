import React from 'react';

interface Props {
  selectedMovie: any;
}

export const OutputContainer: React.FC<Props> = ({ selectedMovie }) => (
  <div>
    {selectedMovie}
  </div>
);
