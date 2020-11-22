import React from 'react';
import {connect} from 'react-redux';
import './frame.css';
// import Section from '../section/section';
import HomePage from '../homepage/HomePage';
import Configurator from './configurator';
import TopFrame from './top_frame';
import Stage from './stage';
import CourseConfig from '../coursepage/CourseConfig';
import HomeConfig from '../homepage/HomeConfig';

function HomePageFrame(props) {
  // const {jsonPage} =props;
  // const pageStyle={
  //     // color:jsonPage.settings.color,
  //     // backgroundColor:jsonPage.settings.bgColor
  // }
  return (
    <div id="frame">
      <TopFrame />
      <HomeConfig />
      <Stage />
    </div>
  );
}
export default connect((state) => {
//   return {
//     jsonPage: state.funnel.jsonPage,
//   };
})(HomePageFrame);
