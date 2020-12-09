import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CourseCard from '../homepage/Courses'
import ListCourses from '../ListCourses';
import React from 'react';
import {CardDeck, Form, Dropdown, Carousel} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import {connect} from 'react-redux';
import {Courses} from '../../Store/data';
import { actions } from '../../Store/actions';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    courses: state.listCoursesReducer.courses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  });

function CarouserlItem(props) {
  const listItems = [];
  let times = props.len % 3 === 0 ? props.len / 3 : props.len / 3 + 1;
  for (let i = 0; i < times; i++) {
    listItems.push(
      <Carousel.Item>
        <CardDeck>
          <ListCourses i={i * 3} courses={props.courses}/>
        </CardDeck>
      </Carousel.Item>
    );
  }
  // debugger;
  return listItems;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function MoreCourses(props) {
  let courses = props.courses;
  // if (props.courses.length == 0) courses = Courses;

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
    <section
      id="world"
      onClick={(e) => {
        props.setSectionConfig({name: 'course_more_courses'});
      }}
      className="hover-config"
      style={{backgroundColor: props.course.colors.more_courses}}
    >
      <div className="title">
        <Form inline>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Design
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button>View all</button>
        </Form>
        <h3>More courses you might like</h3>
      </div>
      <Carousel
        autoPlay={false}
        nextIcon={next}
        prevIcon={prev}
        data-interval="false"
      >
        <CarouserlItem len={courses.length} courses={courses} />

        {/* <Carousel.Item>
          <CardDeck>
            <ListCourses i={3} />
          </CardDeck>
        </Carousel.Item> */}
      </Carousel>
    </section>
  );
});
// export default MoreCourses;
