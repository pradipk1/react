import React, {useState, useEffect} from 'react'
import './Counter.css'

function Counter() {

  let [state, setState] = useState(0);
  console.log("Counter comp is called");

  useEffect(()=>{
    document.title=`Count value is ${state}`
  })

    const updateCount = () =>{
        // alert("clicked!");

        // here final state value is 3 if initial state value is 0
        setState(state+1);
        setState(state+2);
        setState(state+3);

        // here final state value is 6 if initial state value is 0
        setState((prevState)=> prevState+1);
        setState((prevState)=> prevState+2);
        setState((prevState)=> prevState+3);
    }
  return (
    <div className='counter'>
        <h2>Count value is {state}</h2>
        <button onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default Counter;