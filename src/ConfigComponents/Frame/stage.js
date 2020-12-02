import React from 'react';
import { connect } from 'react-redux';
import './frame.css'
// import Section from '../section/section'
import HomePage from '../homepage/HomePage';

function mapStateToProps(state) {
    return {
      school: state.schoolReducer.school,
      styles: state.stylesReducer.styles,
    };
  }
  
function Stage(props) {
    const { jsonPage } = props;
    const pageStyle = {
        // color:jsonPage.settings.color,
        // backgroundColor:jsonPage.settings.bgColor
    }
    return (
        <div id="stage" className={props.styles.configurator?"col-md-10 d-flex":"col-md-12 d-flex"}>

            <div id="landingPage_edit" className="m-auto">
                {props.children}
            </div>
        </div>
    )
}
export default connect(
     mapStateToProps,null
    
)
    (Stage)
