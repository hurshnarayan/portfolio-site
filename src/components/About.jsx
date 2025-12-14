import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-columns">
          {/* Experiences Column */}
          <div className="about-col">
            <div className="col-header">
              <span className="icon">🏆</span>
              <h2>Experiences</h2>
            </div>
            <div className="col-content">
              <div className="list-item">
                <p className="item-title">
                  Full-Stack Developer @
                  <span className="highlight">Personal Projects</span>
                </p>
                <p className="item-date">2024 - Present</p>
              </div>
              <div className="list-item">
                <p className="item-title">
                  Student Developer @ <span className="highlight">BMSIT&M</span>
                </p>
                <p className="item-date">August 2025 - Present</p>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="about-col">
            <div className="col-header">
              <span className="icon">📚</span>
              <h2>Education</h2>
            </div>
            <div className="col-content">
              <div className="list-item">
                <p className="item-title">
                  BE, Computer Science & Engineering @{" "}
                  <span className="highlight">BMSIT&M</span>
                </p>
                <p className="item-subtitle">Bengaluru, Karnataka</p>
                <p className="item-date">2025 - 2029</p>
              </div>
            </div>
          </div>

          {/* Toolkit Column */}
          <div className="about-col">
            <div className="col-header">
              <span className="icon">🛠️</span>
              <h2>Toolkit</h2>
            </div>
            <div className="col-content">
              <div className="toolkit-group">
                <h4 className="toolkit-heading">Skills</h4>
                <p className="toolkit-items">
                  Frontend Development
                  <br />
                  Backend Development
                  <br />
                  Database Design
                  <br />
                  UI/UX Implementation
                  <br />
                  WebSocket Communication
                  <br />
                  API Development
                </p>
              </div>
              <div className="toolkit-group">
                <h4 className="toolkit-heading">Tools</h4>
                <p className="toolkit-items">
                  React.js
                  <br />
                  Golang
                  <br />
                  PostgreSQL
                  <br />
                  HTML/CSS
                  <br />
                  JavaScript
                  <br />
                  Git/GitHub
                  <br />
                  Vite
                  <br />
                  VS Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
