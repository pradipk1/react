import {useContext} from 'react'
import { loginContext } from './Context_API_Test/Context'
import { Link } from 'react-router-dom';

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
        <Link style={aStyle} to='/'>Home</Link>
        <Link style={aStyle} to='/profile'>Profile</Link>
        <Link style={aStyle} to='/products'>Product</Link>
        <Link style={aStyle} to='/counter/?gender=male&sort=asc'>Counter</Link>
        <Link style={aStyle} to='/redux'>Redux</Link>
        <span style={{marginRight:'30px', color:'green', fontSize:'20px'}}>
            {state.user}
        </span>
        {
          state.isLoggedIn ? <button style={{marginRight:'50px'}} onClick={()=>{fnLoggedOut()}}>Logout</button> : <div></div>
        }
        
      </div>
    </div>
  )
}

export default Header1
