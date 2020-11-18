import { actions } from '../actions';

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
    if (action.type === 'SAVE_USER_IN_SERVER') {

        fetch(url + '/patch_update_user/' + action.payload.username, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        }).then((response) => {
            //  debugger;
            return response.json();
        }).then((message) => {
            console.log(message);
        })


    }
    return next(action);
}