import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

function LoginForm({setIsLoggedIn,}) {
    const [showPassword, setShowPassword] = useState(false)
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

    function togglePassword( ) {
        setShowPassword(!showPassword)
        // OR // 
        // setShowPassword(prev => !prev)
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged In")
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
                type= {showPassword ? "text" :  "password"} 
                placeholder='Enter Password'
                onChange={changeHandler}
                value={formData.password}
                name='password'
                />
                <span onClick={togglePassword} >  
                     {/* OR */}
                     {/* onClick={()=>setShowPassword(!showPassword)} */}
                    
                    {
                    showPassword? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                    }
                </span>

                <Link to='#'>
                    <p>Forgot Password</p>
                </Link>
                
            </label>

            <button>Sign In</button>
        </form>
        
    </>
  )
}

export default LoginForm