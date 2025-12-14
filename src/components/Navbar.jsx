import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          h/.
        </Link>
        <div className="nav-links">
          <Link to="/">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <a
            href="https://drive.google.com/file/d/1WQHQdHWwEaf7I99IFW0q_h2lTnM1BlGh/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
