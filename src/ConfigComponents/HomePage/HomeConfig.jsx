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
    school: state.schoolReducer.school,
  };
}

const mapDispatchToProps = (dispatch) => ({
  showSchoolByPart: (data) => dispatch(actions.showSchoolByPart(data)),
  setColorSchoolByPart: (data) => dispatch(actions.setColorSchoolByPart(data)),
  saveSchool: (data) => dispatch(actions.saveSchool(data)),
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
            {/* <div>
              Stars
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showStars}
                  checked={props.course.show.stars}
                />
                <span class="slider round"></span>
              </label>
            </div> */}
          </div>

          <button onClick={() => handleChoose(2)}>More Sections</button>
          <div className={choose === 2 ? 'display' : 'cover'}>
            <div>
              Header
              <input
                type="color"
                value={props.school.colors.header}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'header'])
                }
              />
            </div>
            <div>
              Title
              <input
                type="color"
                value={props.school.colors.title}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'title'])
                }
              />
            </div>
            <div>
              Subtitle
              <input
                type="color"
                value={props.school.colors.subtitle}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'subtitle'])
                }
              />
            </div>
            <div>
              Categories
              <input
                type="color"
                value={props.school.colors.categories}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'categories'])
                }
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('categories')}
                  checked={props.school.show.categories}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Get choice
              <input
                type="color"
                value={props.school.colors.getChoice}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'getChoice'])
                }
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('getChoice')}
                  checked={props.school.show.getChoice}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Learning platform
              <input
                type="color"
                value={props.school.colors.learning}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'learning'])
                }
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('learning')}
                  checked={props.school.show.learning}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              World selection
              <input
                type="color"
                value={props.school.colors.worldSelection}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'worldSelection'])
                }
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('worldSelection')}
                  checked={props.school.show.worldSelection}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Get started
              <input
                type="color"
                value={props.school.colors.CTA}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'CTA'])
                }
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('CTA')}
                  checked={props.school.show.CTA}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              <input
                type="color"
                value={props.school.colors.testimoinal}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'testimoinal'])
                }
              />
              Testimoinal
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('testimoinal')}
                  checked={props.school.show.testimoinal}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Partners
              <input
                type="color"
                value={props.school.colors.partners}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'partners'])
                }
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('partners')}
                  checked={props.school.show.partners}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Footer
              <input
                type="color"
                value={props.school.colors.footer}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'footer'])
                }
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('footer')}
                  checked={props.school.show.footer}
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
