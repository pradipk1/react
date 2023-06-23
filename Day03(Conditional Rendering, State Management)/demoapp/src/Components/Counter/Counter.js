import React, {useState} from 'react'
import './Counter.css'

function Counter() {

  let [state, setState] = useState(0);
  console.log(state);

    const updateCount = () =>{
        // alert("clicked!");
        setState(state+1);
    }
  return (
    <div className='counter'>
        <h2>Count value is {state}</h2>
        <button onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default Counter;