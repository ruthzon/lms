import { actions } from '../actions';
import { createBrowserHistory } from 'history';
import { matchPath } from 'react-router-dom';

import $ from 'jquery';

const browserHistory = createBrowserHistory();

let jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';
let uid = "wdkp5D2hROc4XJbBcqdw9C9C7Ox2"

// router.get("/students", studentsController.getStudents);

export const getCourses = ({ dispatch, getState }) => next => action => {
    //courses
    // const url = "https://lobby.leader.codes/api";
    if (action.type === 'GET_COURSES_FROM_SERVER') {
        debugger
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/courses',
            headers: {
                Authorization: jwt,
            },
            // data: JSON.stringify(action.payload),
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                dispatch(actions.initialCourses(data))
            },
        });
    }

    if (action.type === 'ADD_COURSE_TO_SERVER') {
        if (action.payload._id == 0 || !action.payload._id) {
            delete action.payload._id;
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/addCourse',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(action.payload),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {
                    dispatch(actions.addCourse(data))
                    browserHistory.replace('/' + matchPath.params.name);
                    window.location.reload();
                },
            });
        }
        else {
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + +'/' + action.payload._id + '/updateCourse',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(action.payload),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {

                    dispatch(actions.updateCourse(action.payload))
                },
            });
        }
    }
    //not yet
    if (action.type === 'DELETE_COURSE_FROM_SERVER') {
        debugger;
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/course',
            headers: {
                Authorization: jwt,
            },
            data: action.payload,
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function () {
                //   browserHistory.replace('/' + match.params.name);
                window.location.reload();
                dispatch(actions.removeCourse(action.payload))
            },
        });
    }
    //lessons
    if (action.type === 'GET_LESSONS_FROM_SERVER') {
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/' + action.payload.course_id + '/lessons',
            headers: {
                Authorization: jwt,
            },
            // data: JSON.stringify(action.payload),
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                dispatch(actions.initialLessons(data))
            },
        });
    }
    if (action.type === 'ADD_LESSON_TO_SERVER') {
        
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/' + action.payload.course_id + '/addLesson',
            headers: {
                Authorization: jwt,
            },
            data: JSON.stringify(action.payload),
            method: 'post',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                // browserHistory.replace('/' + matchPath.params.name);
                // window.location.reload();
                dispatch(actions.addLesson(data))
            },
        });
    }
    //not yen
    if (action.type === 'DELETE_LESSON_FROM_SERVER') {
        debugger;
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/course',
            headers: {
                Authorization: jwt,
            },
            data: action.payload,
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function () {
                //   browserHistory.replace('/' + match.params.name);
                window.location.reload();
                dispatch(actions.removeCourse(action.payload))
            },
        });
    }
    //school
    if (action.type === 'ADD_SCHOOL_TO_SERVER') {
        debugger
        if (action.payload._id == 0|| !action.payload._id) {
            delete action.payload._id;
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/addSchool',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(action.payload),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                success: function (data) {
                    // browserHistory.replace('/' + match.params.name);
                    // window.location.reload();
                    dispatch(actions.initialSchool(data))
                },
            });
        }
        else{
            
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/'+action.payload._id+'/updateSchool',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(action.payload),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                success: function (data) {
                    //   browserHistory.replace('/' + match.params.name);
                    // window.location.reload();
                    dispatch(actions.initialSchool(data))
                },
            });
        }
    }
    if (action.type === 'GET_SCHOOL_FROM_SERVER') {
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/school',
            headers: {
                Authorization: jwt,
            },
            // data: JSON.stringify(action.payload),
            method: 'get',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                // browserHistory.replace('/' + matchPath.params.name);
                // window.location.reload();
                dispatch(actions.addCourse(data));
            },
        });
    }


    return next(action);
}


// fetch(url + '/patch_update_user/' + action.payload.username, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(action.payload)
// }).then((response) => {
//     //  debugger;
//     return response.json();
// }).then((message) => {
//     console.log(message);
// })