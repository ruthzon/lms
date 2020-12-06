import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';
import User from '../Reducers/User';
import Course from '../Reducers/Course'


const initialState = {
    studentProfile:{
        // uid:User.uid,
        // courseViews:[{courseId: Course._id, }]
    }
}