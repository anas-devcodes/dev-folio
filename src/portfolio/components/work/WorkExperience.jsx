import React from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import './work.css';

const experiences = [
  {
    role: 'Senior AI Developer',
    company: 'Webisoft',
    location: 'Lahore, PK',
    duration: 'Apr 2024 — Present',
    contributions: [
      'Built production-grade LLM systems using RAG, LangChain, and LangGraph, improving response accuracy by 40%.',
      'Architected AI inference services using FastAPI, supporting high-throughput, low-latency workloads.',
      'Implemented advanced vector retrieval systems (Pinecone, FAISS) for semantic search and knowledge retrieval.',
      'Reduced inference latency by 30% through caching, batching, and prompt optimization techniques.',
      'Designed multi-agent AI systems for workflow automation and decision-making.',
      'Deployed scalable AI infrastructure on AWS using Docker, Kubernetes, and CI/CD pipelines.',
      'Automated AI workflows using n8n and event-driven orchestration pipelines.',
    ],
  },
  {
    role: 'AI Engineer',
    company: 'Confiz',
    location: 'Lahore, PK',
    duration: 'Nov 2021 — Mar 2024',
    contributions: [
      'Delivered production AI systems using Next.js, Node.js, Python, and TypeScript.',
      'Built RAG-based conversational systems using LangChain and vector databases.',
      'Integrated OpenAI and Hugging Face APIs for automation and generative AI features.',
      'Improved backend performance by 35% via query optimization and caching.',
      'Designed scalable REST and GraphQL APIs with PostgreSQL and MongoDB.',
      'Deployed cloud-native applications on AWS with CI/CD pipelines and monitoring.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'AcclivousByte',
    location: 'Lahore, PK',
    duration: 'Feb 2021 — Oct 2021',
    contributions: [
      'Built full-stack applications using Python, Node.js, and React.js, improving feature delivery speed and scalability.',
      'Developed and enhanced REST APIs and backend services, increasing system performance and handling higher request loads.',
      'Optimized PostgreSQL queries, reducing response time by 25% and improving data retrieval efficiency.',
      'Integrated third-party APIs and automated data workflows, reducing manual effort and improving processing speed.',
      'Deployed applications on AWS, achieving high availability (99.9%) and reliable production releases.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work">
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>

      <div className="container work__container">
        <div className="work__timeline">
          {experiences.map((exp, idx) => (
            <article
              className="work__item"
              key={idx}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <span className="work__dot" aria-hidden="true">
                <BsBriefcaseFill />
              </span>
              <div className="work__card">
                <div className="work__card-head">
                  <h3>{exp.role}</h3>
                  <span className="work__duration">{exp.duration}</span>
                </div>
                <div className="work__meta">
                  <span className="work__company">{exp.company}</span>
                  <span className="work__location">
                    <FiMapPin /> {exp.location}
                  </span>
                </div>
                <ul className="work__contributions">
                  {exp.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
