import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import electronicAction from './Redux_Pipeline/electronicAction';
import { useDispatch, useSelector } from 'react-redux';

function Electronic() {

  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const electronicData = useSelector((storeData)=>{
    return storeData.products.electronic;
  });

  useEffect(()=>{
    if(electronicData.length===0){
      fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res=>res.json())
      .then((data)=>{
        console.log(data);
        electronicAction(data, dispatch);
        setData(data);
      });
    }else{
      setData(electronicData);
    }
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
        </ul> : <div style={{textAlign:'center', color:'red', marginTop:'100px'}}><h3>... Loading ...</h3></div>
      }
    </div>
  )
}

export default Electronic
