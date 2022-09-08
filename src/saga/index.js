import { fork } from 'redux-saga/effects';
import getCategoryListSaga from './CategoryListSaga';

function* sagas() {
  yield fork(getCategoryListSaga);
}

export default sagas;
