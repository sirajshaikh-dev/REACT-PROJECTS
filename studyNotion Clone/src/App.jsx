import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from 'react'
import './index.css';
import Dashboard from './pages/Dashboard'

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

export default App
