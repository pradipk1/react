import {useState} from 'react'

function Input(props) {

    const [data,setData] = useState("");

    const senddataToParent = ()=>{
        props.getData(data);
    }
  return (
    <div style={{textAlign:'center', margin:'50px auto', padding:'30px', boxShadow:'0 0 10px black'}}>
        <h2>Input Component</h2>
        <input type='text' placeholder='Enter Some text' onChange={(event)=>{setData(event.target.value)}}/>
        <button onClick={senddataToParent}>Submit</button>
    </div>
  )
}

export default Input;