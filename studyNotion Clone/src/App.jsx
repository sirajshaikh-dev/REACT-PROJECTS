import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from 'react'
import './index.css';

function App() {
const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <>
    <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>about</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        
        <Route path='/login' element={<Login />}>Contact</Route>
        <Route path='/signup' element={<Signup/>}>Contact</Route>
    </Routes>
    </>
  )
}

export default App
