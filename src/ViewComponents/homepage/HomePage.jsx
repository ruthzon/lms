// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { GetChoice, WorldSelectionCourse } from './GetCoice.jsx';
import Navigation from '../../navbar.jsx';
import Header from './Header.jsx';
import Categories from './Categories';
import LearningPlatform from './LearningPlatform';
import CTA from './CTA';
import Testimoinal from './Testimoinal';
import OurPartner from './OurPartner';
import Footer from '../Footer';

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
    </>
  );
}

export default HomePage;
