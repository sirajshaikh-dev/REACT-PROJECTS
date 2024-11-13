# STUDYNOTION 
##  Steps to create this project

### Step 1:
- Create New folder
- **Run :** 
- ``` npm create vite@latest```
- ```npm i ```
- ```npm run dev ```

### Step 2: Create Navbar
- Add ```div to store logo``` 
- Add  
```js
    <nav>
        <ul className='flex ml-5 mr-3 gap-3'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='contact'>Contact</Link></li>
        </ul>
    </nav>
```
- Add Button with Logic
```js
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

```

## Step 3:
- Create Routes in App.js
- Define isLoggedIn state and pass as props
```js
function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>about</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}>Contact</Route>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}>Contact</Route>
        <Route path='/dashboard' element={<Dashboard/>}>Contact</Route>
    </Routes>
    </>
  )
}
```
## Step 4: Create Login & Signup Page 
```js L
// Login Form
import Template from "../Components/Template";
import image from "../assets/login.png"

function Login({setIsLoggedIn }) {
  return (
    <div>
      <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={image}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
     </div>
  )
}

export default Login;

```

```js 
// Signup Form
import Template from "../Components/Template";
import image from "../assets/signup.png"

function Signup({setIsLoggedIn }) {
  return (
    <div>
     <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={image}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  );
}

export default Signup;

```
## Step 5: Create Template Comp reusable for both Login and Signup page

```js
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
```
## Step 6: Create LoginForm and SignupForm Components

## Step 7: Add Logic to Forms 
 - on Eye click show/hide password
 - password validation for create and confirm password

