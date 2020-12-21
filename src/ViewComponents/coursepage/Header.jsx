import React, { useContext } from 'react';
import './course.css';
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


function mapStateToProps(state) {
  return {
    course: state.currentCourseReducer.currentCourse

  };
}
export default connect(
  mapStateToProps,

)(function Header(props) {
  // const user = useContext(UserContext);
  console.log(props)
  return (
    <>
      <div className="header">
        <div className="content">
          {/* <p className="text-own">
            your own course - you may edit it
              <Link to={'/editcourse/' + props.data.id}> here</Link>
          </p> */}
          <h1>{props.name}</h1>
          <br />
          <div className={props.view ? 'header-view' : ''}>
            <h3>
              {/* Learn graphic design today with Photoshop, Illustrator, Adobe
                  XD, InDesign & more in this Adobe CC Masterclass! */}
              {props.subtitle}
            </h3>
            <Container>
              <Row>
                <Col xs="3">
                  <FaRegStar color="#F3B23A" />
                  {props.stars}
                </Col>
                <Col xs="3">
                  <FaRegEye color="#DB4500" />
                  {/* {props.data.views} */}
                  Enrolled 45 students
                </Col>
                <Col xs="3">
                  <FaRegClock />
                  Duration 10 week
                </Col>
                <Col xs="3">
                  <FaRegPlayCircle color="#3E9365" />
                  {props.lesion + ' '} Lessons
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
)
