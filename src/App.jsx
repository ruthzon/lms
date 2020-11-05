// import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-native-gesture-handler';
import React from 'react';
import './Components/homepage/App.css';
import HomePage from './Components/homepage/HomePage';
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
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ViewCoursePage from './Components/coursepage/ViewCoursePage';
import BuyCoursePage from './Components/coursepage/BuyCoursePage';
import EditCoursePage from './Components/coursepage/EditCoursePage';
import Login from './Components/login/login';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import Register from './Components/login/register';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

const history = createHashHistory();
const browserHistory = createBrowserHistory();


function App() {
  return (
    <div className="App">
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
          <Stack.Screen name="Courses" component={CoursePage} options={{ title: 'Courses' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        </Stack.Navigator>
      </NavigationContainer> */}

      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/buycourse/:id">
            <BuyCoursePage />
          </Route>
          <Route path="/viewcourse/:id">
            <ViewCoursePage />
          </Route>
          <Route path="/editcourse/:id">
            <EditCoursePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      {/* <Login /> */}

      {/* <CoursePage /> */}
    </div>
  );
}

export default App;
