import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  // Add a new course, expects { id, title, status }
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  // Remove a course by ID
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  // Toggle status by Id
  toggleStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId ? { ...course, status: !course.status } : course
      ),
    }));
  },
});

const useCourseStore = create(
    devtools(
        persist(courseStore,{
            name: "course"  //key to localStorage
        })
    )
)
export default useCourseStore;
