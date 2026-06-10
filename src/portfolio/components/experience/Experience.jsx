import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import {
  FaCode,
  FaServer,
  FaBrain,
  FaTools,
  FaDatabase,
  FaProjectDiagram,
} from 'react-icons/fa';
import './experience.css';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: <FaProjectDiagram />,
    skills: [
      'Large Language Models (LLMs)',
      'RAG (Retrieval-Augmented Generation)',
      'OpenAI / LLM APIs Integration',
      'Prompt Engineering',
      'Vector Databases (Pinecone, FAISS)',
      'AI System Design',
      'LangChain / LLM Frameworks',
      'AI-powered Web Applications',
    ],
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    skills: [
      'Node.js',
      'Express.js',
      'Nest.js',
      'Python',
      'FastAPI',
      'Django',
      'Django REST Framework',
      'RESTful API Design',
      'GraphQL',
      'JWT / OAuth 2.0 / SSO',
      'Microservices Architecture',
      'WebSockets',
      'Celery',
      'Redis',
    ],
  },
  {
    title: 'Frontend',
    icon: <FaCode />,
    skills: [
      'HTML5 & CSS3',
      'Tailwind CSS / Bootstrap',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Angular',
      'Vue.js',
      'Redux / Zustand',
      'Responsive UI / UX',
      'REST API Integration',
      'Material UI',
      'Shadcn UI',
      'Component-Based Architecture',
    ],
  },
  {
    title: 'Database',
    icon: <FaDatabase />,
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'SQLite',
      'Vector Databases',
      'Pinecone',
      'Weaviate',
      'ChromaDB',
      'FAISS',
      'Data Modeling',
      'Embedding Storage & Retrieval',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaTools />,
    skills: [
      'AWS (EC2, S3, RDS, Lambda)',
      'Google Cloud Platform (GCP)',
      'Compute Engine',
      'Cloud Storage',
      'Cloud Functions',
      'Cloud Run',
      'Vertex AI',
      'Docker (Containerization)',
      'CI/CD (GitHub Actions)',
      'Nginx / Deployment',
      'Environment & Secrets Management',
      'Basic Kubernetes',
    ],
  },
  {
    title: 'Architecture & Practices',
    icon: <FaProjectDiagram />,
    skills: [
      'Clean Architecture',
      'SOLID Principles',
      'Scalable System Design',
      'Microservices & Monolith Design',
      'API Design & Versioning',
      'Design Patterns',
      'Agile / Scrum',
    ],
  },
  {
    title: 'Testing & Tools',
    icon: <FaTools />,
    skills: [
      'Unit Testing (Jest, Mocha)',
      'Integration Testing',
      'API Testing (Postman)',
      'Git & GitHub',
      'Docker-based Development',
      'Debugging & Performance Optimization',
    ],
  },
  {
    title: 'APIs & Services',
    icon: <FaTools />,
    skills: [
      'Google Maps API',
      'Stripe / PayPal',
      'GTM (Google Tag Manager)',
      'Meta Pixel (Facebook Pixel)',
      'OpenAI API / LLM APIs',
      'Vector Database APIs (Pinecone, Weaviate)',
      'AI Model Integration (Inference APIs)',
      'File Storage APIs (AWS S3, Cloudinary)',
    ],
  },
];

const Experience = () => {
  return (
    <section id="skills">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        {skillCategories.map((cat, idx) => (
          <div
            className="experience__group"
            key={cat.title}
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="experience__group-header">
              <span className="experience__group-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            <div className="experience__content">
              {cat.skills.map((skill) => (
                <article className="experience__details" key={skill}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
