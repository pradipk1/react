import {useState} from 'react'

function ControlledForm() {

    const [formData, setFormData] = useState({
        name:'',
        password:'',
        email:'',
    })

    var formStyle = {
        width:'300px',
        padding:'20px',
        margin:'50px auto',
        boxShadow:'0 0 10px black',
        textAlign:'center'
    }

    const submitData = ()=>{
        // alert("Working");
        console.log(formData);
    }

  return (
    <div style={formStyle}>
        <h2>Controlled Component Form</h2>
        <form>
            <div>
                <input 
                    type='text'
                    placeholder='Enter Name' 
                    onChange={(event)=>{
                        setFormData({
                            ...formData,
                            name: event.target.value,
                        })
                    }} 
                />
            </div>
            <br/>
            <div>
                <input 
                    type='password' 
                    placeholder='Enter Password' 
                    onChange={(event)=>{
                        setFormData({
                            ...formData,
                            password: event.target.value,
                        })
                    }}
                />
            </div>
            <br/>
            <div>
                <input 
                    type='text' 
                    placeholder='Enter Email' 
                    onChange={(event)=>{
                        setFormData({
                            ...formData,
                            email: event.target.value,
                        })
                    }}
                />
            </div>
            <br/>
            <div>
                <input type='button' value='Register' onClick={submitData} />
            </div>
        </form>
    </div>
  )
}

export default ControlledForm
