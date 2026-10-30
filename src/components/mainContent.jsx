import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiX,
  FiExternalLink,
  FiGithub,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import { projects } from "../data/projects";
import myPhoto2 from "../assets/my_Photo2.jpeg";
import universityLogo from "../assets/logo_upi.png";

const skillGroups = [
  {
    title: "Front-End",
    icon: FiMonitor,
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Back-End",
    icon: FiServer,
    skills: ["Laravel", "Node.js", "Express.js", "RESTful API"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Networking",
    icon: FiTool,
    skills: ["Git & GitHub", "Postman", "Cisco Packet Tracer", "Mikrotik"],
  },
];

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
      <section id="home" className="content-panel hero-panel">
        <p className="eyebrow">HELLO, I'M</p>
        <h1>
          Muhammad Iqbal Fadhilah.
          <br />
          <span>Web Developer.</span>
        </h1>
        <p className="hero-description">
          Informatics student passionate about building
          responsive, user-friendly web applications.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            Explore My Work
            <FiArrowUpRight size={18} />
          </a>
          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </section>
      <section id="about" className="content-panel about-panel">
        {/* Kolom kiri: heading + teks */}
        <div className="about-content">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TENTANG SAYA</p>
              <h2>Kenalan Lebih Dekat</h2>
            </div>
          </div>

          <div className="about-text">
            <p>
              Saya adalah seorang fresh graduate S1 Ilmu Komputer Universitas Pendidikan Indonesia
              yang memiliki ketertarikan di bidang Software Engineering, khususnya Web Development.
              Saya memiliki pemahaman dalam pengembangan aplikasi web end-to-end, perancangan RESTful API, serta
              pengelolaan basis data. Dalam berbagai proyek akademik maupun mandiri,
              saya terbiasa menggunakan Laravel, React.js, CSS, Node.js, Express.js, serta basis data MySQL dan MongoDB.
              Didukung oleh kemampuan analitis, ketelitian, dan pemecahan masalah yang
              terstruktur, saya siap berkontribusi aktif dan mengasah pengalaman teknis di lingkungan kerja profesional.
            </p>
          </div>
        </div>

        {/* Kolom kanan: foto full tinggi */}
        <div className="about-image-wrapper">
          <img
            src={myPhoto2}
            alt="Muhammad Iqbal Fadhilah"
            className="about-image"
          />
        </div>
      </section>
      <section id="education" className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PENDIDIKAN</p>
            <h2>Latar Belakang Akademik</h2>
          </div>
        </div>
        <div className="education-list">
          <div className="education-card">
            <div className="edu-logo-wrapper">
              <img 
                src={universityLogo}
                alt="Logo Universitas" 
                className="edu-logo" 
              />
            </div>
            
            <div className="edu-info">
              <span className="edu-date">2022 - 2026</span>
              <h3>S1 Ilmu Komputer</h3>
              <h4>Universitas Pendidikan Indonesia  </h4>
              
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PENGALAMAN</p>
            <h2>Pengalaman & Pelatihan</h2>
          </div>
        </div>
        <div className="experience-list">
          <div className="experience-card">
            <div className="exp-icon">
              <FiBriefcase size={20} /> 
            </div>
            <div className="exp-info">
              <span className="exp-date">Sept 2024 - Januari 2025</span>
              <h3>Asisten Praktikum - Jaringan Komputer</h3>
              <h4>Universitas Pendidikan Indonesia</h4>
              <p>
                Memfasilitasi sesi praktikum mingguan mata kuliah Sistem Operasi dan Jaringan Komputer. 
                Bertanggung jawab membimbing mahasiswa dalam simulasi pengalamatan IP, subnetting, dan topologi jaringan 
                menggunakan Cisco Packet Tracer, mendampingi praktik konfigurasi Mikrotik, serta 
                membantu troubleshooting kendala teknis dan mengevaluasi tugas praktikum
              </p>
            </div>
          </div>
          <div className="experience-card">
            <div className="exp-icon">
              <FiAward size={20} /> 
            </div>
            <div className="exp-info">
              <span className="exp-date">Feb 2025 - Juli 2025</span>
              <h3>Coding Camp powered by DBS Foundation - Front-End and Back-End Developer</h3>
              <h4>Dicoding x DBS Foundation</h4>
              <p>
                Program pelatihan IT intensif yang diselenggarakan atas kolaborasi DBS Foundation dan Dicoding Indonesia untuk menyiapkan peserta masuk 
                ke dunia kerja profesional. Melalui pelatihan ini, saya mempelajari pengembangan web secara end-to-end untuk 
                spesialisasi Front-End dan Back-End, mulai dari perancangan antarmuka, pembuatan logika server, 
                integrasi RESTful API, hingga pengelolaan basis data. Selain keterampilan teknis, program ini 
                juga memperkuat soft skills, kemampuan bahasa Inggris profesional, dan literasi keuangan.
              </p>
              <a href="https://drive.google.com/file/d/1h7ZjKqY6ExBzIjWHG4FsrozURSzyx_zc/view?usp=sharing" target="_blank" className="text-link" style={{marginTop: '10px'}}>
                Lihat Sertifikat <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="content-panel">
  <div className="section-heading">
    <div>
      <p className="eyebrow">KEAHLIAN</p>
      <h2>Skills & Teknologi</h2>
    </div>
  </div>

  <div className="skills-grid">
    {skillGroups.map((group) => {
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
              aria-label={`Lihat detail proyek ${project.name}`}
            >
             <div className="project-thumbnail-wrapper">
                <img
                  src={project.thumbnail}
                  alt={`Preview ${project.name}`}
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
                  View project details
                  <FiArrowUpRight size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
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
                aria-label="Tutup detail proyek"
                autoFocus
              >
                <FiX size={21} />
              </button>
            </div>
            <img
              src={selectedProject.detail} // <--- Menjadi ini
              alt={`Preview ${selectedProject.name}`}
              className="modal-thumbnail" // <--- Gunakan class khusus untuk modal
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
              <h3>Latar Belakang</h3>
              <p>{selectedProject.problem}</p>
            </div>

            <div className="modal-section">
              <h3>Solusi</h3>
              <p>{selectedProject.solution}</p>
            </div>

            <div className="modal-section">
              <h3>Kontribusi Saya</h3>
              <p>{selectedProject.contribution}</p>
            </div>

            <div className="modal-section">
              <h3>Technologies</h3>

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
