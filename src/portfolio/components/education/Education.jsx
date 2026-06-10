import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './education.css';

const educationList = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'UET, Lahore',
    duration: '2017 — 2021',
    highlights: [
      'Specialized in Software Engineering, AI & Web Technologies.',
      'Core skills: Machine Learning, Deep Learning, Natural Language Processing (NLP), and Data Analysis.',
      'Graduated with distinction — CGPA 3.3 / 4.0.',
    ],
  },
  {
    degree: 'Intermediate — Pre-Engineering (FSc)',
    institution: 'Punjab College of Information Technology',
    duration: '2015 — 2017',
    highlights: [
      'Mathematics, Physics & Computer Science.',
      'Top 5% of graduating class.',
      'Developed strong analytical and problem-solving foundation.',
    ],
  },
];

const Education = () => {
  return (
    <section id="education">
      <h5>What I've Studied</h5>
      <h2>Education</h2>

      <div className="container education__container">
        {educationList.map((edu, idx) => (
          <article
            className="education__card"
            key={idx}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="education__icon">
              <FaGraduationCap />
            </div>
            <div className="education__body">
              <div className="education__head">
                <h3>{edu.degree}</h3>
                <span className="education__duration">{edu.duration}</span>
              </div>
              <p className="education__institution">{edu.institution}</p>
              <ul className="education__highlights">
                {edu.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
