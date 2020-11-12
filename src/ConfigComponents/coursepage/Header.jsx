import React, {useContext} from 'react';
import './course.css';
import {Row, Col, Container} from 'react-bootstrap';
import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaRegClock,
} from 'react-icons/all';
import {UserContext} from '../../login/userProvider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
// import {Input} from 'semantic-ui-react';
import '../configurator.css';

// const mapDispatchToProps = (dispatch) => ({
//   setName: (data) => dispatch(actions.setName(data)),
//   setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
// });

// function mapStateToProps(state) {
//   return {
//     course: state.courseReducer.course,
//   };
// }

const mapStateToProps = (state) => ({
  course: state.courseReducer.course
})

const mapDispatchToProps =(dispatch)=>( {
  setName: (data) => dispatch(actions.setName(data)),
  setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Header(props) {
  // const user = useContext(UserContext);
  // const {course, setName, setSubtitle} = props;

  return (
    <>
      <div className="header">
        <div className="content">
          {/* {user !== null && course.user_id === user.uid && (
            <p className="text-own">
              your own course - you may edit it
              <a href={'/editcourse/' + course.id}> here</a>
            </p>
          )} */}
          <h1>
            <input
              value={props.course.name}
              onChange={(e) => props.setName(e.target.value)}
              type="text"
            />
            {props.course.name}
          </h1>
          <br />
          <div className={props.view ? 'header-view' : ''}>
            <h3>
              {/* Learn graphic design today with Photoshop, Illustrator, Adobe
                  XD, InDesign & more in this Adobe CC Masterclass! */}
              <input
                value={props.course.subtitle}
                onChange={(e) => props.setSubtitle(e.target.value)}
                type="text"
              />
              {/* {course.subtitle} */}
            </h3>
            <Container>
              <Row>
                <Col xs="3">
                  <FaRegStar color="#F3B23A" />
                  {props.course.stars}
                </Col>
                <Col xs="3">
                  <FaRegEye color="#DB4500" />
                  {/* {course.views} */}
                  Enrolled 45 students
                </Col>
                <Col xs="3">
                  <FaRegClock />
                  Duration 10 week
                </Col>
                <Col xs="3">
                  <FaRegPlayCircle color="#3E9365" />
                  {props.course.lesion + ' '} Lessons
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
});

// export default Header;
