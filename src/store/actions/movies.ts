import { REDUCER_ACTIONS_MOVIES, SAGA_ACTIONS_MOVIES } from "./actionTypes";

export const moviesRequest = (cureentPage: number) => ({
  type: SAGA_ACTIONS_MOVIES.FETCH_MOVIES,
  payload: cureentPage,
})

export const addTopFavoriteMovie = (favoriteId: string) => ({
  type: REDUCER_ACTIONS_MOVIES.ADD_TOP_FAVORITE_MOVIE,
  payload: favoriteId,
})

export const deleteTopFavoriteMovie = (favoriteId: string) => ({
  type: REDUCER_ACTIONS_MOVIES.DELETE_TOP_FAVORITE_MOVIE,
  payload: favoriteId,
})