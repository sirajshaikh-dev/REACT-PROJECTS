import React from 'react'
import { useState } from 'react'

function LoginForm({}) {

    const [formData,setFormData]= useState({
        email: "",
        password:''
    })

    function changeHandler(e) {
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]: e.target.value 
        })
        )
    }

  return (
    <div> 
        <form>
        <label >
            <p>Email address <sup>*</sup></p>
            <input 
            required
            type="email" 
            placeholder='Enter email address'
            onChange={changeHandler}
            value={formData.email}
            name='email'
            />
        </label>
        <label >
            <p> Enter Password <sup>*</sup></p>
            <input 
            required
            type="password" 
            placeholder='Enter Password'
            onChange={changeHandler}
            value={formData.password}
            name='password'
            />
        </label>
        </form>
        
    </div>
  )
}

export default LoginForm