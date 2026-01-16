import { useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const titlesRef = useRef([]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      titlesRef.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const triggerLine = window.innerHeight * 0.5;

        const wasAbove = rect.top + lastScrollY < triggerLine + lastScrollY;
        const isAbove = rect.top < triggerLine;

        // crossed the trigger line
        if (wasAbove !== isAbove) {
          el.classList.remove("hit");
          void el.offsetWidth;
          el.classList.add("hit");
        }
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = [
    {
      title: "Biometric Attendance System",
      description:
        "A comprehensive attendance management system with React, Golang, PostgreSQL, and WebSocket real-time communication.",
      bgColor: "#FFE5B4",
      link: "https://github.com/hurshnarayan/attendx-smart-attendance",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio built with React and Vite featuring smooth animations and clean design.",
      bgColor: "#E0F4FF",
      link: "https://harshnarayan.dev",
    },
  ];

  return (
    <section className="projects-section" id="work">
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="project-card-content">
                <h3 ref={(el) => (titlesRef.current[index] = el)}>
                  {project.title}
                </h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
