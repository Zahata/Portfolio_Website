import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => { // used to scroll back to the top on page refresh
    window.history.scrollRestoration = 'manual';
    Aos.init({ 
      duration: 1000,
      mirror: true,
      once: false,
      debounceDelay: 50
    });
  }, []);
  return (
      <div className='App'>
        <NavBar/>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Footer/>
      </div>
  );
}

export default App;
