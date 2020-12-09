import React from 'react'
import './homepage/App.css'
import { connect } from 'react-redux'
import { actions } from '../Store/actions'
import { handleImage } from '../ConfigComponents/handleImage'
import './studentProfile.css'
import Navigation from './coursepage/navbar'
import Belive from './coursepage/belive'
import TopEducators from './coursepage/topEducators'
import Footer from './Footer'
import CourseCard from './CourseCard';
import { Courses } from '../Store/data'


const list = Courses;
const mapStateToProps = (state) => {
    return {
        studentProfile: state.studentProfilReducer.studentProfile,
        courses: state.listCoursesReducer.courses,
    };
}


const mapDispatchToProps = (dispatch) => ({
    setSstudentImage: (sub) => dispatch(actions.setSstudentImage(sub)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(function studentProfilePage(props) {
    return (
        <div>
            <Navigation></Navigation>
            <div className="container-fluid">
                <div className="row align-items-center" style={{ backgroundColor: props.studentProfile.colors.aboutStudent }}>
                    <div class="file-upload student-img offset-2 col-3 mt-5">
                        <img variant="top" src={props.studentProfile.image} />
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => handleImage(e, props.setSstudentImage)}
                        />
                    </div>
                    <div className="col-6 about ml-5">
                        <h2 className="student-name ">{props.studentProfile.name}</h2>
                        <p className="a ml-2">{props.studentProfile.profession}</p>
                        <button className=" ml-5 follow-btn">Follow</button>
                        <p>{props.studentProfile.about}</p>
                        <ul >
                            <li>
                                <img src='../img_from_xd/Star.png'></img>
                                4.6 Instructor Rating</li>
                            <li>
                                <img src='../img_from_xd/Layer 2.png'></img>
                                    1,258 Students</li>
                            <li>
                                <img src='../img_from_xd/Layer 2.png'></img>
                                    Course</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <h2 className="offset-1 mt-5 col-3">My courses({list.length}) </h2>
                    <select className="form-control offset-5 col-1 popular-btn mt-5">Popular
                    <option selected>Popular</option>
                    </select>
                </div>
                <div className="course-list row mt-5">
                    <ul>
                        {list.map(item => (
                            <li className="col-md-3 col-sm-12">
                                <CourseCard course={item}></CourseCard>
                            </li>
                        ))}
                    </ul>
                </div>
                <Belive></Belive>
                <TopEducators></TopEducators>
                <Footer></Footer>
            </div>

        </div>
    )
})

