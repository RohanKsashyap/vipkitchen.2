import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2,ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const Interior = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  ;
  
  const images = [
    {
      id: "l-shaped",
      title: "L-Shaped Kitchens",
      description: "Perfect for medium to large spaces, offering ample counter space and storage.",
      image: "https://ik.imagekit.io/rohanKashyap/57661dc80bebda3dfe946c070ee8ed13.jpg?updatedAt=1741065790182"
    },
    {
      id: "u-shaped",
      title: "U-Shaped Kitchens",
      description: "Ideal for larger spaces, providing maximum storage and work surface area.",
      image: "https://ik.imagekit.io/rohanKashyap/d2947784ccc93154573a4ea919dbc366.jpg?updatedAt=1741065838241"
    },
    {
      id: "parallel",
      title: "Parallel Kitchens",
      description: "Perfect for narrow spaces, with efficient workflow between opposite counters.",
      image: "https://ik.imagekit.io/rohanKashyap/30830ce2ea8c5669334a9387e9402f22.jpg?updatedAt=1741065956411"
    },
    {
      id: "island",
      title: "Island Kitchens",
      description: "Featuring a central island for additional workspace and social interaction.",
      image: "https://ik.imagekit.io/rohanKashyap/254f9def7fa3b2ae792f105363cd3458.jpg?updatedAt=1741066049530"
    }
  ];


  const Design = [
    {
      title: "Interior Design",
      description: "Room Interior Design with 2D & 3D Planning"
    },
    {
      title: "Interior Vastu",
      description: "Interior Vastu According To Direction & Requirements."
    },
    {
      title: "Window & Doors ",
      description: "Window & Doors (Manufacturing & Installation)."
    },
    {
      title: "Renovation",
      description: "Renovate Your Old Home To Modern Home With Vastu)"
    }
  ];


  return (
    <div className="bg-white text-gray-900 p-6 md:p-12">
     
       {/* Hero Section */}
       <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection direction="left" className="lg:w-1/2">
              <span className="text-amber-600 font-semibold mb-4 block "> 
                
                Design Your Interior
                
                
                </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <motion.h1

      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6  "     
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}>
      Interior Design

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
                  src="https://ik.imagekit.io/rohanKashyap/0e41feecda496658d5701500226acf8c.jpg?updatedAt=1741066498635" 
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
      <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">Interior Design</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Your Interior With Vastu</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
                We offer a variety of interior designs to suit different spaces and preferences.
              </p>
            </div>
          </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((type, index) => (
              <AnimatedSection key={type.id} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    {/* <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3> */}
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <Link 
                      to={`/contact`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
      
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            src={selectedImage} 
            alt="Selected Interior"
            className="max-w-full max-h-full rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
      
      <div className="mt-12 text-center">
        <motion.a 
          href="/contact" 
          className="px-6 py-3 bg-amber-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-salmon-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          Get a Free Consultation
        </motion.a>
      </div>
    </div>
  );
};

export default Interior;
