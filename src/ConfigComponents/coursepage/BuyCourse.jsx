import React, {Component} from 'react';
import '../../ViewComponents/coursepage/course.css';
import {Card, Col, Button, Image, ListGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';

const mapDispatchToProps = (dispatch) => ({
  setPrice: (data) => dispatch(actions.setPrice(data)),
  setLanguage: (data) => dispatch(actions.setLanguage(data)),
  setPrice: (data) => dispatch(actions.setPrice(data)),
  setUse: (data) => dispatch(actions.setUse(data)),
  setAccess: (data) => dispatch(actions.setAccess(data)),
  setCertificate: (data) => dispatch(actions.setCertificate(data)),
});

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function BuyCourse(props) {
  // let course = props.data;
  const {
    course,
    setLanguage,
    setPrice,
    setAccess,
    setCertificate,
    setUse,
  } = props;
  return (
    <div className="buy-course shadow ">
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={course.image} />
        <Card.Body>
          <Card.Title>
            <input
              value={course.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Card.Title>
          {course.show.prev_price && (
            <Card.Text>
              <Image src="./img_from_xd/orange clock.svg"></Image>
              11 Hour left at this price
            </Card.Text>
          )}
          <Button variant="primary" block  style={{backgroundColor: course.colors.buy_course}}>
            Buy Now
          </Button>
          <ListGroup className="card-list" variant="flush">
            <ListGroup.Item>
              <h5>This course includes</h5>
              {course.show.language && (
                <p>
                  <Image src="./img_from_xd/book.svg"></Image>
                  Language -{' '}
                  <input
                    value={course.language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                </p>
              )}
              {course.show.use && (
                <p>
                  <Image src="./img_from_xd/screen.svg"></Image>
                  <input
                    value={course.use}
                    onChange={(e) => setUse(e.target.value)}
                  />
                </p>
              )}
              {course.show.access && (
                <p>
                  <Image src="./img_from_xd/timer.svg"></Image>
                  <input
                    value={course.access}
                    onChange={(e) => setAccess(e.target.value)}
                  />
                </p>
              )}
              {course.show.certificate && (
                <p>
                  <Image src="./img_from_xd/other.svg"></Image>
                  <input
                    value={course.certificate}
                    onChange={(e) => setCertificate(e.target.value)}
                  />
                </p>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h6>Training 5 or more people?</h6>Get your team access to 3500+
              top courses anytime.
              <span className=" card-text"> Contact our sale</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Share this course</h6>
             {course.show.share.instegram&& <Image src="./img_from_xd/instagram.svg"></Image>}
              {course.show.share.facebook&& <Image src="./img_from_xd/facebook (1).svg"></Image>}
              {course.show.share.whatsapp&& <Image src="./img_from_xd/whatsapp (1).svg"></Image>}
              {course.show.share.twitter&& <Image src="./img_from_xd/twitter (1).svg"></Image>}
              {/* {course.show.share.linkedin&&  <Image src="./img_from_xd/linkedin (1).svg"></Image> } */}
              {course.show.share.youtube&& <Image src="./img_from_xd/youtube (1).svg"></Image>}
              {course.show.share.reddit&& <Image src="./img_from_xd/reddit.svg"></Image>}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
});

// export default BuyCourse;
