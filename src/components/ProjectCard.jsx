import './ProjectCard.css';

const ProjectCard = ({ title, description, image, bgColor, link }) => {
  return (
    <a 
      href={link || '#'} 
      className="project-card"
      style={{ backgroundColor: bgColor }}
      target={link ? '_blank' : '_self'}
      rel={link ? 'noopener noreferrer' : ''}
    >
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-placeholder">
            <span className="project-icon">🚀</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
