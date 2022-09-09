import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import { getProductDetails } from '../api/api';

function* ProductListSaga(action) {
  try {
    const productList = yield call(getProductDetails);
    yield put({
      type: types.GET_PRODUCT_DETAILS_SUCCESS,
      productList: productList.data,
    });
  } catch (e) {
    yield put({ type: types.GET_PRODUCT_DETAILS_ERROR, message: e.message });
  }
}

function* getProductListSaga() {
  yield takeLatest(types.GET_PRODUCT_DETAILS_REQUEST, ProductListSaga);
}

export default getProductListSaga;
