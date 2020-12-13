// import 'semantic-ui-css/semantic.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import './ViewComponents/homepage/App.css';
import HomePage from './ViewComponents/homepage/HomePage';
// import {GetChoice, WorldSelectionCourse} from './Courses.jsx';
// import Navigation from '../navbar.jsx';
// import Header from './Header.jsx';
// import Categories from './Categories';
// import LearningPlatform from './LearningPlatform';
// import CTA from './CTA';
// import Testimoinal from './Testimoinal';
// import OurPartner from './OurPartner';
// import Footer from './Components/Footer';
// import {
//   Categories as ctgs,
//   Courses as crs,
//   // Students as tst,
//   Partners as prt,
//   Learnings as lrn,
// } from './data.js';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import ViewCoursePage from './ViewComponents/coursepage/LessonPage';
// import CoursePage from './ViewComponents/CoursePage';
// import LessonPage from './courseConfig/LessonPage';
import Login from './login/login';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import Register from './login/register';
import AddCoursePage from './ConfigComponents/AddCoursePage';
import LessonPage from './ViewComponents/coursepage/LessonPage';
import RouteConfig from './ConfigComponents/RouteConfig'
import Help from './Help';
import CoursePage from './ViewComponents/coursepage/CoursePage';
import { signOut } from './login/firebase';
import Wizard from './login/wizard';
import history from "./history.js";
import wizard from './login/wizard';
import StudentProfilePage from './ViewComponents/StudentProfilePage';


// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const history = createHashHistory();
// const browserHistory = createBrowserHistory();


function App() {
  useEffect(() => {
    // signOut();
  });
  return (
    <div className="App">
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
          <Stack.Screen name="Courses" component={CoursePage} options={{ title: 'Courses' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        </Stack.Navigator>
      </NavigationContainer> */}

      <Router history={history}>
        <Switch>
        {/* <Route path="/help">
            <Help />
          </Route> */}
          <Route path="/login" component={Login}>
            {/* <Login /> */}
          </Route>
          <Route path="/register" component={Register}>
            {/* <Register /> */}
          </Route>
          <Route path="/wizard" component={wizard}>
            {/* <Wizard /> */}
          </Route>
          {/* <Route path="/course">
            <CoursePage />
          </Route> */}
          <Route path="/:name" component={RouteConfig}>
              {/* <RouteConfig /> */}
          </Route>
          {/* <Route path="/:name/addcourse">
            <AddCoursePage />
          </Route> */}
          {/* <Route path="/:course/">
            <CoursePage />
          </Route>
          <Route path="/:course/:lesson/">
            <LessonPage />
          </Route>
         <Route path="course/lesson/:id">
            <EditCoursePage />
          </Route> */} 
          <Route exact path="/">
            <Redirect to="/login"/>
            {/* <HomePage /> */}
          </Route>
        </Switch>
      </Router>
      {/* <Login /> */}

      {/* <CoursePage /> */}
    </div>
  );
}

export default App;
