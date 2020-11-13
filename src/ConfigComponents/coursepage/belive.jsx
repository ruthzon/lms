import React, {Component} from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';
import '../../ViewComponents/coursepage/course.css';

class Belive extends Component {
  render() {
    return (
      <>
        <div className="belive content">
          <Container>
            <Row>
              <Col md="6">
                <p>
                  <i>
                    I believe in lifelong learning and Skillfy is a great place
                    to learn from experts. I’ve learned a lot and recommend it
                    to all my friends.
                  </i>
                  <br />
                  <br />
                  Riaz Surti | Hearthy Foods
                </p>
              </Col>
              <Col md="6">
                <Image src="./img_from_xd/image 116.png"></Image>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Belive;
