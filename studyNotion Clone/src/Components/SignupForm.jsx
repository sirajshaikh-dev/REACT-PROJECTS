import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import toast from 'react-hot-toast';

function SignupForm({setIsLoggedIn}) {
    const navigate= useNavigate()

    const [showCreatePassword, setshowCreatePassword] = useState(false)
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)

    const [formData, setFormData] = useState({
        firstname: "",
        lastname : '',
        emai:'',
        createPassword: '',
        confirmPassword: ''
    })

    function changeHandler(e) {
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    function submitHandler(e) {
        e.preventDefault();
        if (formData.createPassword != formData.confirmPassword) {
            console.log(formData);  // Log data even password do not match
            toast.error('password did not match')
            return
        }
        setIsLoggedIn(true)
        toast.success('Account Created')
        navigate('/dashboard')
        console.log(formData); //Log data only if pasword mathces
    }
  return (
    <> 
        <div className='flex gap-3'>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div>
                <label >
                <p>First Name <sup>*</sup></p>
                    <input type="text"
                    required 
                    placeholder='Enter first name'
                    name='firstname'
                    value={FormData.value}
                    onChange={changeHandler}
                    />
                </label>
                <label >
                <p>Last Name <sup>*</sup></p>
                    <input type="text" 
                    required
                    placeholder='Enter last name'
                    name='lastname'
                    value={FormData.value}
                    onChange={changeHandler}
                    />
                </label>
            </div>
            <div>
                <label >
                    <p>Email address <sup>*</sup></p>
                        <input type="email" 
                        required
                        placeholder='Enter email address'
                        name='email'
                        value={FormData.value}
                        onChange={changeHandler}
                        />
                </label>
            </div>

            <div>
                <label >
                        <p>Create Password <sup>*</sup></p>
                            <input 
                            type= {showCreatePassword ? "text" : "password"} 
                            required
                            placeholder='Enter Password'
                            name='createPassword'
                            value={FormData.value}
                            onChange={changeHandler}
                            />

                    <span onClick={()=>setshowCreatePassword(!showCreatePassword)}>
                        {
                        showCreatePassword 
                        ? <AiOutlineEyeInvisible/> 
                        : <AiOutlineEye/> 
                        }
                    </span>
                </label>
                    <label >
                    <p>confirmPassword <sup>*</sup></p>                    <input 
                            type= {showConfirmPassword ? "text" : "password"} 
                            required
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            value={FormData.value}
                            onChange={changeHandler}
                            />
                    </label>
                    <span onClick={()=>setshowConfirmPassword(!showConfirmPassword)}>
                        {
                            showConfirmPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                        }
                    </span>
            </div>
            <button>Create Account</button>
            
        </form>
    </>
  )
}

export default SignupForm