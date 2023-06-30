import {useState,useEffect} from 'react'

function Cardd() {
    const [state,setState] = useState("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220820041116_Bugatti%202.jpg&w=700&q=90&c=1")

    useEffect(()=>{
        console.log("useEffect called callback function");

        return ()=>{console.log("I am Called before Comp enter in Unmount phase");
            alert("Called")
    }
    });

  return (
    <div style={{width:'300px', padding:'20px', margin:'50px auto', boxShadow:'0 0 10px black'}}>
      <img src={state} width="300" height="300"/>
      <h2>car Image</h2>
      <button onClick={()=>{setState("https://economictimes.indiatimes.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg")}}>Bike</button>
    </div>
  )
}

export default Cardd
