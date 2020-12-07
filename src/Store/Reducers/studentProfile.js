import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';
import Course from '../Reducers/Course'


const initialState = {
    studentProfile: {
        sid: '0',
        name: 'David Cohen',
        image: './img_from_xd/Mask Group 9.png',
        courseList: [{ name: Course.name, numOfViews: Course.views }]

    }
}