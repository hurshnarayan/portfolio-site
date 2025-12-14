import { useEffect, useRef } from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !progressRef.current) return;

      const timeline = timelineRef.current;
      const progress = progressRef.current;
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      
      // Start animation when timeline enters viewport
      const startPoint = windowHeight * 0.2;
      const scrolled = startPoint - timelineTop;
      const percentage = Math.min(Math.max(scrolled / timelineHeight, 0), 1);

      progress.style.height = `${percentage * 100}%`;

      // Animate dots
      const items = timeline.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const dot = item.querySelector('.timeline-dot');
        
        if (itemTop < windowHeight * 0.5 && dot) {
          dot.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      date: 'Dec 2024 - Present',
      title: 'Biometric Attendance System',
      description: 'A comprehensive attendance management system featuring real-time QR code rotation and device binding for security.',
      bullets: [
        'React.js frontend with modern glassmorphism UI design',
        'Golang backend API with PostgreSQL database',
        'WebSocket for real-time updates and notifications',
        'QR code rotation for enhanced security',
        'Device binding & anti-proxy measures',
        'Export functionality for educational institutions'
      ],
      tech: ['React.js', 'Golang', 'PostgreSQL', 'WebSocket'],
      link: 'https://github.com/harshnarayan',
    },
    {
      date: 'Dec 2024',
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio built with React and Vite featuring smooth animations and clean design.',
      bullets: [
        'Built with React.js and Vite for optimal performance',
        'Component-based architecture for maintainability',
        'Fully responsive design across all devices',
        'Custom CSS animations and transitions',
        'Clean, minimal aesthetic inspired by modern design'
      ],
      tech: ['React.js', 'Vite', 'CSS3', 'JavaScript'],
      link: 'https://harshnarayan.dev',
    }
  ];

  return (
    <div className="projects-page-timeline">
      <div className="timeline-container">
        <div className="timeline-header">
          <h1>Changelog from my journey</h1>
          <p>I've been building projects and learning new technologies. Here's a timeline of my work.</p>
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-progress" ref={progressRef}></div>
          
          {projects.map((project, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-date">{project.date}</div>
                <h2 className="timeline-title">
                  {project.title}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                      →
                    </a>
                  )}
                </h2>
                <p className="timeline-description">{project.description}</p>
                
                <ul className="timeline-bullets">
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="timeline-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
