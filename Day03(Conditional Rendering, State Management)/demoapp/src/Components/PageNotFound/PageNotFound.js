import React from 'react'

function PageNotFound() {

    var divStyle = {
        color:'red',
        textAlign:'center',
        marginTop:'100px',
    }
  return (
    <div style={divStyle}>
      <h1 style={{fontSize:'72px'}}>Page Not Found</h1>
      <p>Entered URL is not Valid</p>
    </div>
  )
}

export default PageNotFound
