import React from 'react'
import './homepage/App.css'
import { connect } from 'react-redux';
import CourseCard from './CourseCard';

function mapStateToProps(state) {
    return {
        school: state.schoolReducer.school,
    };
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(function studentProfilePage(props) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row" style={{ backgroundColor: props.school.colors.aboutStudent }}>
                    
                </div>
            </div>

        </div>
    )
})

