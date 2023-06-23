import React,{useState} from 'react'

function Todo() {

    const [inputData,setInputData] = useState("");
    const [state,setState] = useState("No Data in the State");

    const getInputData = (event) =>{
        setInputData(event.target.value);
    }

    const updateState = () => {
      setState(inputData);
    }

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
        <h2>Todo App</h2>
        <input type='text' placeholder='Enter Some Content' onChange={getInputData}/>
        <button onClick={updateState}>Submit</button>
        <p>{state}</p>
    </div>
  )
}

export default Todo;