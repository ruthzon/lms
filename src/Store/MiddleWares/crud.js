import { actions } from '../actions';
import { createBrowserHistory } from 'history';
import { matchPath } from 'react-router-dom';
import swal from 'sweetalert';
import { getCookie } from '../../login/wizard'
import history from '../../history'
import $ from 'jquery';
import store from '../Store';

// const history = createBrowserHistory();

// const url="localhost:3000"
// const url="lms.leader.codes"
// const user=store.getState().userReducer.user;

// let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';
let jwt = getCookie('jwt');


// router.get("/students", studentsController.getStudents);

export const getCourses = ({ dispatch, getState }) => next => action => {
    //courses

    const user = store.getState().userReducer.user;
    // let uid = "wdkp5D2hROc4XJbBcqdw9C9C7Ox2"

    const uid = user.uid;
    // const url = "https://lobby.leader.codes/api";
    if (action.type === 'GET_COURSES_FROM_SERVER') {
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
                dispatch(actions.initialCourses(data.data))
            },
        });
    }

    if (action.type === 'ADD_COURSE_TO_SERVER') {
        let course=Object.assign({}, action.payload);
        try {
            delete course["lessons"];
        }
        catch (err){
            console.log(err)
        }
        if (course._id == 0 || !course._id) {
            let school = store.getState().schoolReducer.school;
            if (school._id == 0 || !school._id)
                dispatch(actions.addSchoolToServer(school))
            delete course._id;
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/addCourse',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(course),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {
                    dispatch(actions.initialCourse(data.data));
                    dispatch(actions.addCourse(data.data));
                    // history.replace('/' + matchPath.params.name);
                    // window.location.reload();
                    console.log("course " + data.data._id);
                    swal("Yes,", "Course added successfully", "success");
                    history.replace('/' + user.userName+'/'+data.data.name);
                    // window.location.reload();
                    // window.location.href = url +'/'+ user.userName;

                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
        else {
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid +'/' + course._id + '/updateCourse',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(course),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {

                    dispatch(actions.updateCourse(data.data))
                    console.log("course " + data.data._id);
                    swal("Course saved successfully", "", "success");
                    history.replace('/' + user.userName);
                    // window.location.reload();
                    // window.location.href = url + user.userName;

                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
    }
    //not yet
    if (action.type === 'DELETE_COURSE_FROM_SERVER') {
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
            success: function (data) {
                //   history.replace('/' + match.params.name);
                // window.location.reload();
                dispatch(actions.removeCourse(data.data))
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
                dispatch(actions.initialLessons(data.data))
            },
        });
    }
    if (action.type === 'ADD_LESSON_TO_SERVER') {
        let lesson =Object.assign({}, action.payload);
        if (lesson._id == 0) {
            delete lesson._id;
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/' + lesson.course_id + '/addLesson',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(lesson),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {
                    // history.replace('/' + matchPath.params.name);
                    // window.location.reload();
                    dispatch(actions.addLesson(data.data))
                    console.log("lesson " + data.data._id);
                    swal("Lesson added successfully", "", "success");
                    history.replace('/' + user.userName + '/' + data.course_id);
                    // window.location.reload();
                    // window.location.href = url + user.userName+'/' +data.course_id;

                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
        else {
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/' + lesson.course_id + '/' + action.payload._id,
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(lesson),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                // data: JSON.stringify(dataToProfilePage),
                success: function (data) {
                    // history.replace('/' + matchPath.params.name);
                    // window.location.reload();
                    dispatch(actions.initialLesson(data.data));
                    dispatch(action.updateLesson(data.data));
                    console.log("lesson " + data.data._id);
                    swal("Lesson saved successfully", "", "success");
                    history.replace('/' + user.userName + '/' + data.course_id);
                    // window.location.reload();
                    // window.location.href = url + user.userName+'/' +data.course_id;
                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
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
                //   history.replace('/' + match.params.name);
                // window.location.reload();
                dispatch(actions.removeCourse(action.payload))
            },
            error: function () {
                swal("Oops...", "Something went wrong, please try again later", "error");
            },
        });
    }
    //school
    if (action.type === 'ADD_SCHOOL_TO_SERVER') {
        let school=Object.assign({}, action.payload);
        if (school._id == 0 || !school._id) {
            delete school._id;
            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/addSchool',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(school),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                success: function (data) {
                    // history.replace('/' + match.params.name);
                    // window.location.reload();
                    dispatch(actions.initialSchool(data.data));
                    console.log("school " + data.data._id);
                    swal("School saved successfully", "", "success");
                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
                },
            });
        }
        else {

            $.ajax({
                url: 'https://lms.leader.codes/api/' + uid + '/' + school._id + '/updateSchool',
                headers: {
                    Authorization: jwt,
                },
                data: JSON.stringify(school),
                method: 'post',
                dataType: 'json',
                contentType: 'application/json',
                withCradentials: true,
                success: function (data) {
                    //   history.replace('/' + match.params.name);
                    // window.location.reload();
                    dispatch(actions.initialSchool(data.data));
                    console.log("school " + data.data._id);
                    swal("School saved successfully", "", "success");
                },
                error: function () {
                    swal("Oops...", "Something went wrong, please try again later", "error");
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
                // history.replace('/' + matchPath.params.name);
                // window.location.reload();
                dispatch(actions.addCourse(data.data));

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