import {useContext} from 'react'
import myContext from './Context'

function D1(props) {

    const data = useContext(myContext);
    console.log(props)
  return (
    <div>
      <h2>D Component</h2>
      <dl>
        <dt>Name</dt>
        <dd>{data.name}</dd>
        <dt>City</dt>
        <dd>{data.city}</dd>
        <dt>Email</dt>
        <dd>{data.email}</dd>
      </dl>
    </div>
  )
}

export default D1
