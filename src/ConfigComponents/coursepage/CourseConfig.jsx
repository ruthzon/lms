import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import {actions} from '../../Store/actions';
import '../configurator.css';
import {createBrowserHistory} from 'history';
import $ from 'jquery';

const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addCourseToServer: (data) => dispatch(actions.addCourseToServer(data)),
  setName: (data) => dispatch(actions.setName(data)),
  setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
  showHowIsFor: () => dispatch(actions.showHowIsFor()),
  showCertification: () => dispatch(actions.showCertification()),
  showCourseDescription: () => dispatch(actions.showCourseDescription()),
  showStars: () => dispatch(actions.showStars()),
  showStudents: () => dispatch(actions.showStudents()),
  showWeeks: () => dispatch(actions.showWeeks()),
  showLessons: () => dispatch(actions.showLessons()),
  showCertificate: (data) => dispatch(actions.showCertificate(data)),
  showAccess: (data) => dispatch(actions.showAccess(data)),
  showUse: (data) => dispatch(actions.showUse(data)),
  showLanguage: (data) => dispatch(actions.showLanguage(data)),
  setLinkedin: (data) => dispatch(actions.setLinkedin(data)),
  setInstegram: (data) => dispatch(actions.setInstegram(data)),
  setFacebook: (data) => dispatch(actions.setFacebook(data)),
  setTwitter: (data) => dispatch(actions.setTwitter(data)),
  setReddit: (data) => dispatch(actions.setReddit(data)),
  setYoutube: (data) => dispatch(actions.setYoutube(data)),
  setWhatsapp: (data) => dispatch(actions.setWhatsapp(data)),
  setColorTopEducators: (data) => dispatch(actions.setColorTopEducators(data)),
  setColorMoreCourses: (data) => dispatch(actions.setColorMoreCourses(data)),
  setColorBuyCourse: (data) => dispatch(actions.setColorBuyCourse(data)),
  setColorHeader: (data) => dispatch(actions.setColorHeader(data)),
  setColorBelive: (data) => dispatch(actions.setColorBelive(data)),
  setColorName: (data) => dispatch(actions.setColorName(data)),
  setColorSubtitle: (data) => dispatch(actions.setColorSubtitle(data)),
  showLinkedin: () => dispatch(actions.showLinkedin()),
  showInstegram: () => dispatch(actions.showInstegram()),
  showFacebook: () => dispatch(actions.showFacebook()),
  showTwitter: () => dispatch(actions.showTwitter()),
  showReddit: () => dispatch(actions.showReddit()),
  showYoutube: () => dispatch(actions.showYoutube()),
  showWhatsapp: () => dispatch(actions.showWhatsapp()),
  showCourseFooter: () => dispatch(actions.showCourseFooter()),
  showTopEducarors: () => dispatch(actions.showTopEducarors()),
  showBelive: () => dispatch(actions.showBelive()),
  showMoreCourses: () => dispatch(actions.showMoreCourses()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function CourseConfig(props) {
  let match = useRouteMatch();

  const [choose, setChoose] = useState(0);
  const handleChoose = (click) => {
    if (choose === click) setChoose(0);
    else setChoose(click);
  };
  const handleSave = () => {
   
    props.addCourseToServer(props.course);
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
                  onClick={props.showStars}
                  checked={props.course.show.stars}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Students
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showStudents}
                  checked={props.course.show.students}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Weeks
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showWeeks}
                  checked={props.course.show.weeks}
                />
                <span class="slider round"></span>
              </label>
            </div>

            <div>
              Lessons
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showLessons}
                  checked={props.course.show.lessons}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <button onClick={() => handleChoose(2)}>Course description</button>
          <div className={choose === 2 ? 'display' : 'cover'}>
            <div>
              Course Description
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showCourseDescription}
                  checked={props.course.show['Course Description']}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Certification
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showCertification}
                  checked={props.course.show['Certification']}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Who is this course for
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showHowIsFor}
                  checked={props.course.show['Who this course is for']}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <button onClick={() => handleChoose(3)}>Course card</button>
          <div className={choose === 3 ? 'display' : 'cover'}>
            <div>
              Language
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showLanguage}
                  checked={props.course.show.language}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Use on desktop
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showUse}
                  checked={props.course.show.use}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Access
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showAccess}
                  checked={props.course.show['access']}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Certificate
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showCertificate}
                  checked={props.course.show['certificate']}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <h6>Share buttons</h6>
            <div>
              Instegram
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showInstegram}
                  checked={props.course.show.share.instegram}
                />
                <span class="slider round"></span>
              </label>
              {props.course.show.share.instegram && (
                <input
                  type="text"
                  placeholder="instegram"
                  onChange={(e) => props.setInstegram(e.target.value)}
                  value={props.course.share.instegram}
                />
              )}
            </div>
            <div>
              Facebook
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showFacebook}
                  checked={props.course.show.share.facebook}
                />
                <span class="slider round"></span>
              </label>
              {props.course.show.share.facebook && (
                <input
                  type="text"
                  placeholder="facebook"
                  onChange={(e) => props.setFacebook(e.target.value)}
                  value={props.course.share.facebook}
                />
              )}
            </div>
            <div>
              Whatsapp
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showWhatsapp}
                  checked={props.course.show.share.whatsapp}
                />
                <span class="slider round"></span>
              </label>
              {props.course.show.share.whatsapp && (
                <input
                  type="text"
                  placeholder="whatsapp"
                  onChange={(e) => props.setWhatsapp(e.target.value)}
                  value={props.course.share.whatsapp}
                />
              )}
            </div>
            <div>
              Twitter
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showTwitter}
                  checked={props.course.show.share.twitter}
                />
                <span class="slider round"></span>
              </label>
              {props.course.show.share.twitter && (
                <input
                  type="text"
                  placeholder="twitter"
                  onChange={(e) => props.setTwitter(e.target.value)}
                  value={props.course.share.twitter}
                />
              )}
            </div>
            <div>
              Youtube
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showYoutube}
                  checked={props.course.show.share.youtube}
                />
                <span class="slider round"></span>
              </label>
              {props.course.show.share.youtube && (
                <input
                  type="text"
                  placeholder="youtube"
                  onChange={(e) => props.setYoutube(e.target.value)}
                  value={props.course.share.youtube}
                />
              )}
            </div>
            <div>
              Reddit
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showReddit}
                  checked={props.course.show.share.reddit}
                />
                <span class="slider round"></span>
              </label>
              {props.course.show.share.reddit && (
                <input
                  type="text"
                  placeholder="reddit"
                  onChange={(e) => props.setReddit(e.target.value)}
                  value={props.course.share.reddit}
                />
              )}
            </div>
          </div>

          <button onClick={() => handleChoose(4)}>More sections</button>
          <div className={choose === 4 ? 'display' : 'cover'}>
            <div>
              Header backgroud
              <input
                type="color"
                value={props.course.colors.header}
                onChange={(e) => props.setColorHeader(e.target.value)}
              />
            </div>
            <div>
              Title
              <input
                type="color"
                value={props.course.colors.name}
                onChange={(e) => props.setColorName(e.target.value)}
              />
            </div>
            <div>
              Subtitle
              <input
                type="color"
                value={props.course.colors.subtitle}
                onChange={(e) => props.setColorSubtitle(e.target.value)}
              />
            </div>
            <div>
              Buy course button
              <input
                type="color"
                value={props.course.colors.buy_course}
                onChange={(e) => props.setColorBuyCourse(e.target.value)}
              />
            </div>
            <div>
              Additional courses
              <input
                type="color"
                value={props.course.colors.more_courses}
                onChange={(e) => props.setColorMoreCourses(e.target.value)}
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showMoreCourses}
                  checked={props.course.show.more.more_courses}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              I belibe...
              <input
                type="color"
                value={props.course.colors.belive}
                onChange={(e) => props.setColorBelive(e.target.value)}
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showBelive}
                  checked={props.course.show.more.belive}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Top educators
              <input
                type="color"
                value={props.course.colors.top_educators}
                onChange={(e) => props.setColorTopEducators(e.target.value)}
              />
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showTopEducarors}
                  checked={props.course.show.more.top_educators}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              Footer
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={props.showCourseFooter}
                  checked={props.course.show.more.footer}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          {/* </div> */}

          <div id="bottom_configurtor">
            <Button variant="primary" onClick={handleSave}>
              Save course
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
