import {useState, useContext} from 'react'
import { loginContext } from './Context_API_Test/Context';

function Login() {

    const [state,setState] = useState({
        name:'',
        password:'',
    });

    const {fnLoggedIn} = useContext(loginContext);
    console.log(fnLoggedIn);
    
    const handleForm = (event) => {
        event.preventDefault();
        // console.log(state);
        if(state.name===process.env.REACT_APP_USERNAME && state.password===process.env.REACT_APP_PASSWORD){
            // alert("Logged In");
            fnLoggedIn({
                isLoggedIn:'true',
                user:'Kabir',
            })
        }else{
            alert("Please check the credentials")
        }
    };
  return (
    <div style={{width:'300px', margin:'50px auto', padding:'20px', textAlign:'center', boxShadow:'0 0 10px black'}}>
      <h2>Login form</h2>
      <form onSubmit={handleForm}>
        <div style={{marginBottom:'20px'}}>
            <input 
                type='text' 
                placeholder='Enter Name'
                onChange={(e)=>{
                    setState({
                        ...state,
                        name:e.target.value
                    })
                }}
            />
        </div>
        <div style={{marginBottom:'20px'}}>
            <input 
                type='password' 
                placeholder='Enter Password'
                onChange={(e)=>{
                    setState({
                        ...state,
                        password:e.target.value
                    })
                }}
            />
        </div>
        <input type='submit' value='Login'/>
      </form>
      
    </div>
  )
}

export default Login
