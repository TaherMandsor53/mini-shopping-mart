import React from 'react';
import { Rating } from '@mui/material';

export default function CardComponent(props) {
  const { cardData, key } = props;

  return (
    <div className="card-details" key={key}>
      <a href={`/product-details/${cardData?.id}`} rel="noreferrer">
        <img src={cardData?.image} alt="card-img" className="card-img" />
        <h3>{cardData?.title}</h3>
        <p>{cardData?.description}</p>
        <h4>${cardData?.price} total</h4>
        <div className="card-rating">
          <Rating readOnly value={cardData?.rating?.rate} />
        </div>
      </a>
    </div>
  );
}
