import produce from 'immer';
import { Courses } from '../data';
import createReducer from './ReducerUtils';
import Course from './Course'
import StudentProfile from './studentProfile'
import studentProfile from './studentProfile';


const initialState = {
    CourseStudent: {
        CourseStudentList: [{
            id: studentProfile.sid,
            courseId: Course.courseId,
            finishedLessons: '0',
            stars: '0',
        }
        ]
    }

};
const mystudentCourse = {
    // setSstudentImage(state,action){
    //   state.studentProfile.image=action.payload;
    // },
}

export default produce(
    (state, action) => createReducer(state, action, mystudentCourse),
    initialState
);