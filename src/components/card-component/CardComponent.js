import React, { useCallback } from 'react';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CardComponent(props) {
  const { cardData, key } = props;
  const navigate = useNavigate();

  const onCardClick = useCallback(() => {
    navigate(`/product-details/${cardData?.id}`);
  }, [cardData?.id, navigate]);

  return (
    <div className="card-details" key={key} onClick={onCardClick}>
      <img src={cardData?.image} alt="card-img" className="card-img" />
      <h3>{cardData?.title}</h3>
      <p>{cardData?.description}</p>
      <h4>${cardData?.price} total</h4>
      <div className="card-rating">
        <Rating readOnly value={cardData?.rating?.rate} />
      </div>
    </div>
  );
}
