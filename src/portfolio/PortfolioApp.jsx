import React from 'react';
import './portfolio.css';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import WorkExperience from './components/work/WorkExperience';

const PortfolioApp = () => {
  return (
    <div className="portfolio-root">
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <WorkExperience />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioApp;
