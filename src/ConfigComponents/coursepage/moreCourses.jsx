import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CourseCard from '../homepage/Courses'
import ListCourses from '../ListCourses';
import React from 'react';
import {CardDeck, Form, Dropdown} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import {connect} from 'react-redux';
import {Courses} from '../../Store/data';
import {actions} from '../../Store/actions';
import Carousel from 'react-elastic-carousel';
import '../HomePage/carousel.css';
import CourseCard from '../CourseCard';
function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
    courses: state.listCoursesReducer.courses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
  setMoreCourses: (name) => dispatch(actions.setMoreCourses(name)),
});

function CarouserlItem(props) {
  const algo = props.course.more_courses.algorithm;
  const courses_algo = props.courses.filter(
    (course) => course[algo] == props.course[algo]
  );
  const listItems = [];
  let times =
    props.course.more_courses.items <= courses_algo.length
      ? props.course.more_courses.items
      :courses_algo.length;
  for (let i = 0; i < times; i++) {
    listItems.push(
      <>
        {/* // <Carousel.Item> */}
        {/* <CardDeck> */}
        <CourseCard course={courses_algo[i]} />
        {/* <ListCourses i={i * 3} courses={courses_algo} /> */}
        {/* // </CardDeck> */}
        {/* </Carousel.Item>*/}
      </>
    );
  }
  // debugger;
  return listItems;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function MoreCourses(props) {
  let {course, courses} = props;
  // if (props.courses.length == 0) courses = Courses;
  let carousel = null;
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 1000, itemsToShow: 3},
  ];
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
        <h3>
          <input
            value={course.more_courses.header}
            onChange={(e) =>
              props.setMoreCourses({key: 'header', value: e.target.value})
            }
          />
        </h3>
      </div>
      <Carousel
        className="content"
        breakPoints={breakPoints}
        ref={(ref) => (carousel = ref)}
      >
        <CarouserlItem courses={courses} course={course} />

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
