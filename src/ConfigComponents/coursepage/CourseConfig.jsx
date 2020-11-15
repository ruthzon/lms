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
  showHowIsFor: () => dispatch(actions.showHowIsFor()),
  showCertification: () => dispatch(actions.showCertification()),
  showCourseDescription: () => dispatch(actions.showCourseDescription()),
  showStars: () => dispatch(actions.showStars()),
  showStudents: () => dispatch(actions.showStudents()),
  showWeeks: () => dispatch(actions.showWeeks()),
  showLessons: () => dispatch(actions.showLessons()),
  showCertificate:(data)=>dispatch(actions.showCertificate(data)),
  showAccess:(data)=>dispatch(actions.showAccess(data)),
  showUse:(data)=>dispatch(actions.showUse(data)),
  showLanguage:(data)=>dispatch(actions.showLanguage(data)),
  setLinkedin:(data)=>dispatch(actions.setLinkedin(data)),
  setInstegram:(data)=>dispatch(actions.setInstegram(data)),
  setFacebook:(data)=>dispatch(actions.setFacebook(data)),
  setTwitter:(data)=>dispatch(actions.setTwitter(data)),
  setReddit:(data)=>dispatch(actions.setReddit(data)),
  setYoutube:(data)=>dispatch(actions.setYoutube(data)),
  setWhatsapp:(data)=>dispatch(actions.setWhatsapp(data)),
  showLinkedin:()=>dispatch(actions.showLinkedin()),
  showInstegram:()=>dispatch(actions.showInstegram()),
  showFacebook:()=>dispatch(actions.showFacebook()),
  showTwitter:()=>dispatch(actions.showTwitter()),
  showReddit:()=>dispatch(actions.showReddit()),
  showYoutube:()=>dispatch(actions.showYoutube()),
  showWhatsapp:()=>dispatch(actions.showWhatsapp()),
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
            {props.course.show.share.instegram&&<input placeholder="instegram" onChange={e=>props.setInstegram(e.target.value)} value={props.course.share.instegram}/>}
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
            {props.course.show.share.facebook&&<input placeholder="facebook" onChange={e=>props.setFacebook(e.target.value)} value={props.course.share.facebook}/>}
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
            {props.course.show.share.whatsapp&&<input placeholder="whatsapp" onChange={e=>props.setWhatsapp(e.target.value)} value={props.course.share.whatsapp}/>}
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
            {props.course.show.share.twitter&&<input placeholder="twitter" onChange={e=>props.setTwitter(e.target.value)} value={props.course.share.twitter}/>}
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
            {props.course.show.share.youtube&&<input placeholder="youtube" onChange={e=>props.setYoutube(e.target.value)} value={props.course.share.youtube}/>}
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
            {props.course.show.share.reddit&&<input placeholder="reddit" onChange={e=>props.setReddit(e.target.value)} value={props.course.share.reddit}/>}
          </div>
        </div>
        
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
