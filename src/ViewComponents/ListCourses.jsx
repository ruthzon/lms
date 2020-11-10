// import './courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {connect} from 'react-redux';
import './homepage/App.css';
import CourseCard from './CourseCard';
import store from '../Store/Store';
import { actions } from '../Store/actions';

const mapStateToProps = (state) => {
  // return {...state, items: state.listCourseReducer.items || []};
  return {
    courses: state.listCoursesReducer.courses,
  };
};

// function FirstRowCourse(props) {
//   const listCourses = props.items || [];
//   for (var i = 0; i < props.data.length && i < 3; i++) {
//     listCourses.push(<CourseCard props={props.data[i]} />);
//   }
//   return listCourses;
// }
export default connect(
  mapStateToProps,
  null
)(
  // export default
  function RowCourse(props) {
    const listCourses = [];
    let i = props.i;
    let j = i;
    for (i; i < props.courses.length && i < j + 3; i++) {
      listCourses.push(<CourseCard course={props.courses[i]} />);
    }
    return listCourses;
  }
);
