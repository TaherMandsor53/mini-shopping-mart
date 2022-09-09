import React, { useCallback, useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { getCategoryList, getProductDetails } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from './card-component/CardComponent';
import LoaderImg from '../assets/Loader.svg';

export default function Home() {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getProductDetails());
  }, [dispatch]);

  const handleChange = useCallback(event => {
    setCategory(event.target.value);
  }, []);

  const categoryListData = useSelector(state => state.getCategoryList?.categoryList);
  const productListData = useSelector(state => state.getProductList?.productList);
  const productIsLoading = useSelector(state => state.getProductList?.isFetching);

  const filterProductDetails =
    productListData && productListData.length > 0 && productListData.filter(item => item.category === category);

  return (
    <div className="home-details">
      <FormControl sx={{ minWidth: 320 }}>
        <InputLabel id="demo-simple-select-filled-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={category}
          onChange={handleChange}
          label="Select Category"
        >
          {categoryListData &&
            categoryListData.length > 0 &&
            categoryListData.map((item, key) => {
              return (
                <MenuItem value={item} key={key}>
                  {item}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      {productIsLoading ? (
        <div>
          <img src={LoaderImg} alt="loader" className="loader-img" />
        </div>
      ) : (
        <div className="card-comp">
          {filterProductDetails &&
            filterProductDetails.length > 0 &&
            filterProductDetails.map((data, key) => {
              return <CardComponent cardData={data} key={key} />;
            })}
        </div>
      )}
    </div>
  );
}
