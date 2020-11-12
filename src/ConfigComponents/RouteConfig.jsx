import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import CoursePage from './coursepage/CoursePage';
import LessonPage from './coursepage/LessonPage';
import HomePage from './homepage/HomePage';
import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../Store/actions';
import {Courses} from '../Store/data';
// import CoursePage from './coursepage/coursepage';
const mapDispatchToProps = (dispatch) => ({
  initialCourses: (courses) => dispatch(actions.initialCourse(courses)),
  initialCourse: (courses) => dispatch(actions.initialCourse(courses)),
});

export default connect(
  null,
  mapDispatchToProps
)(function RouteConfig(props) {
  let match = useRouteMatch();
  // props.initialCourse(Courses);
  return (
    <div>
      {/* <Link to={`${match.url}/components`}>Components</Link> */}
      <Switch>
        <Route path={`${match.path}/addcourse`}>
          <CoursePage />
        </Route>
        <Route path={`${match.path}/:course/:lesson`}>
          <LessonPage />
        </Route>
        <Route path={`${match.path}/:course`}>
          <CoursePage />
        </Route>

        <Route path={match.path}>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
});
// function Topic() {
//   let {topicId} = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
// export default RouteConfig;
