import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import '../configurator.css';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setName: (data) => dispatch(actions.setName(data)),
  setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CourseConfig(props) {
  const [choose, setChoose] = useState(0);
  const handleChoose = (click) => {
    if (choose === click) setChoose(0);
    else setChoose(click);
  };
  return (
    <>
      <div className="config">
        <button onClick={() => handleChoose(1)}>Course details</button>
        <div className={choose === 1 ? 'display' : 'cover'}>
          <div>
            Course Description
            <label class="switch">
              <input type="checkbox" checked={props.course.description['Course Description']}/>
              <span class="slider round"></span>
            </label>
          </div>
          <div>
          Certification
            <label class="switch">
              <input type="checkbox" checked={props.course.description['Certification']}/>
              <span class="slider round"></span>
            </label>
          </div>
          <div>
            Who is this course for
            <label class="switch">
              <input type="checkbox" checked={props.course.description['Who this course is for']}/>
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <button onClick={() => handleChoose(2)}>Styles</button>
        <div className={choose === 2 ? 'display' : 'cover'}>dsafaa</div>
        <button onClick={() => handleChoose(3)}>Styles</button>
        <div className={choose === 3 ? 'display' : 'cover'}>dsafaa</div>
        <button onClick={() => handleChoose(4)}>Styles</button>
        <div className={choose === 4 ? 'display' : 'cover'}>dsafaa</div>
        <div className="config-footer">
          <Button variant="primary">save as draft</Button>
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

