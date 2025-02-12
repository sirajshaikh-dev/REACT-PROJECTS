import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frameImage from '../assets/frame.png'
 
function Template({title, description1, description2,
  image, formtype, setIsLoggedIn}){

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{description1}</span>
          <span>{description2}</span>
        </p>

        {
          formtype=== "signup"
          ?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>)
          :(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }

          <div className='flex'>
            <div>-----------</div>
                      OR 
            <div>-----------</div>
          </div>

          <button>Sign up With Google</button>
      </div>

      

        <div>
          <img 
            src={image} 
            alt='Login image' 
            width={558}
            height={504}
            loading='lazy' 
          />
          <img 
            src={frameImage} 
            alt='Frame image' 
            width={558}
            height={504}
            loading='lazy' 
          />
        </div>
    </div>
  )
}

export default Template