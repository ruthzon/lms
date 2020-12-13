import { FaRegStar, FaRegEye, FaRegPlayCircle } from 'react-icons/all';
import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './homepage/App.css';
import { actions } from '../Store/actions';
import { createHashHistory } from 'history';
import { createBrowserHistory } from 'history';
import { UserContext } from '../login/userProvider';
import { Courses } from '../Store/data'
import $ from 'jquery';

const history = createHashHistory();
const browserHistory = createBrowserHistory();
const mapStateToProps = (state) => {
    return {
        studentProfile: state.studentProfilReducer.studentProfile,
        courses: state.listCoursesReducer.courses,
        courseStudent: state.CourseStudentReducer.courseStudent
    };
}

export default connect(
    mapStateToProps
    //   mapDispatchToProps
)(
    function CourseCard(props) {
        // const user = useContext(UserContext);
        // const user={};

        $(document).ready(function () {
            const dProgress = (props.courses.id / props.courseStudent.finishedLessons) * 100.0;
            // console.log(dProgress)
            var x = 100
            var y = 4
            var z = x / y
            var bars = $('.progress-bar');
            for (let i = 0; i < bars.length; i++) {
                var progress = $(bars[i]).attr('aria-valuenow');
                $(bars[i]).width(progress + z + '%');
                // if (progress >= "90") {
                //     $(bars[i]).addClass("bar-success");
                // } else if (progress >= "90" && progress < "100") {
                //     $(bars[i]).addClass("bar-warning");
                // } else {
                //     $(bars[i]).addClass("bar-error");
                // }
            }
        });
        // const CalculateRase = () => {

        //     // const dProgress = (props.courses.stars / props.courses.views) * 100.0;
        //     // const dProgress = x / y;
        //     let pro = x / y;
        //     setPro(pro);
        //     console.log(pro);
        //     return pro;

        // }


        const navigate = () => {
            // browserHistory.replace('/courses/:'+JSON.stringify( data));
            browserHistory.replace('/viewcourse/' + props.course.id);
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
                {/* {user!==null && props.course.user_id === user.uid && (
        <Card.Text className="text-own">your own course</Card.Text>
      )} */}
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
                                {props.course.lesion + ' '} Lessons
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
                        <Row>

                            <div className="progress row mt-5">
                                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        );
    }

)