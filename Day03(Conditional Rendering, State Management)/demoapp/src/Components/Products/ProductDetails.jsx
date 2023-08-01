import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {id, category} = useParams();
  console.log(id, category);

  const [state,setState] = useState({});

  const categoryData = useSelector((storeData)=>{
    return (
      category==="electronics" ? storeData.products.electronic : storeData.products.jewelery
    )
  });

  console.log(categoryData);

  const productData = categoryData.filter((ele)=>{
    return id==ele.id;
  });

  console.log(productData);


  // previously we were fetching the data using api but now we are fetching data from redux store
  // useEffect(()=>{
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //   .then(res=>res.json())
  //   .then((data)=>{
  //     console.log(data);
  //     setState(data);
  //   });
  // },[]);

  return (
    <div style={{textAlign:'center'}}>
      <h2>{Object.keys(productData[0]).length > 0 ? productData[0].category.toUpperCase() : ""}</h2>
      <img src={Object.keys(productData[0]).length > 0 ? productData[0].image : ""} width="300px" height="300px"/>
      <h2>{Object.keys(productData[0]).length > 0 ? productData[0].title : ""}</h2>
      <p>$ {Object.keys(productData[0]).length > 0 ? productData[0].price : ""}</p>
    </div>
  )
}

export default ProductDetails
