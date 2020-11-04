import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
} from 'react-icons/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './homepage/App.css';
import {actions} from '../Store/actions';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';

const history = createHashHistory();
const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(actions.setName(name)),
  setSubtitle: (subtitle) => dispatch(actions.setSubtitle(subtitle)),
  setImage: (image) => dispatch(actions.setImage(image)),
});


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(
 export default
  function CourseCard(props) {

  const navigate = () => {
    // browserHistory.replace('/courses/:'+JSON.stringify( data));
    browserHistory.replace('/viewcourses/' + props.course.id);
    window.location.reload();
    console.log(props);
  };
  return (
    // <Link to="/courses">
    <Card
      className="course-card"
      // onClick={routeChange}
      // onClick={ window.location.href='/courses/:'+this}
      onClick={navigate}
      // onPress={() => navigation.navigate('Details')}
      // href="./coursepage/CoursePage.jsx"
    >
      <Card.Img
        variant="top"
        className="card-img"
        src={process.env.PUBLIC_URL + props.course.image}
      />
      <Card.Header className="header">
        <Container>
          <Row>
            <Col xs="4" className="align-left">
              <FaRegStar color="#F3B23A" />
              {props.course.stars}
            </Col>
            <Col xs="4">
              <FaRegEye color="#DB4500" />
              {props.course.views}
            </Col>
            <Col xs="4" className="align-right">
              <FaRegPlayCircle color="#3E9365" />
              {props.course.lesion + ' '} Lesion
            </Col>
          </Row>
        </Container>
      </Card.Header>

      <Card.Body>
        <Card.Title className="align-left">
          {props.course.name}
          <br />
          <br />
        </Card.Title>
        <Container>
          <Row>
            <Col xs="2" className="align-left profile">
              <img src={props.course.auther_image} alt="card"></img>
            </Col>
            <Col xs="4" className="align-left profile">
              {props.course.auther}
            </Col>
            <Col xs="6" className="align-right price">
              <span>{props.course.prev_price} </span>
              {props.course.price}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
    // </Link>
  );
}
// );

