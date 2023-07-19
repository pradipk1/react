import React from 'react'
import D1 from './D1'

function C1(props) {
    console.log(props)
  return (
    <div>
      <h2>C Component</h2>
      <p></p>
      <D1 />
    </div>
  )
}

export default C1
