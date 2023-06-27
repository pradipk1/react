import {useState} from 'react'
import './Profile.css';

function Profile() {

    const [state,setState] = useState({
        name:'Chris John',
        gender:'male',
        city:'Delhi',
        image:'https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    });

    const [styles,setStyles] = useState({
        bgColor:'white',
        color:'black',
        text:'Check to Switch dark Mode'
    })

    const getUserData = () => {
        fetch('https://randomuser.me/api/?results=1')
        .then((res)=>res.json())
        .then((userData)=>{
            console.log(userData);
            setState({
                name:userData.results[0].name.first,
                gender:userData.results[0].gender,
                city:userData.results[0].location.city,
                image:userData.results[0].picture.large,
            });
        });
    }

    const changeStyle = (event) => {
        if(event.target.checked){
            setStyles({
                bgColor:'black',
                color:'white',
                text:'Uncheck to Switch Light Mode'
            });
        }
        else{
            setStyles({
                bgColor:'white',
                color:'black',
                text:'Check to Switch dark Mode'
            });
        }
    }
  return (
    <div className='card' style={{backgroundColor:styles.bgColor, color:styles.color}}>
        <div style={{width:'35%'}}>
            <img src={state.image} alt='profile image' width='100%' height='100%'/>
        </div>

        <div style={{width:'65%', padding:'30px'}}>
            <dl>
                <dt>
                    <b>User Name</b>
                </dt>
                <dd>{state.name}</dd>
                <dt>
                    <b>City</b>
                </dt>
                <dd>{state.city}</dd>
                <dt>
                    <b>Gender</b>
                </dt>
                <dd>{state.gender}</dd>
                <dt>
                    <b>Description</b>
                </dt>
                <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum nostrum possimus cumque aperiam deleniti, eligendi ipsum error dicta qui dolorem blanditiis asperiores consequatur soluta, praesentium velit! Porro, maiores dolorum.</dd>
            </dl>
            <button onClick={getUserData}>Random user</button>
            <br/>
            <input type='checkbox' onChange={changeStyle} style={{marginTop:'15px'}}/>
            {styles.text}
        </div>
    </div>
  )
}

export default Profile;