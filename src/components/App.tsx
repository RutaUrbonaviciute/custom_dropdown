import React from 'react';
import { OutputContainer } from './OutputContainer';
import { SearchContainer } from './SearchContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchContainer />
      <OutputContainer selectedMovie={'heyzs'} />
    </div>
  );
}

export default App;
