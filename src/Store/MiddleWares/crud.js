import { actions } from '../actions';
import {createBrowserHistory} from 'history';
import {matchPath} from 'react-router-dom';

import $ from 'jquery';

const browserHistory = createBrowserHistory();

let jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU';
let uid = "wdkp5D2hROc4XJbBcqdw9C9C7Ox2"

export const getCourses = ({ dispatch, getState }) => next => action => {
    const url = "https://lobby.leader.codes/api";
    if (action.type === 'GET_COURSES_FROM_SERVER') {
        fetch(`https://lobby.leader.codes/api/getUserByUserName/${action.payload}`,
            {
                method: 'GET'
                // ,body:JSON.stringify(userName)
            })
            .then((res) => {
                console.log("res11111", res)
                return res.json();
            })
            .then((result) => {
                console.log("res", result)
                debugger
                // dispatch({type: '[user] SET_USER', payload:result})

                dispatch(actions.setUser(result))
            })

    }
    if (action.type === 'ADD_COURSE_TO_SERVER') {
        debugger;
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/course',
            headers: {
                Authorization: jwt,
            },
            data: JSON.stringify(action.payload),
            method: 'post',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            // data: JSON.stringify(dataToProfilePage),
            success: function () {
                debugger
                  browserHistory.replace('/' + matchPath.params.name);
                window.location.reload();
                dispatch(actions.addCourse(action.payload))
            },
        });
    }

    if (action.type === 'ADD_SCHOOL_TO_SERVER') {
        debugger;
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/school',
            headers: {
                Authorization: jwt,
            },
            data: JSON.stringify(action.payload),
            method: 'post',
            dataType: 'json',
            contentType: 'application/json',
            withCradentials: true,
            success: function () {
                debugger
                //   browserHistory.replace('/' + match.params.name);
                // window.location.reload();
                // dispatch(actions.(action.payload))
            },
        });
    }
    if (action.type === 'DELETE_COURSE_FROM_SERVER') {
        debugger;
        $.ajax({
            url: 'https://lms.leader.codes/api/' + uid + '/course',
            headers: {
                Authorization: jwt,
            },
            data: action.payload,
            method: 'delete',
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