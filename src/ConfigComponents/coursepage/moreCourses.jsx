import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CourseCard from '../homepage/Courses'
import ListCourses from '../ListCourses'
import React from 'react';
import {
  CardDeck,
  Form,
  Dropdown,
  Carousel,
} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';

function MoreCourses() {
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
    <section id="world">
      <div className="title">
        <Form inline>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">Design</Dropdown.Toggle>
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
      <Carousel autoPlay={false} nextIcon={next} prevIcon={prev} data-interval="false">
        <Carousel.Item>
          <CardDeck>
            <ListCourses i={0}/>
          </CardDeck>
        </Carousel.Item>
        <Carousel.Item>
          <CardDeck>
            <ListCourses i={3}/>
          </CardDeck>
        </Carousel.Item>
      </Carousel>
     
    </section>
  );
}
export default MoreCourses;
