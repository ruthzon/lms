// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
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
  Courses as crs,
} from '../../Store/data.js';
import Belive from './belive';
import Video from './video';
import TopEducators from './topEducators';
function ViewCoursePage() {
  // let {data }= useParams();
  let params = useParams();
  let course = crs[params.id-1]
  // .find((d) => (d.id = params.id));
  // const data=JSON.parse(params.data.toString())
  return (
    <Router>
      <Navigation />
      <div className="coursepage">
        <Header data={course} view="true"/>
        <BuyCourse data={course} view="true" />
        <Video/>
        <Description data={course} />
        <MoreCourses data={crs} />
        <Belive />
        <TopEducators />
      </div>
      <Footer />
    </Router>
  );
}

export default ViewCoursePage;
