
import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiX,
  FiExternalLink,
  FiGithub,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";

import { projects } from "../data/projects";
import { skills} from "../data/skills";
import { contact } from "../data/contact";


import myPhoto2 from "../assets/my_photo2.jpeg";
import universityLogo from "../assets/logo_upi.png";

function MainContent() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <main className="main-content">
      {/* Hero Section */}
      <section id="home" className="content-panel hero-panel">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Muhammad Iqbal Fadhilah.
          <br />
          <span>Web Developer.</span>
        </h1>

        <p className="hero-description">
          Computer Science graduate with a strong interest in Web Development, focused on building responsive, 
          user-friendly web applications and delivering practical solutions through technology.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            Explore My Work
            <FiArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-button">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-panel about-panel">
        <div className="about-content">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ABOUT ME</p>
              <h2>Get to Know Me</h2>
            </div>
          </div>

          <div className="about-text">
            <p>
              I am a Computer Science graduate from Universitas Pendidikan
              Indonesia with a strong interest in Software Engineering,
              particularly Web Development. I have a foundation in end-to-end
              web application development, RESTful API design, and database
              management. Through various academic and personal projects,
              I have gained experience working with Laravel, React.js, CSS,
              Node.js, Express.js, MySQL, and MongoDB. With strong analytical
              thinking, attention to detail, and a structured approach to
              problem-solving, I am eager to contribute my skills while
              continuing to grow in a professional environment.
            </p>
          </div>
        </div>

        <div className="about-image-wrapper">
          <img
            src={myPhoto2}
            alt="Muhammad Iqbal Fadhilah"
            className="about-image"
          />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EDUCATION</p>
            <h2>Academic Background</h2>
          </div>
        </div>

        <div className="education-list">
          <div className="education-card">
            <div className="edu-logo-wrapper">
              <img
                src={universityLogo}
                alt="Universitas Pendidikan Indonesia Logo"
                className="edu-logo"
              />
            </div>

            <div className="edu-info">
              <span className="edu-date">2022 – 2026</span>
              <h3>Bachelor of Computer Science</h3>
              <h4>Universitas Pendidikan Indonesia</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Experience & Training</h2>
          </div>
        </div>

        <div className="experience-list">
          <div className="experience-card">
            <div className="exp-icon">
              <FiBriefcase size={20} />
            </div>

            <div className="exp-info">
              <span className="exp-date">
                September 2024 – January 2025
              </span>

              <h3>Teaching Assistant – Computer Networks</h3>
              <h4>Universitas Pendidikan Indonesia</h4>

              <p>
                Assisted weekly laboratory sessions for Operating Systems
                and Computer Networks courses. Guided students through
                IP addressing, subnetting, and network topology simulations
                using Cisco Packet Tracer, supported MikroTik configuration
                exercises, helped troubleshoot technical issues, and
                evaluated laboratory assignments.
              </p>
            </div>
          </div>

          <div className="experience-card">
            <div className="exp-icon">
              <FiAward size={20} />
            </div>

            <div className="exp-info">
              <span className="exp-date">
                February 2025 – July 2025
              </span>

              <h3>
                Front-End & Back-End Developer Trainee
              </h3>

              <h4>Coding Camp powered by DBS Foundation – Dicoding</h4>

              <p>
                Participated in an intensive technology training program
                organized through a collaboration between DBS Foundation
                and Dicoding Indonesia. The program provided learning
                experiences in end-to-end web development, covering
                user interface development, server-side logic, RESTful API
                integration, and database management. It also strengthened
                my soft skills, professional English communication, and
                financial literacy.
              </p>

              <a
                href="https://drive.google.com/file/d/1h7ZjKqY6ExBzIjWHG4FsrozURSzyx_zc/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-link"
                style={{ marginTop: "10px" }}
              >
                View Certificate <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SKILLS</p>
            <h2>Tech Stack & Skills</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = group.icon;

            return (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-header">
                  <div className="exp-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MY RECENT WORK</p>
            <h2>Featured Projects</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <button
              type="button"
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
              aria-label={`View details for ${project.name}`}
            >
              <div className="project-thumbnail-wrapper">
                <img
                  src={project.thumbnail}
                  alt={`${project.name} preview`}
                  className="project-thumbnail"
                />
              </div>

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <span className="project-link">
                  View Project Details
                  <FiArrowUpRight size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section id="contact" className="content-panel contact-panel">
        <div className="contact-intro">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's Collaborate</h2>
          <p className="contact-description">
            I'm currently open to internship opportunities, job opportunities,
            and collaborative projects in web development. Feel free to reach out.
            I'd be happy to hear from you!
          </p>
          <a
            href="mailto:iqbalfadhilah684@gmail.com"
            className="contact-button"
          >
            Send Me an Email
            <FiArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-list">
          {contact.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="contact-icon">
                  <Icon size={20} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
                {item.href && (
                  <FiArrowUpRight size={18} className="contact-arrow" />
                )}
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-item"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="contact-item contact-item-static">
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Muhammad Iqbal Fadhilah. All rights reserved.</p>
        <p>Built with React & crafted with care.</p>
      </footer>
      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <div className="modal-header">
              <p className="eyebrow">PROJECT DETAILS</p>

              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                autoFocus
              >
                <FiX size={21} />
              </button>
            </div>

            <img
              src={selectedProject.detail}
              alt={`${selectedProject.name} project screenshot`}
              className="modal-thumbnail"
            />

            <p className="project-category modal-category">
              {selectedProject.category}
            </p>

            <h2 id="modal-project-title">
              {selectedProject.name}
            </h2>

            <p className="modal-subtitle">
              {selectedProject.subtitle}
            </p>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-section">
              <h3>Background</h3>
              <p>{selectedProject.problem}</p>
            </div>

            <div className="modal-section">
              <h3>Solution</h3>
              <p>{selectedProject.solution}</p>
            </div>

            <div className="modal-section">
              <h3>My Contribution</h3>
              <p>{selectedProject.contribution}</p>
            </div>

            <div className="modal-section">
              <h3>Technologies Used</h3>

              <div className="project-tags modal-tags">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            {(selectedProject.demoUrl ||
              selectedProject.githubUrl) && (
              <div className="modal-actions">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    Live Demo <FiExternalLink size={16} />
                  </a>
                )}

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    <FiGithub size={17} />
                    Source Code <FiArrowUpRight size={15} />
                  </a>
                )}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

export default MainContent;