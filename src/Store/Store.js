import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import courseReducer from './Reducers/Course'
import schoolReducer from './Reducers/School'
import stylesReducer from './Reducers/Styles'
import lessonReducer from './Reducers/Lesson'
import userReducer from './Reducers/User'
// import companyReducer from './Reducers/Company'
import listCoursesReducer from './Reducers/listCourses'
import { getCourses } from './MiddleWares/crud';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getCookie } from '../login/wizard';

// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const reducer = combineReducers({ courseReducer, listCoursesReducer, schoolReducer, stylesReducer, lessonReducer, userReducer });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(getCourses)));
var jwt=getCookie('jwt');
// let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';

var url = window.location;
var userName = (url.pathname.split('/')[1]);
debugger
fetch('https://lms.leader.codes/api/' + userName + '/getUid', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: jwt,
    },
    // body: JSON.stringify({ userName: userName }),
})
    .then((res) => {debugger; res.json() })
    .then((res) => {
        if (res && res.data.uid) {
            let user = res.data;
            store.dispatch(actions.getCoursesFromServer(user.uid))
            store.dispatch(actions.getSchoolFromServer(user.uid))
            store.dispatch(actions.setUserProps({ "uid": user.uid, "email": user.email, "photoURL": user.photo_URL, "userName": user.username }))
        }
    });
// const store = createStore(reducer,applyMiddleware(add$ToCompanyName));
window.store = store;
export default store;
export { reducer };

