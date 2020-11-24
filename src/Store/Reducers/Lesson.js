import produce from 'immer';
import createReducer from './ReducerUtils';


const initialState = {
  lesson: {
    // _id: '0',
    name: 'Enter the name of the lesson here',
    subtitle: 'Here is a short description of the lesson and the content that will be taught in it',
    course_id:'0',
    lesson_url: './img_from_xd/Image 108@2x.png',
    show: {
      stars: true,
      views: true,
      students: true,
      weeks: true,
      lessons: true,
      more_courses: true,
      belive: true,
      top_educators: true,
      footer: true,
      description: true,
    },
  }
};

const mylesson = {
  
  setLessonProp(state, action) {
    state.lesson[action.payload[1]] = action.payload[0];
  },
  
  showLessonProp(state,action) {
    debugger;
    state.lesson.show[action.payload] = !state.lesson.show[action.payload];
  },


};

export default produce(
  (state, action) => createReducer(state, action, mylesson),
  initialState
);
