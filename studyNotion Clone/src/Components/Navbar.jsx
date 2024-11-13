import React from 'react'
import {toast} from "react-hot-toast"
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

function Navbar({isLoggedIn, setIsLoggedIn}) {
  return (
    <div className='flex justify-evenly items-center'>
      <div>
        <Link to='/'>
        <img src={logo} alt='logo'  width={160} height={32} loading='lazy'/>
        </Link>
      </div>

      <nav>
        <ul className='flex ml-5 mr-3 gap-3'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='contact'>Contact</Link></li>
        </ul>
      </nav>

      <div className='flex mr-2 ml-2 gap-3'> 
        {
        !isLoggedIn &&
        <button > 
        <Link to='login'>Login</Link>
        </button>
        }
        
        {
          !isLoggedIn &&
        <button>
        <Link to='signup'>Signup</Link>
        </button>
        }

        {
        isLoggedIn &&
        <button onClick={()=>{
        setIsLoggedIn(false)
        toast.success("Logged Out")
        }}>
          <Link to='/'>Logout</Link>
        </button>
        }
        {
          isLoggedIn &&
        <button>
        <Link to='dashboard'>Dasboard</Link>
        </button>
        }
      </div>
    </div>
  )
}

export default Navbar
