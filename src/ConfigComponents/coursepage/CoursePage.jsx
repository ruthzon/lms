// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import './homepage/App.css';

// import {
//   Categories as ctgs,
//   Courses as crs,
//   // Students as tst,
//   Partners as prt,
//   Learnings as lrn,
// } from './homepage/data.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Footer from '../../ViewComponents/Footer';
import Navigation from '../../navbar';
import Header from './Header';
import '../../ViewComponents/coursepage/course.css';
import Description from './description/description';
import BuyCourse from './BuyCourse';
import MoreCourses from './moreCourses';
import {
  // Categories as ctgs,
  Courses as crs,
  ExCourse,
  // Students as tst,
  // Partners as prt,
  // Learnings as lrn,
} from '../../Store/data.js';
import Belive from './belive';
import TopEducators from './topEducators';
import {actions} from '../../Store/actions';
import {connect} from 'react-redux';
import CourseConfig from './CourseConfig';
import HeaderConfig from '../HeaderConfig';
import Video from '../coursepage/video';
const mapDispatchToProps = (dispatch) => ({
  initialCourse: (course) => dispatch(actions.initialCourse(course)),
});

function mapStateToProps(state) {
  return {
    courses: state.listCoursesReducer.courses,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CoursePage(props) {
  // let {data }= useParams();
  let params = useParams();
  let course = ExCourse;

  if (params.course) {
    console.log(params.course);
    course = props.courses.find((c) => (c.name = params.course));
  }
  // props.initialCourse(course);
  // console.log(params.course);
  // console.log(course);
  // console.log(props.courses);
  // const data=JSON.parse(params.data.toString())
  return (
    <>
      <div className="coursepage">
        <HeaderConfig />
        <CourseConfig />
        <div className="content-config">
          {/* <BuyCourse /> */}
          <Header />
          {/* <help/> */}
          <Description />
          {/* <MoreCourses /> */}
          {/* <Belive /> */}
          {/* <TopEducators /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
});

// export default CoursePage;
