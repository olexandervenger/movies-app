import { addTopFavorites, deleteTopFavorites, getTopFavorites } from "../../service/localStorage";
import { IMovie } from "../../types/IMovie";
import { REDUCER_ACTIONS_MOVIES } from "../actions/actionTypes";

export interface IMoviesReducerState {
  loading: boolean;
  error: null | string;
  movies: IMovie[];
  currentPage: number | null;
  favoriteMovies: string | null;
}

export type MoviesReducerActionType = { 
  type: string, 
  payload: any 
}

const initialState: IMoviesReducerState = {
  loading: false,
  movies: [],
  currentPage: null,
  favoriteMovies: getTopFavorites(),
  error: null,
}

const moviesReducer = (state = initialState, action: MoviesReducerActionType) => {
  switch(action.type) {
    case REDUCER_ACTIONS_MOVIES.SET_LOADING: 
      return { 
        ...state, 
        loading: action.payload,
      }
    case REDUCER_ACTIONS_MOVIES.SET_MOVIES: 
      return { 
        ...state, 
        movies: action.payload,
      }
    case REDUCER_ACTIONS_MOVIES.SET_CURRENT_PAGE: 
      return { 
        ...state, 
        currentPage: action.payload,
      }
    case REDUCER_ACTIONS_MOVIES.ADD_TOP_FAVORITE_MOVIE: 
      addTopFavorites(action.payload);

      return { 
        ...state, 
        favoriteMovies: getTopFavorites(),
      }

    case REDUCER_ACTIONS_MOVIES.DELETE_TOP_FAVORITE_MOVIE: 
      deleteTopFavorites(action.payload);

      return { 
        ...state, 
        favoriteMovies: getTopFavorites(),
      }
    case REDUCER_ACTIONS_MOVIES.SET_ERROR: 
      return { 
        ...state, 
        errro: action.payload,
      }
    default: 
      return state;
  }
}

export default moviesReducer;