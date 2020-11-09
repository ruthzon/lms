import {FaRegStar, FaRegEye, FaRegPlayCircle} from 'react-icons/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {Card, Container, Row, Col} from 'react-bootstrap';
import '../homepage/App.css';
import {actions} from '../../Store/actions';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import {UserContext} from '../login/userProvider';

const history = createHashHistory();
const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  initialById: (id) => dispatch(actions.initialById(id)),
  setName: (name) => dispatch(actions.setName(name)),
  setSubtitle: (subtitle) => dispatch(actions.setSubtitle(subtitle)),
  setImage: (image) => dispatch(actions.setImage(image)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function EditCourseCard(props) {
  const {id, course, initialById, setName, setSubtitle, setImage} = props;
  initialById(id);
  const user = useContext(UserContext);

  const navigate = () => {
    // browserHistory.replace('/courses/:'+JSON.stringify( data));
    browserHistory.replace('/viewcourse/' + course.id);
    window.location.reload();
    console.log(props);
  };
  return (
    <Card className="edit-course-card" style={{ width: '20rem',margin: 'auto' }}>
      <Card.Img
        variant="top"
        className="card-img"
        src={process.env.PUBLIC_URL + course.image}
      />
      <Card.Header className="header">
        <Container>
          <Row>
            <Col xs="4" className="align-left">
              <FaRegStar color="#F3B23A" />
              {course.stars}
            </Col>
            <Col xs="4">
              <FaRegEye color="#DB4500" />
              {course.views}
            </Col>
            <Col xs="4" className="align-right">
              <FaRegPlayCircle color="#3E9365" />
              {course.lesion + ' '} Lessons
            </Col>
          </Row>
        </Container>
      </Card.Header>

      <Card.Body>
        <Card.Title className="align-left">
          {course.name}
          <br />
          <br />
        </Card.Title>
        <Container>
          <Row>
            <Col xs="2" className="align-left profile">
              <img src={course.auther_image} alt="card"></img>
            </Col>
            <Col xs="4" className="align-left profile">
              {course.auther}
            </Col>
            <Col xs="6" className="align-right price">
              <span>{course.prev_price} </span>
              {course.price}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
    // </Link>
  );
});
