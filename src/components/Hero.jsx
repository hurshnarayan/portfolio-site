import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="greeting-bubble">
          <span>Hi! My name is...</span>
        </div>

        <div className="name-display">
          <span className="letter letter-h">H</span>
          <span className="letter letter-a">a</span>
          <span className="letter letter-r">r</span>
          <span className="letter letter-s">s</span>
          <span className="letter letter-h2">h</span>
          <span className="wave">👋</span>
        </div>

        <div className="hero-description">
          <h2>
            <span className="highlight-orange">Full-Stack Developer</span>{" "}
            building <span className="highlight-blue">innovative</span>,{" "}
            <span className="highlight-green">user-centered</span> applications
            with <span className="highlight-purple">modern technologies</span>.
          </h2>
          <p className="tech-stack">
            Golang • React.js • JavaScript • PostgreSQL • HTML/CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
