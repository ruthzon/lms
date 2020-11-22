import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import {actions} from '../../Store/actions';
import '../configurator.css';
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addCourse: (data) => dispatch(actions.addCourse(data)),
  setName: (data) => dispatch(actions.setName(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function HomeConfig(props) {
  let match = useRouteMatch();

  const [choose, setChoose] = useState(0);
  const handleChoose = (click) => {
    if (choose === click) setChoose(0);
    else setChoose(click);
  };
  const handleSave = () => {
    props.addCourse(props.course);
    console.log(match.path);
    console.log(match.pa);
    browserHistory.replace('/' + match.params.name);
    window.location.reload();
  };
  return (
    <>
      <div id="wrap-configurator" className="pt-4 px-2">
        <div
          id="head-configurator"
          class="row d-flex justify-content-between m-0 mb-3 mt-1"
        >
          <span className="material-icons">settings</span>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 21.5">
            <defs></defs>
            <path
              className="a"
              d="M8,18.75A10.75,10.75,0,1,0,18.75,8,10.75,10.75,0,0,0,8,18.75Zm10.75,7.976V10.774a7.976,7.976,0,1,1,0,15.952Z"
              transform="translate(-8 -8)"
            ></path>
          </svg>
        </div>

        <div className="config">
          <button onClick={() => handleChoose(1)}>Course Header</button>
          <div className={choose === 1 ? 'display' : 'cover'}>
            <div>
              Stars
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showStars}
                  checked={props.course.show.stars}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div id="bottom_configurtor">
            <Button variant="primary" onClick={handleSave}>
              save as draft
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

// export default CourseConfig;

/* Course Description
          {props.course.description['Course Description']}
          Certification
          {props.course.description['Certification']}
          Who this course is for
          {props.course.description['Course Description']} */
