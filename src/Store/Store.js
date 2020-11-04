import { createStore ,combineReducers,applyMiddleware, compose} from 'redux';
import courseReducer from './Reducers/Course'
// import companyReducer from './Reducers/Company'
import listCoursesReducer from './Reducers/listCourses'
import {add$ToCompanyName } from './MiddleWares/crud';

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const reducer = combineReducers({listCoursesReducer,courseReducer });
const store = createStore(reducer, {list: {items: []}}, enhancers);

// const store = createStore(reducer,applyMiddleware(add$ToCompanyName));
window.store = store;
export default store;
export {reducer};

