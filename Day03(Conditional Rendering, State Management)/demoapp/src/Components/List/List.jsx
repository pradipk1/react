import React,{useState} from 'react'

function List() {

    let [techItems,setTechItems] = useState(["React","angular","Spring","DSA","JS"]);
    let [name,setname] = useState("Kabir");
    let [city, setCity] = useState("Delhi");
  return (
    <div style={{textAlign:"center"}}>
        <h3>List of Technologies</h3>
        <h5>{name} is from {city}</h5>
        <ol>
            {
                techItems.map((ele)=>{
                    return <li>{ele}</li>
                })
            }
        </ol>
    </div>
  )
}

export default List;