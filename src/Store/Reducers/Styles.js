import produce from 'immer';
import createReducer from './ReducerUtils';

const initialState = {
    styles: {
        configurator:true,
        thumbtack:true,
    },
  
  };
  
  const myflags = {
    // initialCourses(state, action) {
    //   state.courses = action.payload;
    // },
   
    setConfigurator(state) {
      state.styles.configurator=!state.styles.configurator;
    },
    setThumbtack(state) {
      state.styles.thumbtack=!state.styles.thumbtack;
    },
    
  };
  
  export default produce(
    (state, action) => { createReducer(state, action, myflags) },
    initialState
  );
  