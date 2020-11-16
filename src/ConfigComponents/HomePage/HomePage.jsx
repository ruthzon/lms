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

function HomePage() {
  return (
    <>
      <div className="homeconf">
        <Navigation />
        <Header />
        <Categories data={ctgs} />
        <GetChoice />
        <LearningPlatform data={lrn} />
        <WorldSelectionCourse />
        <CTA />
        <Testimoinal />
        {/* <Testimoinal data={tst} /> */}
        <OurPartner data={prt} />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
