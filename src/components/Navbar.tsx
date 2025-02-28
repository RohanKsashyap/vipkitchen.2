import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Modular Kitchens', path: '/modular-kitchens' },
    { name: '2D & 3D Design', path: '/design' },
    { name: 'Interior Designing', path: '/interior-designing' },
    { name: 'Home Automation', path: '/home-automation' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <ChefHat className={`mr-2 transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-amber-600' : 'text-white'}`} size={32} />
            <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-amber-800' : 'text-white'}`}>VIP Kitchen</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  scrolled || location.pathname !== '/' 
                    ? 'text-gray-700 hover:text-amber-600' 
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <a 
              href="tel:+15551234567" 
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled || location.pathname !== '/' 
                  ? 'bg-amber-600 text-white hover:bg-amber-700' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className={`transition-colors duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2 border-b border-gray-100"
                  >
                    {link.name}
                  </Link>
                ))}
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center justify-center gap-2 bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300 mt-4"
                >
                  <Phone size={18} />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;