import {useState,useEffect} from 'react'

function Cardd() {
    const [state,setState] = useState("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220820041116_Bugatti%202.jpg&w=700&q=90&c=1")
    const [bike, setBike] = useState("https://economictimes.indiatimes.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg");
    const [pizza, setPizza] = useState("https://static.toiimg.com/thumb/51892394/10-best-mid-range-Italian-Pizzeria-in-Gurgaon.jpg?width=1200&height=900");

    useEffect(()=>{
        console.log("useEffect called callback function");

        return ()=>{
          localStorage.removeItem('Name')
          console.log("I am Called before Comp enter in Unmount phase");
          // alert("Called")
    }
    },[state,bike]);

    const insertData = () =>{
      localStorage.setItem("Name",'React');
    }

  return (
    <div style={{width:'800px', padding:'20px', margin:'50px auto', boxShadow:'0 0 10px black'}}>
      <img src={state} width="300" height="300"/>
      <img src={bike} width="300" height="300"/>
      <h2>car Image</h2>
      <button onClick={()=>{setBike("https://media.zigcdn.com/media/model/2023/Jan/front-left-view-190349671_930x620.jpg")}}>Bike</button>
      <button onClick={()=>{setState(pizza)}}>Pizza</button>
      {/* <button onClick={insertData}>Insert Data</button> */}
    </div>
  )
}

export default Cardd
