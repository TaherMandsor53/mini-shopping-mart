import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import { getProductDetailsById } from '../api/api';

function* ProductListByIdSaga(action) {
  try {
    const productListById = yield call(getProductDetailsById, action.id);
    yield put({
      type: types.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
      productListById: productListById.data,
    });
  } catch (e) {
    yield put({ type: types.GET_PRODUCT_DETAILS_BY_ID_ERROR, message: e.message });
  }
}

function* getProductListByIdSaga() {
  yield takeLatest(types.GET_PRODUCT_DETAILS_BY_ID_REQUEST, ProductListByIdSaga);
}

export default getProductListByIdSaga;
