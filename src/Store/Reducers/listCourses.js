import produce from 'immer';
import { actions } from '../actions';
import { Course } from '../classes';
import { Courses } from '../data';
import store from '../Store';
import createReducer from './ReducerUtils';
// debugger;
// let url = 'http://localhost:8000/courses/';
// fetch(url)
//   // .then((res) => res.json())
//   .then(function (data) {
//     console.log(data.courses)
//     store.dispatch(actions.initialCourse(data.courses));
//   })
//   //   .then((data) => {
//   //     console.log(data);
//   //     // this.setState({courses: data.courses});
//   //     return{
//   //       courses: data.Courses
//   //     } })
//   .catch((error) => console.log(error));

const initialState = {
  courses: [

  ],

};

const mycourses = {
  initialCourses(state, action) {
    state.courses = action.payload;
  },
  addCourse(state, action) {
    state.courses = state.courses.concat(action.payload);
  },
  removeCourse(state, action) {
    state.courses = state.courses.filter((x) => x != action.payload);
  },
  updateCourse(state, action) {
    state.courses = state.courses.map(
      (element, i) => {
        if (element._id == action.payload._id)
          element = action.payload
      })
      debugger;
  }
};

export default produce(
  (state, action) => { createReducer(state, action, mycourses) },
  initialState
);

// function manageList(state = {items: []}, action) {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return {list: [...state, action.payload]};
//     default:
//       return state;
//   }
// }
// export {manageList};
