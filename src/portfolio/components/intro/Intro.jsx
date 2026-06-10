import './intro.css';

import { FaAward } from 'react-icons/fa';
import React from 'react';
import { VscFolderLibrary } from 'react-icons/vsc';
import img from '../../assets/Me.jpeg';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="anas" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Senior AI Engineer with 5+ years of experience building scalable,
            high-performance AI-driven systems and modern web applications.
            Specialized in Large Language Models (LLMs), backend architecture,
            and end-to-end product development, with expertise in React,
            Node.js, PostgreSQL, and AWS. I focus on delivering secure,
            production-ready solutions that integrate AI into real-world
            applications to drive business value. Passionate about solving
            complex problems, scaling AI systems, and building efficient,
            maintainable products using modern best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
