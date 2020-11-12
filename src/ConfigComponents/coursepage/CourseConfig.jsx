import React, {Component} from 'react';
import '../configurator.css';


function CourseConfig(props) {
  // let data = this.props.course.description;
  const state={
    choose:1,
  }
  
  const chooseComponent=(name)=> {
    state.choose=name
  }
  return (
    <>
      <div className="config">
      <button className={state.choose===1?'btn-conf':'btn'} onClick={() => chooseComponent(1)}>
                  Course details
                </button>
                <button className={state.choose===2?'btn-conf':'btn'} onClick={() => chooseComponent(2)}>
                Styles
                </button>
      </div>
    </>
  );
}

export default CourseConfig;
