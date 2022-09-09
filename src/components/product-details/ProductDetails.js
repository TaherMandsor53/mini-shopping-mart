import React, { useEffect } from 'react';
import { getProductDetailsById } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import LoaderImg from '../../assets/Loader.svg';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const pathName = window.location.pathname;
  const productId = pathName.split('/')[2];

  useEffect(() => {
    dispatch(getProductDetailsById(parseInt(productId)));
  }, [dispatch, productId]);

  const productListByIdData = useSelector(state => state.getProductListById?.productListById);
  const isLoading = useSelector(state => state.getProductListById?.isFetching);

  return (
    <>
      {isLoading ? (
        <img src={LoaderImg} alt="loader" className="loader-img" />
      ) : (
        <div className="product-details">
          <div>
            <img src={productListByIdData?.image} alt="product-detail" className="product-image" />
          </div>
          <div className="product-info">
            <h3>{productListByIdData?.title}</h3>
            <p>{productListByIdData?.description}</p>
            <h4>${productListByIdData?.price} total</h4>
            <Rating readOnly value={productListByIdData?.rating?.rate} />
          </div>
        </div>
      )}
    </>
  );
}
