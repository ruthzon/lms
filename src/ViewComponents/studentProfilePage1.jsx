import React from 'react'
import './homepage/App.css'
import { connect } from 'react-redux';
// import CourseCard from './CourseCard';
import studentProfilePage1 from './studentProfilePage1';
import { handleImage } from '../ConfigComponents/handleImage';
import './studentProfile.css'
import Belive from '../ViewComponents/coursepage/belive'
// import  Navigation from '../ViewComponents/coursepage/navbar';



function mapStateToProps(state) {
    return {
        studentProfile: state.studentProfilReducer.studentProfile
    };
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(function studentProfilePage1(props) {
    return (
        <div>
            {/* <h1>hiiiiiiiiiiiiiiiiii</h1>
            <button>hiiiiiiiiiiiiiiiiiiiiii</button> */}

        </div>
    )
})

