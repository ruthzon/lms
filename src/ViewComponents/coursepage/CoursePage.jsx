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
import Footer from '../Footer';
import Navigation from '../navbar';
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

function CoursePage() {
  // let {data }= useParams();
  let params = useParams();
  let course = crs.find((d) => (d.id = params.id));
  // const data=JSON.parse(params.data.toString())
  return (
    <Router>
      <Navigation />
      <div className="coursepage">
        {/* <BuyCourse course={data}/> */}
        <BuyCourse data={course} />
        <Header data={course} />
        <Description data={course} />
        <MoreCourses />
        <Belive />
        <TopEducators />
      </div>
      <Footer />
    </Router>
  );
}

export default CoursePage;
