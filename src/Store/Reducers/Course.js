import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';


const initialState = {
  course: ExCourse
};

const mycourse = {
  // initialById(state, action) {
  //   debugger;
  //   console.log(action.payload);    
  //   if (action.payload == '0')
  //     state.course = ExCourse;
  //   else
  //     state.course=Courses[action.payload - 1]
  // },
  // initialCourse(state, action) {
  //   state.course = action.payload;
  // },
  setName(state, action) {
    state.course.name = action.payload;
    debugger;
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
  setDescription(state, action) {
    state.course.description = action.payload;
  },
  setHowIsFor(state, action) {
    state.course.description['Certification'] = action.payload;
  },
  setCertification(state, action) {
    state.course.description['Who this course is for'] = action.payload;
  },
  setCourseDescription(state, action) {
    state.course.description['Course Description'] = action.payload;
  },
};

export default produce(
  (state, action) => createReducer(state, action, mycourse),
  initialState
);
