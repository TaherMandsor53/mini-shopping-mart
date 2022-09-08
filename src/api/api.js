import axios from 'axios';

const baseURL = `https://fakestoreapi.com`;

export const getCategoryDetails = () => {
  const URL = `${baseURL}/products/categories`;
  return axios.get(URL);
};
