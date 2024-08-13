import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className="cards">
      <a href={`/products/${id}`}>
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className="rating">
          {/* Rating */}
          <Rating value={rating.rate} precision={0.5} readOnly />
          {/* count */}
          <small>({rating.count})</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className="button">add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;