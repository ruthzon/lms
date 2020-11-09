import React, {Component} from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import '../course.css';

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <>
        <div className="instructor">
          <h3>Student feedback</h3>

          <Container>
            <Row>
              <Col md="3">
                <Image src="./img_from_xd/image 71.png"></Image>
              </Col>
              <Col md="9">
                <p>
                  CBE brings you courses that are affordable, current,
                  entertaining and based on practical work experience instead of
                  theory.
                </p>
              </Col>
            </Row>
            <Row>
              <h4>Adobe Certified Instructor & Adobe Certified Expert</h4>
              <p>
                Effortless comfortable full leather lining eye-catching unique
                detail to the toe low ‘cut away’ sides clean and sleek. Polished
                finish elegant court shoe work duty stretchy mid kitten heel
                this ladylike design slingback strap mid kitten heel this
                ladylike design. Sharing is who I am, and teaching is where I am
                at my best, because I’ve been on both sides of that equation,
                and getting to deliver useful training is my meaningful way to
                be a part of the creative community.am at my best, because I’ve
                been on both sides of that equation, and getting to deliver
                useful training is my meaningful Thanks.
              </p>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Reviews;
