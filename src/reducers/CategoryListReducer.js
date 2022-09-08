import * as types from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  categoryList: [],
};

export default function getCategoryList(state = initialState, action) {
  switch (action.type) {
    case types.CATEGORY_LIST_REQUEST:
      return { ...state, isFetching: true };

    case types.CATEGORY_LIST_SUCCESS:
      return { isFetching: false, categoryList: action.categoryList };

    case types.CATEGORY_LIST_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
