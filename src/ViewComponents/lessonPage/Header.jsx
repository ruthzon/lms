import React, { useContext } from 'react';
import '../../ViewComponents/coursepage/course.css';
import { Row, Col, Container } from 'react-bootstrap';
import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaRegClock,
} from 'react-icons/all';
import { UserContext } from '../../login/userProvider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../Store/actions';
// import {Input} from 'semantic-ui-react';
// import '../configurator.css';

function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
    course: state.courseReducer.course
  };
}
export default connect(
  mapStateToProps
)(function Header(props) {

  return (
    <>
      <div
        className="header"
        style={{ backgroundColor: props.course.colors.header }}
      >
        <div className="content">
          <h1>
            <p>{props.lesson.name}</p>
          </h1>
          <br />
          <div>
            <h3>
              <p>{props.lesson.subtitle}</p>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
});

// export default Header;
