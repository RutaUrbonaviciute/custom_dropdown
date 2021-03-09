import React, { useReducer, createContext, Dispatch } from 'react';
import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { initialState, reducer } from './components/state/reducer';
import { ActionType, InitialStateType } from './components/state/types';

export const SearchComponentContext = createContext<{ state: InitialStateType }>({ state: initialState });
export const SearchComponentDispatch = createContext<{ dispatch: Dispatch<ActionType> }>({ dispatch: () => { } })

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchComponentContext.Provider value={{ state }}>
      <SearchComponentDispatch.Provider value={{ dispatch }}>
        <SearchContainer />
      </SearchComponentDispatch.Provider>
    </SearchComponentContext.Provider>
  );
}

export default App;
