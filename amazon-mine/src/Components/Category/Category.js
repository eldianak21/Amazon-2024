import React from 'react'
import { categoryInfo } from './categoryFullnfos'
import CategoryCard from './categoryCard'
import "./Category.css"
function Category() {
  return (
    <section className="category_container">
      {categoryInfo.map((info, index) => (
        <CategoryCard key={index} data={info} />
      ))}
    </section>
  )
}

export default Category