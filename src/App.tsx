import React from 'react';
import { OutputContainer } from './components/OutputContainer/OutputContainer';
import { SearchContainer } from './components/SearchContainer/SearchContainer';

const App: React.FC = () => {
  return (
    <>
      <SearchContainer />
      <OutputContainer selectedMovie={'heyzs'} />
    </>
  );
}

export default App;
