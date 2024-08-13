import React from 'react'

function CategoryCard({ data }) {
  return (
    <div className="category">
      <a href={`/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt={data.title} />
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard