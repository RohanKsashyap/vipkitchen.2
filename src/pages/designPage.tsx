import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ThreeDModel from '../components/ThreeDModel';
import { CheckCircle2 ,ArrowRight} from 'lucide-react';
import { useEffect } from 'react';
import {motion} from 'framer-motion'


const twoDImages = [
  "https://ik.imagekit.io/rohanKashyap/0b7dd1bae78c048bf3b69a9362ad1b9d.jpg?updatedAt=1741027379688",
  "https://ik.imagekit.io/rohanKashyap/a3f150568b0bf3dd5a7d16e10fdde453.jpg?updatedAt=1741028554637"
];

const threeDImages = [
  "https://ik.imagekit.io/rohanKashyap/3d1video/ik-video.mp4?updatedAt=1741029100056",
  "https://ik.imagekit.io/rohanKashyap/af350de3b45c174d1583057bbfcc050b.mp4?updatedAt=1741029847385"
];

 const Design = [
  {
    title: "2D & 3D Design",
    description: "Look Your Interior in 2D & 3D"
  },
  {
    title: "Customisation Of  Designs",
    description: "Customised designs to match your space."
  },
  {
    title: "2D & 3D Drawing Befor Booking",
    description: "Get your 2d & 3d drawing before booking !!."
  },
  {
    title: "Budget According to Design",
    description: "Planning of Budget According To Design"
  }
];





const DesignPage = () => {



useEffect(() => {
  const timer = setTimeout(() => {
  }, 3000); // Hides after 3 seconds

  return () => clearTimeout(timer); // Cleanup
}, []);

// if (!visible) return null; // Remove heading after 3 sec

  return (
    <div className="min-h-screen pt-20">

       {/* Hero Section */}
       <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection direction="left" className="lg:w-1/2">
              <span className="text-amber-600 font-semibold mb-4 block "> 
                
                2D & 3D Design
                
                
                </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <motion.h1

      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6  "     
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}



    >
      2D & 3D Design, Planning & Budget

    </motion.h1>
                
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Customisation according to space & requirements
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {Design.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 text-center"
                >
                  Get a Free Quote
                </Link>
                <Link 
                  to="/projects"
                  className="border border-amber-600 text-amber-600 py-3 px-8 rounded-md hover:bg-amber-50 transition duration-300 text-center"
                >
                  View Kitchen Projects
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://ik.imagekit.io/rohanKashyap/2d-3d%20design?updatedAt=1741026883836" 
                  alt="Premium Modular Kitchen" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-amber-600 font-bold">
                    <span className="text-3xl">100%</span>
                    <div className="text-sm leading-tight">
                      <div>Customer</div>
                      <div>Satisfaction</div>
                    </div>
                  </div>
                  
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-amber-600 font-bold">
                    <span className="text-3xl">∞</span>
                    <div className="text-sm leading-tight">
                      <div>Best</div>
                      <div>Design</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2D Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
              
       
      2D Layout Designs
              
              
              </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {twoDImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <img src={image} alt="2D Kitchen Design" className="rounded-lg shadow-lg w-full h-full object-cover" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Design Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">3D Visualizations</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threeDImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <video src={image} autoPlay preload='none' muted loop className="rounded-lg shadow-lg w-full h-full object-cover" />
              </AnimatedSection>
            ))}
            
          </div>
        </div>
      </section>
      {/* 3D Design Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/*3d model  */}
            <AnimatedSection direction="left" className="lg:w-1/2">


<ThreeDModel modelType="kitchen"  />

            </AnimatedSection>
            
            <AnimatedSection direction="right" className="lg:w-1/2">
              <span className="text-amber-600 font-semibold mb-4 block">3D VISUALIZATION</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                3d Design Before Booking
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our  3D design technology allows you to see your kitchen in detail before construction .
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-amber-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Measurements</h3>
                    <p className="text-gray-600">Precise measurements of your space for accurate planning.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-amber-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom 3D Design</h3>
                    <p className="text-gray-600">Personalized 3D models based on your preferences and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-amber-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Virtual Experience</h3>
                    <p className="text-gray-600">Interactive walkthrough of your future kitchen.</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/design"
                className="inline-flex items-center gap-2 bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300"
              >
                <span>Learn More About 3D Design</span>
                <ArrowRight size={20} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Start Designing Your Dream Kitchen & Interior</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our design experts for a personalized 2D and 3D Design consultation.
            </p>
            <Link to="/contact" className="bg-white text-amber-600 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-medium">
              Get a Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default DesignPage;
