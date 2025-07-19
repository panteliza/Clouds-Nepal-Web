
import NavbarMain from '../components/Navbar'

import Courses from '../components/Courses'
import CourseSearchBar from '../components/CourseSearchBar'
import { allCourses } from "../components/courses";

const CoursesPage = () => {
  return (
     <div className="pt-[70px]">
      <NavbarMain/>
       <CourseSearchBar allCourses={allCourses} />
      <Courses/>
    </div>
  )
}

export default  CoursesPage