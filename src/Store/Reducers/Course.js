import produce from 'immer';
import {Course} from '../../classes';
import {Courses} from '../../data';
import createReducer from './ReducerUtils';

const initialState = {
  course: Courses[0]
};

const course = {
  setName(state, action) {
    state.course.name = action.payload;
  },
  setSubtitle(state, action) {
    state.course.subtitle = action.payload;
  },
  setImage(state, action) {
    state.course.image = action.payload;
  },
  setStars(state, action) {
    state.course.stars = action.payload;
  },
  setViews(state, action) {
    state.course.views = action.payload;
  },
  setLesson(state, action) {
    state.course.lesson = action.payload;
  },
  setAuther(state, action) {
    state.course.auther = action.payload;
  },
  setAutherImage(state, action) {
    state.course.auther_image = action.payload;
  },
  setPrice(state, action) {
    state.course.price = action.payload;
  },
  setPrevPrice(state, action) {
    state.course.prev_price = action.payload;
  },
  setLanguage(state, action) {
    state.course.language = action.payload;
  },
};

export default produce(
  (state, action) => createReducer(state, action, course),
  initialState
);
