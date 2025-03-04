import { Link } from 'react-router-dom';
import {  Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Top Section with Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-800">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Kitchen & Interiors?</h2>
            <p className="text-lg mb-8 text-gray-400 max-w-lg">
              Get in touch with us s for a free consultation and bring your dream design to life.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                    placeholder="Enter your number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 flex items-center gap-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <div className="flex items-center mb-6">
              <img 
            alt="Vip Kitchen"
                src="https://ik.imagekit.io/rohanKashyap/logo.jpg?updatedAt=1740838077627"
                width={70}
                height={80}
                className="rounded-lg shadow-md "
            
            
            />
                <span className="text-2xl font-bold text-white">VIP Kitchen & Interiors</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Transforming Spaces With  Modular Kitchens, Interior Designs, and Smart Home Automation Solutions Since 2008.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-amber-500" />
                    Visit Our Showroom
                  </h3>
                  <address className="not-italic text-gray-400">
                  Nawanshahr Road,<br />
                  Near Petrol Pump<br />
                  Garhshankar,144527,District-Hoshiarpur,Punjab-India
                  </address>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-amber-500" />
                    Opening Hours
                  </h3>
                  <ul className="text-gray-400 space-y-1">
                    <li> Monday - Sunday:9am-8pm</li>
                   
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-4">
                <a href="tel:+15551234567" className="text-white hover:text-amber-500 transition duration-300 flex items-center gap-3">
                  <Phone size={19} />
                  <span>+91 70093-50717 </span>
                </a>
                <a href="mailto:info@vipkitchen.com" className="text-white hover:text-amber-500 transition duration-300 flex items-center gap-2">
                  <Mail size={18} />
                  <span>info@vipkitchen.in</span>
                </a>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full text-white hover:bg-amber-600 transition duration-300">
                  <a href="https://www.instagram.com/vipkitchen65/">
                  <Instagram size={20} />
                  </a>
                  
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full text-white hover:bg-amber-600 transition duration-300">
                  <a href="https://www.facebook.com/people/VIP-Kitchen/100082641335949/">
                  <Facebook size={20} />

                  </a>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full text-white hover:bg-amber-600 transition duration-300">
                <a href="https://wa.me/917009350717?text=Hello%20there!%20I%20found%20you%20on%20your%20website
">
                <MessageCircle size={20}  />

                    
                    </a>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Modular Kitchens</h3>
            <ul className="space-y-3">
              <li><Link to="/modular-kitchens" className="hover:text-amber-500 transition duration-300">Kitchen Manufacturing</Link></li>
              <li><Link to="/modular-kitchens" className="hover:text-amber-500 transition duration-300">Lifetime Warranty</Link></li>
              <li><Link to="/modular-kitchens" className="hover:text-amber-500 transition duration-300">Granite & Tiles</Link></li>
              <li><Link to="/modular-kitchens" className="hover:text-amber-500 transition duration-300">Sink & Hob Installation</Link></li>
              <li><Link to="/modular-kitchens" className="hover:text-amber-500 transition duration-300">Smart Kitchen Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Interior Design</h3>
            <ul className="space-y-3">
              <li><Link to="/interior-designing" className="hover:text-amber-500 transition duration-300">Room Interior Design</Link></li>
              <li><Link to="/interior-designing" className="hover:text-amber-500 transition duration-300">Vastu Solutions</Link></li>
              <li><Link to="/interior-designing" className="hover:text-amber-500 transition duration-300">Window & Door Manufacturing</Link></li>
              <li><Link to="/interior-designing" className="hover:text-amber-500 transition duration-300">LED Units & Washroom Vanity</Link></li>
              <li><Link to="/interior-designing" className="hover:text-amber-500 transition duration-300">Home Renovation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Home Automation</h3>
            <ul className="space-y-3">
              <li><Link to="/home-automation" className="hover:text-amber-500 transition duration-300">Smart Home Control</Link></li>
              <li><Link to="/home-automation" className="hover:text-amber-500 transition duration-300">Leccy & Genesis Products</Link></li>
              <li><Link to="/home-automation" className="hover:text-amber-500 transition duration-300">Smart Lighting</Link></li>
              <li><Link to="/home-automation" className="hover:text-amber-500 transition duration-300">Smart Appliance Control</Link></li>
              <li><Link to="/home-automation" className="hover:text-amber-500 transition duration-300">Security Systems</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/projects" className="hover:text-amber-500 transition duration-300">Our Projects</Link></li>
              <li><Link to="/design" className="hover:text-amber-500 transition duration-300">2D & 3D Design</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition duration-300">Contact</Link></li>
              <li><a href="#" className="hover:text-amber-500 transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2019-{new Date().getFullYear()} VIP Kitchen & Interiors. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition duration-300">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;