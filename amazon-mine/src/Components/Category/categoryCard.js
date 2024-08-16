import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

function CategoryCard({ data }) {
  console.log(data) // {title: 'Jewelery', name: 'jewelery', imageLink:'https://m.media-amazon.com/images/I/61vD2yP7jQL._AC_SY675_.jpg'} x16
  return (
    <div className="category">
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;