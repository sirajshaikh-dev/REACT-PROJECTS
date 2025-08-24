import './App.css'
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

function App() {

  return (
    <>
      <div className='main-container'>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2.0rem" }}>My course list</h1>
        <CourseForm/>
        <CourseList/>
      </div>
    </>
  )
}

export default App
