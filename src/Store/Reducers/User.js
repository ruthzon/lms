import produce from 'immer';
import createReducer from "./reducerUtils";


const initialState = {
    userId: null,
    userName:null,
    
};


const user = {
    setUserId(state, action) {
        state.userId = action.payload;
    },
    setUserName(state, action) {
        state.userName = action.payload;
    },
    

};

export default produce((state, action) => createReducer(state, action, user), initialState);