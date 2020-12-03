import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Card, CardDeck, Dropdown, Carousel, Form} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import ListCourses from '../ListCourses';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';


const mapDispatchToProps = (dispatch) => ({
  setSchoolName: (name) => dispatch(actions.setSchoolName(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),

});

function mapStateToProps(state) {
  return {
    courses: state.listCoursesReducer.courses,
    school: state.schoolReducer.school,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function GetChoice(props) {
  return (
    <section
      id="choice"
      style={{backgroundColor: props.school.colors.getChoice}}
      onClick={() => props.setSectionConfig({name: 'getChoice'})}
      className="hover-config"
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
        <h3>Get choice of your course</h3>
      </div>
      <CardDeck className="none"></CardDeck>
      <CardDeck>
        <ListCourses courses={props.courses} i={0} />
      </CardDeck>
      <CardDeck>
        <ListCourses courses={props.courses} i={3} />
      </CardDeck>
    </section>
  );
});

// export {WorldSelectionCourse, GetChoice};
