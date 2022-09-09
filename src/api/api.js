import axios from 'axios';

const baseURL = `https://fakestoreapi.com`;

export const getCategoryDetails = () => {
  const URL = `${baseURL}/products/categories`;
  return axios.get(URL);
};

export const getProductDetails = () => {
  const URL = `${baseURL}/products`;
  return axios.get(URL);
};

export const getProductDetailsById = id => {
  const URL = `${baseURL}/products/${id}`;
  return axios.get(URL);
};
