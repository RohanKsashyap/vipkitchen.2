import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
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
       
  <div className="container ml-0 px-4">

    <div className="flex justify-between items-center ">
      
    <Link to="/">
          <img 
            alt="Vip Kitchen"
            src="https://ik.imagekit.io/rohanKashyap/logo.jpg?updatedAt=1740838077627"
            width={80}
            height={80}
            className="rounded-lg shadow-md  "
            
          />
        </Link>

      {/* Title */}
      <span className={`text-xl font-bold transition-colors duration-300 ml-10 ${scrolled || location.pathname !== '/' ? 'text-amber-800' : 'text-white'}`}>
        VIP Kitchen & Interiors
      </span>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-6 ">  
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className={`relative text-sm font-bold transition-colors duration-300 group ${
              scrolled || location.pathname !== '/' 
                ? 'text-gray-700 hover:text-amber-600 hover:scale-125 transition-transform duration-300 ' 
                : 'text-white hover:text-amber-300'
            }`}
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        
        <a 
          href="tel:+917009350717" 
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
      <div className="lg:hidden ml-auto">
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
              href="tel:+917009350717" 
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