import { fork } from 'redux-saga/effects';
import getCategoryListSaga from './CategoryListSaga';
import getProductListSaga from './ProductListSaga';
import getProductListByIdSaga from './ProductListByIdSaga';

function* sagas() {
  yield fork(getCategoryListSaga);
  yield fork(getProductListSaga);
  yield fork(getProductListByIdSaga);
}

export default sagas;
