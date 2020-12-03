import React from 'react';
import {connect} from 'react-redux';
import './frame.css';
// import Section from '../section/section';
import HomePage from '../HomePage/HomePage';
import Configurator from './configurator';
import TopFrame from './top_frame';
import Stage from './stage';
import CourseConfig from '../coursepage/CourseConfig';
import HomeConfig from '../HomePage/HomeConfig';



function mapStateToProps(state) {
  return {
      styles: state.stylesReducer.styles,
  };
}

function HomePageFrame(props) {
  // const {jsonPage} =props;
  // const pageStyle={
  //     // color:jsonPage.settings.color,
  //     // backgroundColor:jsonPage.settings.bgColor
  // }
  return (
    <div id="frame">
      {props.styles.configurator && (
            <Configurator>
              <HomeConfig />
            </Configurator>
          )}
          <Stage>
            <HomePage />
          </Stage>
    </div>
  );
}
export default connect(
  mapStateToProps,null
)(HomePageFrame);
