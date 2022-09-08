import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import { getCategoryDetails } from '../api/api';

function* CategoryListSaga(action) {
  try {
    const categoryList = yield call(getCategoryDetails);
    yield put({
      type: types.CATEGORY_LIST_SUCCESS,
      categoryList: categoryList.data,
    });
  } catch (e) {
    yield put({ type: types.CATEGORY_LIST_ERROR, message: e.message });
  }
}

function* getCategoryListSaga() {
  yield takeLatest(types.CATEGORY_LIST_REQUEST, CategoryListSaga);
}

export default getCategoryListSaga;
