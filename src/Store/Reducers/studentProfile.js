import produce from 'immer';
// import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';
import Course from './Course'
// import { Courses } from '../Store/data'



const initialState = {
    studentProfile: {
        sid: '0',
        name: 'David Cohen',
        image: './img_from_xd/Mask Group 9.png',
        profession:' illustrator & Artist',
        courseList: Course,
        colors: {
            aboutStudent: '#FEF0EF',
            recomandCourses:'#EFEFF6'
        },
        lesson:Courses.lesson,
        about: 'Hi, my name is Amelie. I am a photo artist and art director from Munich. Last year I was chosen to be one of the nine Adobe Creative Residents in 2019/2020.My pictures are widely known for their colorful, surrealistic touch. by books, lyrics and words in total, I am able to abstract and visualize them into new artworks.'
    }

};
const mystudent = {
    setSstudentImage(state,action){
      state.studentProfile.image=action.payload;
    },
}

export default produce(
    (state, action) => createReducer(state, action, mystudent),
    initialState
);