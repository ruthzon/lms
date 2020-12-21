import produce from 'immer';
import createReducer from './ReducerUtils';


const initialState = {
  lesson: {
    _id: '0',
    name: 'Enter the name of the lesson here',
    subtitle: 'Here is a short description of the lesson and the content that will be taught in it',
    course_id: '0',
    lesson_url: "https://www.youtube.com/watch?v=aS-4U5GgdjM-U",
    time: "10 hours",
    size:"1099",
    // show: {
    //   stars: true,
    //   views: true,
    //   students: true,
    //   weeks: true,
    //   lessons: true,
    //   more_courses: true,
    //   belive: true,
    //   top_educators: true,
    //   footer: true,
    //   description: true,
    // },
    settings: {
      muted:0,
      autoplay: 1,
      controls: 1,
      loop: 0,
    }
  }
};

const mylesson = {
  initialLesson (state, action) {
    state.lesson= action.payload;
  },
  initialEmptyLesson (state) {
    state.lesson= initialState.lesson;
  },
  setLessonProp(state, action) {
    state.lesson[action.payload[1]] = action.payload[0];
  },
  showLessonProp(state, action) {
    state.lesson.show[action.payload] = !state.lesson.show[action.payload];
  },
  setSettingProp(state, action) {
    state.lesson.settings[action.payload] = state.lesson.settings[action.payload] === 0 ? 1 : 0;
  },

};

export default produce(
  (state, action) => createReducer(state, action, mylesson),
  initialState
);
