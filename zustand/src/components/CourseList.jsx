import React from "react";
import useCourseStore from "../store/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleStatus } =
    useCourseStore();
    // (state) => ({
    //   courses: state.courses,
    //   removeCourse: state.removeCourse,
    //   toggleStatus: state.toggleStatus,
    // })
  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: course.status ? "#00FF0044" : "darkcyan",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.status}
                    type="checkbox"
                    onChange={() => {
                      toggleStatus(course.id);
                    }}
                  />
                </span>
                <span
                  style={{
                    textDecoration: course.status ? "line-through" : "",
                  }}
                >
                  {course?.title}
                </span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
