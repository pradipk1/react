import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Electronic() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/electronics")
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      setData(data);
    });
  },[]);
  return (
    <div style={{padding:'30px'}}>
      <h2 style={{textAlign:'center'}}>ELECTRONICS CATEGORY</h2>
      {
        data.length > 0 ? <ul>
          {
            data.map((ele,index)=>{
              return <Link to={`/productdetails/${ele.id}`} key={index+1} style={{color:'blue'}}><li style={{marginTop:'15px'}}>{ele.title}</li></Link>
            })
          }
        </ul> : <div style={{textAlign:'center', color:'red'}}>... Loading ...</div>
      }
    </div>
  )
}

export default Electronic
