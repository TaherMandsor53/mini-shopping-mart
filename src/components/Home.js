import React, { useCallback, useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { getCategoryList } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  const handleChange = useCallback(event => {
    setCategory(event.target.value);
  }, []);

  const categoryListData = useSelector(state => state.getCategoryList?.categoryList);

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
    </div>
  );
}
