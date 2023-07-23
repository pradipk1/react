import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Jewelery() {

  const [data, setdata] = useState([]);
  
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/jewelery")
    .then(res=>res.json())
    .then((jdata)=>{
      console.log(jdata);
      setdata(jdata);
    });
  },[]);
  return (
    <div style={{padding:'50px'}}>
      <h2 style={{textAlign:'center'}}>JEWELERY CATEGORY</h2>
      {
        data.length > 0 ? <ul>
          {
            data.map((ele,index)=>{
              return <Link to={`/productdetails/${ele.id}`} style={{color:'blue'}} key={index+1}><li style={{marginTop:'15px'}}>{ele.title}</li></Link>
            })
          }
        </ul> : <div style={{color:'red', textAlign:'center', marginTop:'100px'}}><h3>... Loading ...</h3></div>
      }
    </div>
  )
}

export default Jewelery
