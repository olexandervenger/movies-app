import { put, fork } from "redux-saga/effects";
import { REDUCER_ACTIONS_MOVIES } from "../actions/actionTypes";

const safeWrapper = function* (saga: any, ...args: any) {
  try {
    yield put({ type: REDUCER_ACTIONS_MOVIES.SET_LOADING, payload: true });
    yield saga(args[0]);
  } catch (err) {
    yield put({ type: REDUCER_ACTIONS_MOVIES.SET_ERROR, payload: "Failed" });
  } finally {
    yield put({ type: REDUCER_ACTIONS_MOVIES.SET_LOADING, payload: false });
  }
}

export const safe = (saga: any) => function* (prop: any) {
  yield fork(safeWrapper, saga, prop)
};
