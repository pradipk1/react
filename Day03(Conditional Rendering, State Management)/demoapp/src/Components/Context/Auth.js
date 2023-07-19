import {useContext} from 'react'
import Home from './Home';
import Login from './Login';
import { loginContext } from './Context_API_Test/Context';

function Auth() {

    const {state} = useContext(loginContext)

  return (
    <div>
      {
        state.isLoggedIn ? <Home /> : <Login />
      }
    </div>
  )
}

export default Auth
