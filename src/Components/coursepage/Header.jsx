import React, {Component, useContext} from 'react';
import './course.css';
import {Row, Col, Container} from 'react-bootstrap';
import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaArrowLeft,
  FaArrowRight,
  FaRegClock,
} from 'react-icons/all';
import {UserContext} from '../login/userProvider';
class Header extends Component {
  constructor(){
    this.user = useContext(UserContext);
  }
  render() {
    return (
      <>
        <div className="header">
          <div className="content">
            {this.user !== null && this.props.data.user_id === this.user.uid && (
              <p className="text-own">your own course - you may edit <a href={"/editcourse/"+this.props.data.id}> here</a></p>
            )}
            <h1>{this.props.data.name}</h1>
            <br />
            <div className={this.props.view ? 'header-view' : ''}>
              <h3>
                {/* Learn graphic design today with Photoshop, Illustrator, Adobe
                  XD, InDesign & more in this Adobe CC Masterclass! */}
                {this.props.data.subtitle}
              </h3>
              <Container>
                <Row>
                  <Col xs="3">
                    <FaRegStar color="#F3B23A" />
                    {this.props.data.stars}
                  </Col>
                  <Col xs="3">
                    <FaRegEye color="#DB4500" />
                    {/* {this.props.data.views} */}
                    Enrolled 45 students
                  </Col>
                  <Col xs="3">
                    <FaRegClock />
                    Duration 10 week
                  </Col>
                  <Col xs="3">
                    <FaRegPlayCircle color="#3E9365" />
                    {this.props.data.lesion + ' '} Lessons
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
