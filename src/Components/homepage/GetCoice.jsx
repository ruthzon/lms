import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Card,
  CardDeck,
  Dropdown,
  Carousel,
  Form
} from 'react-bootstrap';
import './App.css';
import ListCourses from '../ListCourses';

function GetChoice(props) {
  return (
    <section id="choice">
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
        <h3>Get choice of your course</h3>
      </div>
      <CardDeck className="none"></CardDeck>
      <CardDeck>
        <ListCourses data={props.data} i={0}/>
      </CardDeck>
      <CardDeck>
        <ListCourses data={props.data} i={3} />
      </CardDeck>
    </section>
  );
}

function WorldSelectionCourse(props) {
  const {course, setName, setSubtitle, setImage} = props;

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
            <ListCourses data={props.data} i={0} />
          </CardDeck>
        </Carousel.Item>
        <Carousel.Item>
          <CardDeck>
            <ListCourses data={props.data} i={3}/>
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
export {WorldSelectionCourse, GetChoice};
