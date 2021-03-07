import React from 'react';
import { OutputContainer } from './components/OutputContainer/OutputContainer';
import { SearchContainer } from './components/SearchContainer/SearchContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchContainer />
      <OutputContainer selectedMovie={'heyzs'} />
    </div>
  );
}

export default App;
