import * as types from './actionTypes';

export function getCategoryList() {
  return {
    type: types.CATEGORY_LIST_REQUEST,
  };
}

export function getProductDetails() {
  return {
    type: types.GET_PRODUCT_DETAILS_REQUEST,
  };
}

export function getProductDetailsById(id) {
  return {
    type: types.GET_PRODUCT_DETAILS_BY_ID_REQUEST,
    id,
  };
}
