import './portfolio.css';
import IMG1 from '../../assets/Project_1.png';
import IMG2 from '../../assets/Project_2.png';
import IMG3 from '../../assets/Project_3.png';
import IMG4 from '../../assets/Project_4.png';
import IMG5 from '../../assets/Project_5.png';
import IMG6 from '../../assets/Project_6.png';
import React from 'react';

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'SoundhoundAI – Enterprise Conversational AI Platform',
      img: IMG1,
      description:
        'Built an enterprise conversational AI system using RAG and vector databases to deliver context-aware responses. Designed scalable FastAPI services on AWS and implemented multi-agent workflows to automate customer interactions.',
      technologies:
        'Python | FastAPI | RAG | LangGraph | Vector Databases | AWS',
      link: 'https://www.soundhound.com/',
    },
    {
      id: 2,
      title: 'Sabermine – AI Document Processing System',
      img: IMG2,
      description:
        'Developed an AI-driven document processing platform using OCR and NLP to extract structured data from PDFs and scanned files. Built scalable pipelines with FastAPI to automate high-volume document workflows.',
      technologies: 'Python | FastAPI | OCR | NLP | AWS',
      link: 'https://sabermine.ai/',
    },
    {
      id: 3,
      title: 'Myaigi – Multi-Agent AI System',
      img: IMG3,
      description:
        'Engineered a multi-agent AI system using LangChain and LangGraph for complex task orchestration and automation. Implemented RAG pipelines to enable context-aware reasoning and multi-step decision-making.',
      technologies: 'Node.js | JavaScript | LangChain | LangGraph | LLMs | RAG',
      link: 'https://myaigi.ai/',
    },
    {
      id: 4,
      title: 'Real-Time Text Detection & OCR System',
      img: IMG4,
      description:
        'An AI-powered real-time text detection system for extracting and processing on-screen text from live video streams. Built using advanced computer vision and OCR techniques, optimized for high accuracy and low-latency performance in dynamic environments such as live news broadcasts.',
      technologies:
        'Python | OpenCV | Tesseract OCR | Deep Learning | Computer Vision',
      link: '',
    },
    {
      id: 5,
      title: 'Highline Residential – Real Estate Platform',
      img: IMG5,
      description:
        'Built a full-stack real estate platform using FastAPI, React.js, and PostgreSQL for property search and management. Optimized backend services and database queries to improve retrieval speed and user experience.',
      technologies: 'Python | FastAPI | JavaScript | React.js | PostgreSQL',
      link: 'https://www.hlres.com/',
    },
    {
      id: 6,
      title: 'Mobile Application for Electric Bill Visualization',
      img: IMG6,
      description:
        'An Android-based application that leverages OCR to extract and visualize electricity billing data. Designed to provide users with actionable insights, usage tracking, and a simplified view of energy consumption patterns.',
      technologies: 'Android | Java | XML | Python | OCR | Image Processing',
      link: '',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
