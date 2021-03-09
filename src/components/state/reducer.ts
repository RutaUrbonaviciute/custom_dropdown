import { ActionType, InitialStateType } from './types';

export const initialState = {
  selectedMovie: {
    id: null,
    vote_average: null,
    overview: '',
    release_date: '',
    title: '',
  }
};

export function reducer(state: InitialStateType, action: ActionType) {
  switch (action.type) {
    case 'SET_SELECTED_MOVIE':
      return { ...state, selectedMovie: action.selectedMovie };

    default:
      return state;
  }
}