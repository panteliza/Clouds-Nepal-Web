
import NavbarMain from '../components/Navbar'


import CourseSearchBar from '../components/CourseSearchBar'
import { allCourses } from "../components/courses";
import CoursesComponent from '../components/CoursesComponent';

const CoursesPage = () => {
  return (
     <div className="pt-[70px]">
      <NavbarMain/>
       <CourseSearchBar allCourses={allCourses} />
      <CoursesComponent/>
    </div>
  )
}

export default  CoursesPage