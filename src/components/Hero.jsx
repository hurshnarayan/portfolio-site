import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Actual code snippets floating with animations */}
        <div className="code-snippets">
          <span className="code-snippet snippet-1">const App = () =&gt;</span>
          <span className="code-snippet snippet-2">func main() &#123;</span>
          <span className="code-snippet snippet-3">
            import React from 'react'
          </span>
          <span className="code-snippet snippet-4">SELECT * FROM users</span>
          <span className="code-snippet snippet-5">background: #fff;</span>
          <span className="code-snippet snippet-6">router.GET("/api")</span>
          <span className="code-snippet snippet-7">useState([])</span>
          <span className="code-snippet snippet-8">defer db.Close()</span>
          <span className="code-snippet snippet-9">
            &lt;div className="hero"&gt;
          </span>
          <span className="code-snippet snippet-10">
            return &#123; data &#125;
          </span>{" "}
          */
        </div>

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
            React.js • Golang • PostgreSQL • HTML/CSS • JavaScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
