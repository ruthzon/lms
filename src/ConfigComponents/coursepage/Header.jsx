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

function Header(props) {
  const user = useContext(UserContext);

  return (
    <>
      <div className="header">
        <div className="content">
          {user !== null && props.data.user_id === user.uid && (
            <p className="text-own">
              your own course - you may edit it
              <a href={'/editcourse/' + props.data.id}> here</a>
            </p>
          )}
          <h1>{props.data.name}</h1>
          <br />
          <div className={props.view ? 'header-view' : ''}>
            <h3>
              {/* Learn graphic design today with Photoshop, Illustrator, Adobe
                  XD, InDesign & more in this Adobe CC Masterclass! */}
              {props.data.subtitle}
            </h3>
            <Container>
              <Row>
                <Col xs="3">
                  <FaRegStar color="#F3B23A" />
                  {props.data.stars}
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
                  {props.data.lesion + ' '} Lessons
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
