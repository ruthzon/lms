import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import courseReducer from './Reducers/Course'
import schoolReducer from './Reducers/School'
// import companyReducer from './Reducers/Company'
import listCoursesReducer from './Reducers/listCourses'
import { getCourses } from './MiddleWares/crud';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const reducer = combineReducers({  courseReducer,listCoursesReducer ,schoolReducer});

const store = createStore(reducer,applyMiddleware(getCourses));

// const store = createStore(reducer,applyMiddleware(add$ToCompanyName));
window.store = store;
export default store;
export { reducer };

