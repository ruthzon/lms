import {FaGoogle, FaTwitter, FaLinkedin, FaFacebook} from 'react-icons/all';
// import './courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './homepage/App.css';
function Footer() {
  return (
    <section id="footer">
      <Container>
        <Row
          text="center"
          className="text-center text-xs-center text-sm-left text-md-right">
          <Col xs="12" sm="3" md="3">
            <h5>Company</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Affiliates</a>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="3" md="3">
            <h5>Community</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Go Premium</a>
              </li>
              <li>
                <a href="">Team Plans</a>
              </li>
              <li>
                <a href="">Refer a Friend</a>
              </li>
              <li>
                <a href="">Gift Cards</a>
              </li>
              <li>
                <a href="">Scholarships</a>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="3" md="3">
            <h5>Teaching</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Become a</a>
              </li>
              <li>
                <a href="">Teacher</a>
              </li>
              <li>
                <a href="">Teaching</a>
              </li>
              <li>
                <a href="">Academy </a>
              </li>
              <li>
                <a href="" title="Design and developed by">
                  Teacher
                </a>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="3" md="3">
            <h5>Support</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">System Requirements</a>
              </li>
              <li>
                <a href="">Register Activation </a>
              </li>
              <li>
                <a href="" title="Design and developed by">
                  Key
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center text-xs-center text-sm-left text-md-left">
          <Col xs="12" sm="12" md="12" mt="2">
            <div className="all-right">
              © 2015-2020 Skillfy Education Private Limited. All rights reserved
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="">
                    <FaFacebook />{' '}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FaGoogle />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <hr />
        </Row>
      </Container>
    </section>
  );
}
export default Footer;
