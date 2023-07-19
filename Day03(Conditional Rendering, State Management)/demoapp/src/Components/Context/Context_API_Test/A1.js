import {useState} from 'react'
import B1 from './B1'
import myContext from './Context'

function A1() {

    const [state,setState] = useState({
        name:'Chris',
        city:'Sydney',
        email:'Chris@gmail.com',
    })
  return (
    <div>
      <h2>A Component</h2>
      <myContext.Provider value={state}>
        <B1 />
      </myContext.Provider>
    </div>
  )
}

export default A1
