import { FaSearch} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';

function Header() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col className="middle" md="6">
              <h1 className="learn">
                Learn new skills online with top educators
              </h1>
              <h6 className="choose">
                Choose from over 100,000 online video courses with new additions
                published every mont.
              </h6>
              <InputGroup className="mb-2 search-bar">
                <FormControl
                  placeholder="Search your favourite course"
                  aria-label="Search your favourite course"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    <FaSearch color="white" />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col md="6">
              <img
                src={process.env.PUBLIC_URL + './img_from_xd/Image 117.png'}
                alt="header"
              ></img>
            </Col>
          </Row>
        </Container>
   
      </header>
    </>
  );
}

export default Header;
