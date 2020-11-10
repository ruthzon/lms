import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import {BrowserRouter as Router, useParams} from 'react-router-dom';
import '../ViewComponents/coursepage/course.css';
import EditCourseCard from './EditCourseCard';
import EditOverview from './EditOverview';

function AddCoursePage() {
  let params = useParams();
  // let course = ExCourse;
  // console.log(params.id)
  // if (params.id != 0 && params.id!='0') course = Courses[params.id - 1];
  // console.log(course)

  return (
    <Router>
      <div className="coursepage">
  
          <EditCourseCard id={params.id} />
        {/* <EditOverview id={params.id}/> */}
      </div>
    </Router>
  );
}

export default AddCoursePage;
