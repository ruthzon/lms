import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import '../configurator.css';
import {createBrowserHistory} from 'history';
import $ from 'jquery';
import {actions} from '../../Store/actions';
import {FaAngleDown, FaAngleRight, FaTrash} from 'react-icons/fa';
import { handleDelete } from '../handleImage';

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
  setSettingProp: (sub) => dispatch(actions.setSettingProp(sub)),
  deleteLessonFromServer: (sub) => dispatch(actions.deleteLessonFromServer(sub)),
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
      <div className="config">
        {/* <button onClick={() => handleChoose(1)}>
            Course Header {choose === 1 ? <FaAngleDown /> : <FaAngleRight />}
          </button>
          <div className={choose === 1 ? 'display' : 'cover'}>
            <div>
              Stars
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showLessonProp('stars')}
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
                  onClick={(e) => props.showLessonProp('students')}
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
                  onClick={(e) => props.showLessonProp('weeks')}
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
                  onClick={(e) => props.showLessonProp('lessons')}
                  checked={props.lesson.show.lessons}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <button onClick={() => handleChoose(2)}>
            More sections{choose === 2 ? <FaAngleDown /> : <FaAngleRight />}
          </button>
          <div className={choose === 2 ? 'display' : 'cover'}>
            <div>
              More courses
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showLessonProp('more_courses')}
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
                  onClick={(e) => props.showLessonProp('belive')}
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
                  onClick={(e) => props.showLessonProp('top_educarors')}
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
                  onClick={(e) => props.showLessonProp('footer')}
                  checked={props.lesson.show.footer}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <button onClick={() => handleChoose(3)}>
            Video settings{choose === 3 ? <FaAngleDown /> : <FaAngleRight />}
          </button> */}
        <div>
          <button
            onClick={() =>
              handleDelete(props.deleteLessonFromServer, props.lesson)
            }
          >
            Delete lesson
            <FaTrash
              data-toggle="tooltip"
              data-placement="top"
              title="Delete this lesson"
            />
          </button>
          <div>
            Lesson url
            <input
              type="text"
              placeholder="url"
              onChange={(e) =>
                props.setLessonProp([e.target.value, 'lesson_url'])
              }
              value={props.lesson.lesson_url}
            />
          </div>
          <div>
            Auto play
            <label
              class="switch"
              data-toggle="tooltip"
              data-placement="top"
              title="auto play"
            >
              <input
                type="checkbox"
                onClick={(e) => props.setSettingProp('autoplay')}
                checked={props.lesson.settings.autoplay}
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div>
            Controls
            <label
              class="switch"
              data-toggle="tooltip"
              data-placement="top"
              title="controls"
            >
              <input
                type="checkbox"
                onClick={(e) => props.setSettingProp('controls')}
                checked={props.lesson.settings.controls}
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div>
            loop
            <label
              class="switch"
              data-toggle="tooltip"
              data-placement="top"
              title="loop"
            >
              <input
                type="checkbox"
                onClick={(e) => props.setSettingProp('loop')}
                checked={props.lesson.settings.loop}
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div>
            muted
            <label
              class="switch"
              data-toggle="tooltip"
              data-placement="top"
              title="silence"
            >
              <input
                type="checkbox"
                onClick={(e) => props.setSettingProp('muted')}
                checked={props.lesson.settings.muted}
              />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div id="bottom_configurtor">
          <Button variant="primary" onClick={handleSave}>
            Save lesson
          </Button>
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
