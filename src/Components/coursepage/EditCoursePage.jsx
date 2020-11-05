import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import {BrowserRouter as Router, useParams} from 'react-router-dom';
import './course.css';
import Description from './description/description';
import {Courses, ExCourse} from '../../data.js';
import CourseCard from '../CourseCard';
import Overview from './description/overview';
import {CardDeck} from 'react-bootstrap';

function EditCoursePage() {
  let params = useParams();
  let course = ExCourse;
  if (params.id != 0) course = Courses[params.id - 1];

  return (
    <Router>
      <div className="coursepage">
        <CardDeck>
          <CourseCard course={course} />
        </CardDeck>
        <Overview />
      </div>
    </Router>
  );
}

export default EditCoursePage;
