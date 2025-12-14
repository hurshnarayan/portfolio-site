import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
