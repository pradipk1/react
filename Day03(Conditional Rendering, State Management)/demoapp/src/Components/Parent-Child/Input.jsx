import {useState} from 'react'
import Text from './Text';

function Input() {

    const [inputData,setInputData] = useState("");
    const [state,setState] = useState("No Data");

    const sendDataToChild = ()=>{
        setState(inputData);
    }
  return (
    <div style={{textAlign:'center', margin:'50px auto', padding:'30px', boxShadow:'0 0 10px black', width:'300px'}}>
        <h2>Input Component</h2>
        <input type='text' placeholder='Enter Some text' onChange={(event)=>{setInputData(event.target.value)}}/>
        <button onClick={sendDataToChild}>Submit</button>
        <Text data={state}/>
    </div>
  )
}

export default Input;