import React, { useState } from 'react'
import { nameAction } from './action';

function Input1() {

    const [state,setState] = useState("");

    const sendDataToAction =() =>{
        nameAction(state);
    }
    
  return (
    <div style={{padding:'50px 100px'}}>
      <h3>Input Component</h3>
      <input type="text" placeholder='Enter Some Name' onChange={(e)=>{setState(e.target.value)}}/>
      <button onClick={sendDataToAction}>Submit</button>
    </div>
  )
}

export default Input1
