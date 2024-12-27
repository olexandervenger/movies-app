import { put, takeLatest } from "redux-saga/effects";
import { safe } from "./errorHandlerSaga";
import {
  REDUCER_ACTIONS_MOVIES,
  SAGA_ACTIONS_MOVIES,
} from "../actions/actionTypes";
import { getMoviesByPage } from "../../service/api";
import { AxiosResponse } from "axios";
import { IMovie } from "../../types/IMovie";

const getMovies = function* ({ payload }: any) {
  const response: AxiosResponse = yield getMoviesByPage(payload);
  const movies: IMovie[] = response.data.results.map((movie: any) => ({ 
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    image: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
    release_date: movie.release_date,
    vote_average: movie.vote_average
  }));
  yield put({ type: REDUCER_ACTIONS_MOVIES.SET_MOVIES, payload: movies });
  yield put({ type: REDUCER_ACTIONS_MOVIES.SET_CURRENT_PAGE, payload });
};

export default [
  takeLatest(SAGA_ACTIONS_MOVIES.FETCH_MOVIES, safe(getMovies)),
];