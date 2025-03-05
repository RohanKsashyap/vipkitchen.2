import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, CheckCircle2, ChefHat, Home, Lightbulb,ShieldCheck,Sparkles } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import AnimatedSection from '../components/AnimatedSection';
import ThreeDModel from '../components/ThreeDModel';
import ProjectCard from '../components/ProjectCard';


// modular kithchen data


 const modularKitchen= [
  {
    title: "Modular Kitchens",
    subtitles: [
      {
        text1: "Kitchen Manufacturing & Installation (Lifetime Warranty)",
        text2: "2D & 3D Interior Designing"
      },
      {
        text: "Including Other Works In Kitchen:",
        nestedItems: [
          "Granite Tiles (Installation)",
          "Sink",
          "Hob & Chimney (Installation)",
          "Undersink Filter",
          "Lightings in Kitchen",
          "Breakfast Counter"
        ]
      }
    ]
  }
  
]

const interiorDesign =[ 

      "Room Interior Design with 2D & 3D Planning",
      "Interior Vastu According To Direction & Requirements",
       "Window & Doors (Manufacturing & Installation)",
      "LED Units, Washroom Vanity, Almirah",
      "Renovation (Old To Modern Home With Vastu)"
  ]

  const homeAutomation= [
    "Control Your Home Anytime - Anywhere",
    "Authorized Distributor of Leccy & Genesis USA Products",
    "Full Control of Appliances from Anywhere in the World",
    "Smart & Secure Home Automation",
    "Control And Manage Lights, Fans, Switches, Curtains, AC, Geyser, Washing Machines & More Remotely",
]

const _2d_3d= [

  "2D & 3D Design, Planning & Budget",
            "2D & 3D Drawing Before Booking",
            "Budget According to Drawings",
            "Customisation According to Space & Requirements"
]

const guarantee=[
{
  title: "Guarantee & Warranty and After Service",
  subtitles: [{

      text1:"Termite (ਸਿਉਂਕ) & Borer Proof (Lifetime Warranty)",
      text2:"5 Year Warranty on Accessories"},
      {
          text: "Having Dealership Of:",
          nestedItems: [
              "EBCO (Kitchen Accessories)",
              "ELICA (Hob & Chimney)",
              "LECCY & GENESIS (Smart Door Lock & Switches)",
          ]
      }
  ]
}

]




//featured projects

const featuredProjects = [
  {
    id: 'modern-kitchen-makeover',
    title: 'Modular Kitchen Makeover',
    category: 'Modular Kitchen',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Complete transformation of an outdated kitchen into a modern modular kitchen.'
  },
  {
    id: 'luxury-apartment-interior',
    title: 'Room Interior Design',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: ' Interior design according to requirement with custom furniture  finishes.'
  },
  {
    id: 'smart-home-integration',
    title: 'Complete Smart Home Automation',
    category: 'Home Automation',
    image: 'https://ik.imagekit.io/rohanKashyap/homeautomation-home-vipkitchen.JPG?updatedAt=1740842381750',
    description: 'Comprehensive home automation system with integrated lighting, security, and appliance control.'
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Solutions for Your Home</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to completion, we deliver exceptional craftsmanship and innovative designs
                that transform your living spaces.
              </p>
            </div>
          </AnimatedSection>

          {/* modular kitchens */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <ChefHat className="text-amber-600" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modular Kitchens</h3>
                <p className="text-gray-600 mb-6">
                  Premium modular kitchens with lifetime warranty, custom designs, and high-quality materials.
                </p>




                <ul className="space-y-3 mb-8">
        {modularKitchen.map((item, index) => (

            <li key={index} className="mb-4">
            
             {/* Subtitles */}
            <ul className="ml-6 mt-2 space-y-1">
              {item.subtitles.map((e, eindex) => (
                <React.Fragment key={eindex}>
                  {/* If object contains text1 & text2 */}
                  {"text1" in e && "text2" in e ? (
                    <>
                      <li className="flex items-start">
              <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />

                        <span>{e.text1}</span>
                      </li>
                      <li className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />

                        <span>{e.text2}</span>
                      </li>
                    </>
                  ) : (
                    // If object contains text & nestedItems
                    <li className="mt-2">
                      <span className="font-bold">{e.text}</span>
                      <ul className="ml-6 mt-1 space-y-1">
                        {e.nestedItems.map((nestedItem, nestedIndex) => (
                          <li key={nestedIndex} className="flex items-start">
                                          <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />

                            <span>{nestedItem}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </li>
        ))}
      </ul>

                <Link 
                  to="/modular-kitchens"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300"
                >

          
                  <span>Explore Modular Kitchens</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimatedSection>
            

                    {/* interior designing */}


            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Home className="text-amber-600" size={32} />
                </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interior Designing</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive interior design solutions with 2D & 3D planning and Vastu-based designs.
                </p>


                  <ul className="space-y-3 mb-8">
        {interiorDesign.map((item, index) => (

            <li key={index} className="mb-4">
            
              <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span>{item}</span>

                      </li>
        ))}
                </ul>
         
              

                <Link 
                  to="/interior-designing"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300"
                >
                  <span>Explore Interior Design</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimatedSection>

            {/* home automation */}
            
            <AnimatedSection delay={0.3} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="text-amber-600" size={32} />
                </div>

               <h3 className="text-2xl font-bold text-gray-900 mb-4">Home Automation</h3>
                <p className="text-gray-600 mb-6 capitalize">
                  home automation solutions for a smarter, more convenient living experience.
                </p>

                <ul className="space-y-3 mb-8">
        {homeAutomation.map((item, index) => (

            <li key={index} className="mb-4">
            
              <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span>{item}</span>

                      </li>
        ))}
                </ul>



                <Link 
                  to="/home-automation"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300"
                >
                  <span>Explore Home Automation</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimatedSection>

           {/* 2d & 3d design */}


<AnimatedSection delay={0.3} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="text-amber-600" size={32} />
                </div>

               <h3 className="text-2xl font-bold text-gray-900 mb-4">2D & 3D Design</h3>
                <p className="text-gray-600 mb-6 capitalize">
                Customisation According to Space & Requirements
                </p>
                <ul className="space-y-3 mb-8">
        {_2d_3d.map((item, index) => (

            <li key={index} className="mb-4">
            
              <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span>{item}</span>

                      </li>
        ))}
                </ul>
                <Link 
                  to="/home-automation"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300"
                >
                  <span>Explore Home Automation</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimatedSection>



            {/* guaranntee */}


            <AnimatedSection delay={0.3} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="text-amber-600" size={32} />
                </div>

               <h3 className="text-2xl font-bold text-gray-900 mb-4">Guarantee & Warranty and After Service</h3>
                <p className="text-gray-600 mb-6 capitalize">
                 Lifetime Warranty and after service
                </p>
                <ul className="space-y-3 mb-8">
        {guarantee.map((item, index) => (

            <li key={index} className="mb-4">
            
             {/* Subtitles */}
            <ul className="ml-6 mt-2 space-y-1">
              {item.subtitles.map((e, eindex) => (
                <React.Fragment key={eindex}>
                  {/* If object contains text1 & text2 */}
                  {"text1" in e && "text2" in e ? (
                    <>
                      <li className="flex items-start">
              <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />

                        <span>{e.text1}</span>
                      </li>
                      <li className="flex items-start">
                      <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />

                        <span>{e.text2}</span>
                      </li>
                    </>
                  ) : (
                    // If object contains text & nestedItems
                    <li className="mt-2">
                      <span className="font-bold">{e.text}</span>
                      <ul className="ml-6 mt-1 space-y-1">
                        {e.nestedItems.map((nestedItem, nestedIndex) => (
                          <li key={nestedIndex} className="flex items-start">
                                          <CheckCircle2 className="text-amber-600 mr-2 mt-1 flex-shrink-0" size={18} />

                            <span>{nestedItem}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </li>
        ))}
      </ul>
                <Link 
                  to="/home-automation"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-300"
                >
                  <span>Explore Home Automation</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </AnimatedSection>

          </div>
        </div>

 </section>


      


      
      {/* 3D Interactive Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection direction="left" className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6"> 3D Design Before  Booking</h2>
              <p className="text-xl text-gray-600 mb-8">
                
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-amber-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Planning</h3>
                    <p className="text-gray-600">Comprehensive planning with precise measurements and specifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-amber-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3D Design</h3>
                    <p className="text-gray-600">Real 3D Design Of Your Interior.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-amber-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customisation According Space & Requirements </h3>
                    <p className="text-gray-600">Interactive experience to explore your future space.</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/design"
                className="inline-flex items-center gap-2 bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 text-lg font-medium"
              >
                <span>Learn More About 3D Design</span>
                <ArrowRight size={20} />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="lg:w-1/2">
              <ThreeDModel />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Explore our showcase of Designer kitchens, interiors, and smart home installations.
                </p>
              </div>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors duration-300 mt-4 md:mt-0"
              >
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Kitchen & Interior?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a free call with our design experts and take the first step towards your dream home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-amber-600 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-medium"
              >
                Book a Free call
              </Link>
              <Link 
                to="/projects"
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md hover:bg-white/10 transition duration-300 text-lg font-medium"
              >
                Explore Our Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;