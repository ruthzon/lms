// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../../ViewComponents/homepage/App.css';
import GetChoice from './GetCoice.jsx';
import WorldSelectionCourse from './WorldSelectionCourse';
import Navigation from '../../navbar.jsx';
import Header from './Header.jsx';
import Categories from './Categories';
import LearningPlatform from './LearningPlatform';
import CTA from './CTA';
import Testimoinal from './Testimoinal';
import OurPartner from './OurPartner';
import Footer from '../../ViewComponents/Footer';
import {
  Categories as ctgs,
  Courses as crs,
  // Students as tst,
  Partners as prt,
  Learnings as lrn,
} from '../../Store/data.js';
import { connect } from 'react-redux';
const mapDispatchToProps = (dispatch) => ({
});

function mapStateToProps(state) {
  return {
    styles: state.stylesReducer.styles
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
function HomePage(props) {
  return (
    <>
     <div id="stage"  className={props.styles.configurator? "col-md-10 d-flex":"col-md-12 d-flex"}>

<div id="landingPage_edit" className="m-auto">
      <div className="homeconf">
        <Navigation />
        <Header />
        <Categories />
        <GetChoice />
        <LearningPlatform />
        <WorldSelectionCourse />
        <CTA />
        <Testimoinal />
        {/* <Testimoinal data={tst} /> */}
        <OurPartner />
        <Footer />
      </div>
      </div>
      </div>
    </>
  );
})

// export default HomePage;
