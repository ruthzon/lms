import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import CoursePage from './coursepage/CoursePage';
import LessonPage from './coursepage/LessonPage';
import HomePage from './homepage/HomePage';
import React from 'react';

function RouteConfig() {
  let match = useRouteMatch();

  return (
    <div>

          {/* <Link to={`${match.url}/components`}>Components</Link> */}

      {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
      <Switch>
      <Route path={`${match.path}/:course/:lesson`}>
            <LessonPage />
        </Route>
        <Route path={`${match.path}/:course`}>
            <CoursePage />
        </Route>
        <Route path={match.path}>
            <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}
// function Topic() {
//   let {topicId} = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
export default RouteConfig;

