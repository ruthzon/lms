import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Card,
  CardDeck,
  Dropdown,
  Carousel,
  Form
} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import ListCourses from '../ListCourses';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    courses: state.listCoursesReducer.courses,
    school:state.schoolReducer.school
  };
}

function WorldSelectionCourse(props) {
  // const {course, setName, setSubtitle, setImage} = props;

  const prev = (
    <button onClick="dispatchDiscreteEvent" className="carousel-left">
      <FaArrowLeft />
    </button>
  );
  const next = (
    <button className="carousel-right">
      <FaArrowRight />
    </button>
  );
  return (
    <section id="world"  style={{backgroundColor: props.school.colors.worldSelection}}>
      <div className="title">
        <Form inline>
          <Dropdown>
            <Dropdown.Toggle  variant="light" id="dropdown-basic">Design</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button>View all</button>
        </Form>
        <h3>The world’s largest selection of courses</h3>
      </div>
      <Carousel
        autoPlay="false"
        nextIcon={next}
        prevIcon={prev}
        data-interval="false"
      >
        <Carousel.Item>
          <CardDeck>
            <ListCourses  courses={props.courses} i={0} />
          </CardDeck>
        </Carousel.Item>
        <Carousel.Item>
          <CardDeck>
            <ListCourses courses={props.courses} i={3}/>
          </CardDeck>
        </Carousel.Item>
      </Carousel>
      {/* <Form inline className="carousel">
            <button className="carousel-left">
              <FaArrowLeft />
            </button>
            <span className="carousel-line"></span>
            <button className="carousel-right">
              <FaArrowRight />
            </button>
          </Form> */}
    </section>
  );
}

export default connect(
  mapStateToProps,
  null
)(
WorldSelectionCourse)

// export {WorldSelectionCourse, GetChoice};
