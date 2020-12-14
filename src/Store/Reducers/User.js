import produce from 'immer';
import createReducer from './ReducerUtils';


const initialState = {
    user: {
        uid: '0',
        userName: '',
        email: '',
        photoURL: './img_from_xd/User.png',
        isPro: false,
    }
};

const myuser = {
    setUserProps(state, action){
        for (let i in action.payload)
        {
            state.user[i]=action.payload[i];
        }
    },
    initialUser(state, action) {
        state.lesson = action.payload;
    },
};

export default produce(
    (state, action) => createReducer(state, action, myuser),
    initialState
);
