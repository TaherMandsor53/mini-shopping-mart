import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  productList: [],
};

export default function getProductList(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCT_DETAILS_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_PRODUCT_DETAILS_SUCCESS:
      return { isFetching: false, productList: action.productList };

    case types.GET_PRODUCT_DETAILS_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
