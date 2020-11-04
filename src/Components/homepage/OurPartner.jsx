import {FaArrowRight, FaArrowLeft} from 'react-icons/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Image
} from 'react-bootstrap';
import './App.css';

function OurPartner(props) {
  return (
    <>
      <section className="partner">
        <div className="title">
          <Form inline>
            <button>
              <FaArrowLeft />
            </button>
            <button>
              <FaArrowRight />
            </button>
          </Form>
          <h3>Trusted by our awesome partners
          </h3>
        </div>
        <Container>
          <Row>
            {/* <Col xs={4} md={2}>
              <Image src="./img_from_xd/Image 9.png" rounded />
            </Col>
            <Col xs={4} md={2}>
              <Image src="./img_from_xd/Image 11.png" roundedCircle />
            </Col>
            <Col xs={4} md={2}>
              <Image src="./img_from_xd/Image 10.png" thumbnail />
            </Col>
            <Col xs={4} md={2}>
              <Image src="./img_from_xd/Image 12.png" thumbnail />
            </Col>
            <Col xs={4} md={2}>
              <Image src="./img_from_xd/Image 13.png" thumbnail />
            </Col>
            <Col xs={4} md={2}>
              <Image src="./img_from_xd/Image 14.png" thumbnail />
            </Col> */}
            <RowPartners data={props.data}/>
          </Row>
        </Container>
      </section>
    </>
  );
}

function RowPartners(props) {
  var rows = [];
  for (var i = 0; i < props.data.length; i++) {
    rows.push(            
    <Col xs={4} md={2}>
      <Image src={props.data[i].image} thumbnail />
    </Col>
    );
  }
  return rows;
}
export default OurPartner;
