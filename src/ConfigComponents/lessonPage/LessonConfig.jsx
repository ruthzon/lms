import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import '../configurator.css';
import {createBrowserHistory} from 'history';
import $ from 'jquery';
import {actions} from '../../Store/actions';

const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addLessonToServer: (data) => dispatch(actions.addLessonToServer(data)),
  setLessonProp: (name) => dispatch(actions.setLessonProp(name)),
  showLessonProp: (sub) => dispatch(actions.showLessonProp(sub)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function LessonConfig(props) {
  let match = useRouteMatch();

  const [choose, setChoose] = useState(0);
  const handleChoose = (click) => {
    if (choose === click) setChoose(0);
    else setChoose(click);
  };
  const handleSave = () => {
    props.addLessonToServer(props.lesson);
    // browserHistory.replace('/' + match.params.name);
    // window.location.reload();
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
                  onClick={e=>props.showLessonProp("stars")}
                  checked={props.lesson.show.stars}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Students
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={e=>props.showLessonProp("students")}
                  checked={props.lesson.show.students}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Weeks
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={e=>props.showLessonProp("weeks")}
                  checked={props.lesson.show.weeks}
                />
                <span class="slider round"></span>
              </label>
            </div>

            <div>
              Lessons
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={e=>props.showLessonProp("lessons")}
                  checked={props.lesson.show.lessons}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

       <button onClick={() => handleChoose(2)}>More sections</button>
          <div className={choose === 2 ? 'display' : 'cover'}>
            
            
            <div>
              More courses
            
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={e=>props.showLessonProp("more_courses")}
                  checked={props.lesson.show.more_courses}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              I belibe...
              
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={e=>props.showLessonProp("belive")}
                  checked={props.lesson.show.belive}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Top educators
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={e=>props.showLessonProp("top_educarors")}
                  checked={props.lesson.show.top_educators}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Footer
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={e=>props.showLessonProp("footer")}
                  checked={props.lesson.show.footer}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          {/* </div> */}

          <div id="bottom_configurtor">
            <Button variant="primary" onClick={handleSave}>
              Save lesson
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

// export default CourseConfig;

/* Course Description
          {props.lesson.description['Course Description']}
          Certification
          {props.lesson.description['Certification']}
          Who this course is for
          {props.lesson.description['Course Description']} */
