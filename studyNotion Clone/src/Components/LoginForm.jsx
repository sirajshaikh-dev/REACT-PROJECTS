import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn,}) {

    const navigate= useNavigate();

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

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true)
        navigate('/dashboard')
    }

  return (
    <> 
        <form onSubmit={submitHandler}>
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

            <button>Sign In</button>
        </form>
        
    </>
  )
}

export default LoginForm