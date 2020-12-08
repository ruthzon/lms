import React from 'react'
import './homepage/App.css'
import { connect } from 'react-redux';
// import CourseCard from './CourseCard';
import { handleImage } from '../ConfigComponents/handleImage';
import './studentProfile.css'
import Belive from '../ViewComponents/coursepage/belive'
import StudentProfilePage1 from './studentProfilePage1';
// import  Navigation from '../ViewComponents/coursepage/navbar';



function mapStateToProps(state) {
    return {
        studentProfile: state.studentProfilReducer.studentProfile
    };
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(function studentProfilePage(props) {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <div className="container-fluid">
                <div className="row align-items-center" style={{ backgroundColor: props.studentProfile.colors.aboutStudent }}>
                    <div class="file-upload offset-2 col-3 mt-5">
                        <img variant="top" src={props.studentProfile.image} />
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => handleImage(e, props.setImage)}
                        />
                    </div>
                    <div className="col-6 about">
                        <h2 className="student-name ">{props.studentProfile.name}</h2>
                        <p className="a ml-2">{props.studentProfile.profession}</p>
                        <button className="follow-btn">Follow</button>
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
                <Belive></Belive>
                <StudentProfilePage1></StudentProfilePage1>
            </div>

        </div>
    )
})

