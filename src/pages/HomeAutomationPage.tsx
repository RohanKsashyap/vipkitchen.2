import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Smartphone, Lightbulb, Lock, Thermometer, Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const automationFeatures = [
  {
    icon: <Lightbulb size={24} />,
    title: "Smart Lighting",
    description: "Control your lights from anywhere, set schedules, and create scenes for different moods and occasions."
  },
  {
    icon: <Lock size={24} />,
    title: "Smart Locks",
    description: "Secure your home with keyless entry, remote access control, and activity monitoring."
  },
  {
    icon: <Thermometer size={24} />,
    title: "Climate Control",
    description: "Manage your home's temperature remotely, set schedules, and optimize energy usage."
  },
  
  {
    icon: <Shield size={24} />,
    title: "Security Systems",
    description: "Monitor your home with smart cameras, motion sensors, and real-time alerts."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Centralized Control",
    description: "Manage all your smart devices from a single app or control panel."
  }
];

const HomeAutomationPage = () => {
  const [activeTab, setActiveTab] = useState('lighting');
  
  const tabContent = {
    lighting: {
      title: "Smart Lighting Solutions",
      description: "Transform your home with intelligent lighting that responds to your lifestyle. Control brightness, color, and scheduling from your smartphone or voice commands.",
      features: [
        "Remote control via smartphone app",
        "Voice control with popular assistants",
        "Automated schedules and scenes",
        "Motion-activated lighting",
        "Energy usage monitoring",
        "Integration with other smart devices"
      ],
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    security: {
      title: "Smart Security Systems",
      description: "Keep your home safe with advanced security features that provide peace of mind whether you're home or away. Monitor and control your security system remotely.",
      features: [
        "HD security cameras with night vision",
        "Smart door locks with keyless entry",
        "Motion and entry sensors",
        "Real-time alerts and notifications",
        "Remote monitoring and control",
        "Video doorbell with two-way audio"
      ],
      image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    climate: {
      title: "Climate Control Systems",
      description: "Optimize your home's comfort and energy efficiency with smart climate control. Adjust temperature settings remotely and create personalized comfort schedules.",
      features: [
        "Smart thermostats with learning capabilities",
        "Zone-based temperature control",
        "Energy usage analytics and optimization",
        "Automated scheduling based on occupancy",
        "Integration with weather forecasts",
        "Remote control via smartphone"
      ],
      image: "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    entertainment: {
      title: "Entertainment Systems",
      description: "Elevate your entertainment experience with smart audio and video systems that can be controlled with a touch or voice command. Create the perfect ambiance for any occasion.",
      features: [
        "Multi-room audio systems",
        "Voice-controlled media playback",
        "Automated scene setting for movies or music",
        "Integrated streaming services",
        "Smart TV and speaker control",
        "Synchronized lighting and sound"
      ],
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection direction="left" className="lg:w-1/2">
              <span className="text-amber-400 font-semibold mb-4 block">SMART HOME AUTOMATION</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Control Your Home Anytime, Anywhere
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your home  with smart home automation technology. 
                Advance   security, and efficiency of a fully integrated smart home.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Remote Access", "Energy Efficient", "Voice Control", "Enhanced Security"].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="text-amber-400 mr-2 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 text-center"
                >
                  Get a Free Consultation
                </Link>
                <a 
                  href="#demo-video"
                  className="border border-amber-400 text-amber-400 py-3 px-8 rounded-md hover:bg-amber-400/10 transition duration-300 text-center"
                >
                  Watch Demo Video
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="lg:w-1/2">
              <div className="relative">
                <img 
                
                  src="https://ik.imagekit.io/rohanKashyap/gallery-4.jpg?updatedAt=1741001711749" 
                  alt="Smart Home Automation" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-600 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Smartphone size={24} />
                    <div className="text-sm leading-tight">
                      <div>Control from</div>
                      <div>Any Device</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">SMART FEATURES</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Home Automation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Home automation solutions cover every aspect of modern living,
                providing convenience, security, and efficiency.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Interactive Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">EXPLORE SOLUTIONS</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Home Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our range of smart home solutions designed to enhance your lifestyle.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full text-lg transition duration-300 ${
                  activeTab === tab
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2 p-8 lg:p-12"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white py-2 px-6 rounded-md hover:bg-amber-700 transition duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              
              <motion.div 
                key={`img-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2"
              >
                <img 
                  src={tabContent[activeTab as keyof typeof tabContent].image} 
                  alt={tabContent[activeTab as keyof typeof tabContent].title} 
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Video Section */}
      <section id="demo-video" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">SEE IT IN ACTION</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Home Demo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our demo video to see how our smart home automation solutions work in real-life scenarios.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">AUTHORIZED DISTRIBUTOR</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Brand Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are authorized distributors of leading smart home brands, ensuring you get the best products and support.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['LECCY', 'GENESIS'].map((brand, index) => (
              <AnimatedSection key={brand} delay={index * 0.2}>
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-32 w-64">
                  <span className="text-3xl font-bold text-gray-800">{brand}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Home Smarter?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a free consultation with our home automation experts and discover how we can transform your living experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 

                to="/contact"
                className="bg-white text-amber-600 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-medium"
              >
                Book a Free Consultation
              </Link>
              <Link 
                to="/projects"
                className="bg -transparent border-2 border-white text-white py-3 px-8 rounded-md hover:bg-white/10 transition duration-300 text-lg font-medium"
              >
                View Automation Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomeAutomationPage;