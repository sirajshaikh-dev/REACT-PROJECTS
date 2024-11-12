import React, { useState } from 'react'
 
function SignupForm() {
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
  return (
    <> 
        <form >
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <div>
                <label >
                    FirstName <sup>*</sup>
                    <input type="text"
                    required 
                    placeholder='Enter first name'
                    name='firstname'
                    value={FormData.value}
                    onChange={changeHandler}
                    />
                </label>
                <label >
                    Last Name <sup>*</sup>
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
                    Email Address <sup>*</sup>
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
                    Create Password <sup>*</sup>
                    <input type="password" 
                    required
                    placeholder='Enter Password'
                    name='createPassword'
                    value={FormData.value}
                    onChange={changeHandler}
                    />
            </label>
            <label >
                    Confirm Password <sup>*</sup>
                    <input type="password" 
                    required
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={FormData.value}
                    onChange={changeHandler}
                    />
            </label>
            </div>
            <button>Create Account</button>
            <div>------</div>
                OR
            <div>------</div>
        </form>
    </>
  )
}

export default SignupForm