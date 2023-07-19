import {useContext} from 'react'
import { loginContext } from './Context_API_Test/Context'

let divStyle = {
    backgroundColor:'black',
    color:'white',
    padding:'20px',
    display:'flex',
    justifyContent:'space-between',
}

let aStyle = {
    color:'white',
    textDecoration:'none',
    marginRight:'50px'
}

function Header1() {

  const {state, fnLoggedOut} = useContext(loginContext);

  return (
    <div style={divStyle}>
      <div>
        <span style={{fontSize:'25px',}}>React</span>
      </div>
      <div>
        <a style={aStyle} href='#'>Home</a>
        <a style={aStyle} href='#'>Profile</a>
        <a style={aStyle} href='#'>Product</a>
        <span style={{marginRight:'30px', color:'green', fontSize:'20px'}}>
            {state.user}
        </span>
        <button style={{marginRight:'50px'}} onClick={()=>{fnLoggedOut()}}>Logout</button>
      </div>
    </div>
  )
}

export default Header1
