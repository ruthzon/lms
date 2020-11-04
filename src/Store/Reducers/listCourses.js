import produce from 'immer';
import {Course} from '../../classes';
import {Courses} from '../../data';
import createReducer from './ReducerUtils';

const initialState = {
  courses: Courses,
};

const courses = {
  addCourse(state, action) {
    state.courses = action.payload;
  },
  removeCourse(state,action){
    state.Courses=action.payload;
  }
};

export default produce(
  (state, action) => createReducer(state, action, courses),
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
