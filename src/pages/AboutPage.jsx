import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="id-card">
          <div className="id-card-border">
            <div className="id-photo-placeholder">
              <span className="photo-emoji">👨‍💻</span>
            </div>
            <div className="id-info">
              <h2 className="id-name">Harsh Narayan</h2>
              <p className="id-label">DATE OF BIRTH</p>
              <p className="id-value">Developer Since 2024</p>
              <p className="id-label">LOCATION</p>
              <p className="id-value">Bengaluru, India</p>
              <p className="id-label">ROLE</p>
              <p className="id-value">Full-Stack Developer</p>
            </div>
          </div>
        </div>

        <div className="about-hello">
          <h1 className="hello-text">
            <span className="letter-big h">H</span>
            <span className="letter-big e">e</span>
            <span className="letter-big l">L</span>
            <span className="letter-big l2">L</span>
            <span className="letter-big o">o</span>
            <span className="letter-big exclaim">!</span>
            <span className="wave-hand">👋</span>
          </h1>

          <div className="about-story">
            <p>
              I'm Harsh, a first-year B.Tech Computer Science student at BMS
              Institute of Technology and Management in Bengaluru. I'm
              passionate about building innovative web applications that solve
              real-world problems.
            </p>

            <p>
              From creating my first "Hello World" to building a full-fledged
              Biometric Attendance System with React, Golang, and PostgreSQL,
              I've always enjoyed the challenge of turning ideas into
              functional, beautiful applications.
            </p>

            <p>
              I discovered full-stack development and found it to be an
              incredibly transformative avenue through which I could connect my
              creative interests with problem-solving and innovative
              solution-making. By being intentional in the way I code, I aim to
              create applications that are efficient, scalable, and enjoyable to
              use.
            </p>
          </div>
        </div>
      </div>

      {/* Using the same clean list layout from home page */}
      <div className="about-details-section">
        <div className="about-details-container">
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
                    Student Developer @
                    <span className="highlight">BMSIT&M</span>
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
                    B.Tech - Computer Scince & Engineering @{" "}
                    <span className="highlight">
                      BMS Institute of Technology & Management
                    </span>
                  </p>
                  <p className="item-subtitle">Bengaluru, Karnataka</p>
                  <p className="item-date">August 2025 - May 2029</p>
                </div>
                <div className="list-item">
                  <p className="item-title">
                    Secondary Education @{" "}
                    <span className="highlight">Delhi Public School</span>
                  </p>
                  <p className="item-subtitle">Dhanbad</p>
                  <p className="item-date">Completed 2023</p>
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
                    JavaScript
                    <br />
                    HTML/CSS
                    <br />
                    Git/GitHub
                    {/* <br />
                    Vite */}
                    {/* <br />
                    VS Code */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
