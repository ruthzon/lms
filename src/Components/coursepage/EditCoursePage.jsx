import 'bootstrap/dist/css/bootstrap.min.css';
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
import Footer from '../Footer';
import Navigation from '../navbar';
import Header from './Header';
import './course.css';
import Description from './description/description';
import BuyCourse from './buyCourseCard';
import MoreCourses from './moreCourses';
import {ExCourse} from '../../data.js';
import Belive from './belive';
import TopEducators from './topEducators';

function BuyCoursePage() {
  let params = useParams();
  let course = ExCourse;
  if (paramsid) 
    course = crs[params.id - 1];

  return (
    <Router>
      <Navigation />
      <div className="coursepage">
        <BuyCourse data={course} />
        <Header data={course} />
        <Description data={course} />
      </div>
    </Router>
  );
}

export default BuyCoursePage;
