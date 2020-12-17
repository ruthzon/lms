// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Footer from '../Footer';
import Navigation from '../../navbar';
import Header from './Header';
import './course.css';
import Description from './description/description';
import BuyCourse from './buyCourseCard';
import MoreCourses from './moreCourses';
import {
  // Categories as ctgs,
  Courses as crs,

  // Students as tst,
  // Partners as prt,
  // Learnings as lrn,
} from '../../Store/data.js';
import Belive from './belive';
import TopEducators from './topEducators';
// import { actions } from '../Store/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    course: state.currentCourseReducer.currentCourse

  };
}

export default connect(
  mapStateToProps,

)(function CoursePage(props) {

  console.log(props.course)
  // let params = useParams();
  // let course = crs.find((d) => (d = props.course));

  // const data=JSON.parse(params.data.toString())
  return (
    <Router className="coursePage">
      <Navigation />
      <div className="coursepage">
        {/* <BuyCourse data={props.course} /> */}
        <BuyCourse  />

        <Header data={props.course} />
        {/* <Description data={props.course} /> */}
        <MoreCourses />
        <Belive />
        <TopEducators />
      </div>
      <Footer />
    </Router>
  );
}

)
