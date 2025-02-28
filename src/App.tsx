import  { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ModularKitchensPage from './pages/ModularKitchensPage';
import HomeAutomationPage from './pages/HomeAutomationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modular-kitchens" element={<ModularKitchensPage />} />
          <Route path="/home-automation" element={<HomeAutomationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;