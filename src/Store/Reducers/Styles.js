import produce from 'immer';
import createReducer from './ReducerUtils';

const initialState = {
    styles: {
        configurator:true,
        thumbtack:true,
        section_config:{name:''},
        process:true

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
    setSectionConfig(state,action){
      state.styles.section_config=action.payload;
    },
    setProcess(state, action) {
      state.styles.process=action.payload;
    },
  };
  
  export default produce(
    (state, action) => { createReducer(state, action, myflags) },
    initialState
  );
  