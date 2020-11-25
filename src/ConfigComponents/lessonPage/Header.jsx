import React, {useContext} from 'react';
import '../../ViewComponents/coursepage/course.css';
import {Row, Col, Container} from 'react-bootstrap';
import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaRegClock,
} from 'react-icons/all';
import {UserContext} from '../../login/userProvider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
// import {Input} from 'semantic-ui-react';
import '../configurator.css';

// const mapDispatchToProps = (dispatch) => ({
//   setName: (data) => dispatch(actions.setName(data)),
//   setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
// });

// function mapStateToProps(state) {
//   return {
//     course: state.courseReducer.course,
//   };
// }

function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
    course:state.courseReducer.course
  };
}

const mapDispatchToProps = (dispatch) => ({
  setLessonProp: (name) => dispatch(actions.setLessonProp(name)),
  showLessonProp: (sub) => dispatch(actions.showLessonProp(sub)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Header(props) {
  // const user = useContext(UserContext);
  // const {course, setName, setSubtitle} = props;
  // let prev = Object.assign({}, props.course);
  return (
    <>
      <div
        className="header"
        style={{backgroundColor: props.course.colors.header}}
      >
        <div className="content">
          {/* {user !== null && lesson.user_id === user.uid && (
            <p className="text-own">
              your own course - you may edit it
              <a href={'/editcourse/' + lesson.id}> here</a>
            </p>
          )} */}
          <h1>
            <textarea
              value={props.lesson.name}
              style={{color: props.course.colors.name}}
              onChange={(e) => props.setLessonProp([e.target.value,"name"])}
              type="text"
            />
            {/* {props.lesson.name} */}
          </h1>
          <br />
          <div>
            <h3>
              {/* Learn graphic design today with Photoshop, Illustrator, Adobe
                  XD, InDesign & more in this Adobe CC Masterclass! */}
              <textarea
                style={{color: props.course.colors.subtitle}}
                value={props.lesson.subtitle}
                onChange={(e) => props.setLessonProp([e.target.value,"subtitle"])}
                type="text"
              />
              {/* {lesson.subtitle} */}
            </h3>
            <Container>

              <Row>
                {props.lesson.show.stars && (
                  <Col xs="3">
                    <FaRegStar color="#F3B23A" />
                    {props.course.stars} stars
                  </Col>
                )}
                {props.lesson.show.students && (
                  <Col xs="3">
                    <FaRegEye color="#DB4500" />
                    {/* {course.views} */}
                    Enrolled {props.course.students_num} students
                  </Col>
                )}
                {props.lesson.show.weeks && (
                  <Col xs="3">
                    <FaRegClock />
                    Duration {props.course.weeks} weeks
                  </Col>
                )}
                {props.lesson.show.lessons && (
                  <Col xs="3">
                    <FaRegPlayCircle color="#3E9365" />
                    {props.course.lessons.length + ' '} Lessons
                  </Col>
                )}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
});

// export default Header;
