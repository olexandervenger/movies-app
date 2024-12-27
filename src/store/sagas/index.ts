import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import moviesSagas from './moviesSagas';

function* rootSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([ ...moviesSagas ]);
}

export default rootSaga;