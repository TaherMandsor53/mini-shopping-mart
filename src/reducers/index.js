import { combineReducers } from 'redux';

import getCategoryList from './CategoryListReducer';
import getProductList from './ProductDetailsReducer';
import getProductListById from './ProductDetailsByIdReducer';

export default combineReducers({
  getCategoryList,
  getProductList,
  getProductListById,
});
