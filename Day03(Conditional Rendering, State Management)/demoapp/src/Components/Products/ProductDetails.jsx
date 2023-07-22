import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {id} = useParams();
  console.log(id)

  const [state,setState] = useState({});

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      setState(data);
    });
  },[]);
  return (
    <div style={{textAlign:'center'}}>
      <h2>{Object.keys(state).length > 0 ? state.category.toUpperCase() : ""}</h2>
      <img src={Object.keys(state).length > 0 ? state.image : ""} width="300px" height="300px"/>
      <h2>{Object.keys(state).length > 0 ? state.title : ""}</h2>
      <p>$ {Object.keys(state).length > 0 ? state.price : ""}</p>
    </div>
  )
}

export default ProductDetails
