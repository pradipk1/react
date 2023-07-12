import React from 'react'

function Form() {

    var formStyle = {
        width:'300px',
        padding:'20px',
        margin:'50px auto',
        boxShadow:'0 0 10px black',
        textAlign:'center'
    }
  return (
    <div style={formStyle}>
        <h2>Register Form</h2>
        <form>
            <div>
                <input type='text' placeholder='Enter Name' />
            </div>
            <br/>
            <div>
                <input type='password' placeholder='Enter Password' />
            </div>
            <br/>
            <div>
                <input type='text' placeholder='Enter Email' />
            </div>
            <br/>
            <div>
                <input type='button' value='Register' />
            </div>
        </form>
    </div>
  )
}

export default Form
