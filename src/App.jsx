import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="blog">
        <Blog />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
