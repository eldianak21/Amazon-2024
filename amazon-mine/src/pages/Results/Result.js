import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import './Result.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';

function Result() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      setResults(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [categoryName]);
  
  return (
    <Layout>
   <section>
      <h1 style={{padding: "30px"}}>Resulsts</h1>
      <p style={{padding: "30px"}}>Category / {categoryName}</p>
      <hr/>
      <div className="products_container">
        {results?.map((product)=>(
          <ProductCard
          key={product.id}
          product={product}/>
        )
        )}
      </div>
     </section>
    </Layout>
  );
}

export default Result;