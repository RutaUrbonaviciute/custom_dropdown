export interface InitialStateType {
  selectedMovie: SelectedMovieType
}

export interface SelectedMovieType {
  id: number | null,
  vote_average: number | null,
  overview: string;
  release_date: string;
  title: string;
}

export interface ActionType {
  type: 'SET_SELECTED_MOVIE',
  selectedMovie: SelectedMovieType
}