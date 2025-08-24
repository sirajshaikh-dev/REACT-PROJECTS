import React, { useState } from 'react'
import useCourseStore from '../store/courseStore'
import { v4 as uuidv4 } from 'uuid';

const CourseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState("")
    // console.log('Course form rendered');

    const handleCourseSubmit = (e) => {
        e.preventDefault()
        if (!courseTitle) return alert('add a course courseTitle')
        addCourse({
            id: uuidv4(),
            title: courseTitle,
            status: false,
        })
        setCourseTitle("")
        // console.log(courseTitle);
    }
    return (
        <form onSubmit={handleCourseSubmit} className='form-container'>
            <input className='form-input'
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
            />
            <button className='form-submit-btn'
                onClick={handleCourseSubmit}
            > Add Course
            </button>
        </form>
    )
}

export default CourseForm