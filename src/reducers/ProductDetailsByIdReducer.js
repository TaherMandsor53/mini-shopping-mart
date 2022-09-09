import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  productListById: [],
};

export default function getProductListById(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return { isFetching: false, productListById: action.productListById };

    case types.GET_PRODUCT_DETAILS_BY_ID_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
