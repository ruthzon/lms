import produce from 'immer';
import createReducer from './ReducerUtils';

const initialState = {
    currentCourse: {
        _id: '',
        name: '',
        subtitle: 'Here is a short description of the course and the content that will be taught in it',
        image: './img_from_xd/Image 108@2x.png',
        category: "",
        preview: "",
        stars: 3,
        views: 0,
        weeks: 0,
        students: 0,
        teacher: {
            name: 'Name of the lecturer',
            img: './img_from_xd/Rectangle 22.png'
        },
    },
};

const mycurrentCourse = {
 
     setCurrentCourseName(state, action) {
        state.currentCourse.name = action.payload;
        debugger;
      },
      // CurrentCourse
      setCurrentCourseSubtitle(state, action) {
        state.currentCourse.subtitle = action.payload;
      },
      setCurrentCourseImage(state, action) {
        state.course.image = action.payload;
      },
      // setStars(state, action) {
      //   state.currentCourse.stars = action.payload;
      // },
      // setViews(state, action) {
      //   state.currentCourse.views = action.payload;
      // },
      // setWeeks(state, action) {
      //   state.currentCourse.weeks = action.payload;
      // },
      // setLesson(state, action) {
      //   state.currentCourse.lesson = action.payload;
      // },
      // setAuther(state, action) {
      //   state.currentCourse.auther = action.payload;
      // },
      // setAutherImage(state, action) {
      //   state.currentCourse.auther_image = action.payload;
      // },
      // setPrice(state, action) {
      //   state.currentCourse.price = action.payload;
      // },
      // setPrevPrice(state, action) {
      //   state.currentCourse.prev_price = action.payload;
      // },
      // setPrevPriceTime(state, action) {
      //   state.currentCourse.prev_price_time = action.payload;
      // },
      // setDescription(state, action) {
      //   state.currentCourse.description[action.payload.id][action.payload.key] = action.payload.value;
      // },
      // setMoreCourses(state, action) {
      //   state.currentCourse.more_courses[action.payload.key] = action.payload.value;
      // },
};

export default produce(
    (state, action) => { createReducer(state, action, mycurrentCourse) },
    initialState
);
