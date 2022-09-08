import * as types from './actionTypes';

export function getCategoryList() {
  return {
    type: types.CATEGORY_LIST_REQUEST,
  };
}
