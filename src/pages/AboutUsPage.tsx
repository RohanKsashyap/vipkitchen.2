import { Link } from 'react-router-dom';
import { CheckCircle2,ArrowRight, Crown, Compass} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const aboutFeatures = [
  {
    title: "Our Vision",
    description: "To revolutionize modular kitchen design with innovation and sustainability."
  },
  {
    title: "Customer Commitment",
    description: "We prioritize customer satisfaction with premium quality and personalized solutions."
  },
  {
    title: "Sustainable Practices",
    description: "Eco-friendly materials and energy-efficient designs for a greener future."
  },
  {
    title: "Expert Craftsmanship",
    description: "A dedicated team of skilled professionals crafting excellence."
  }
];

const teamMembers = [
    {
      name: "Amandeep Sidhu",
      role: "Founder & CEO",
      image: "https://via.placeholder.com/150",
      bio: "Aman leads the team with over 6 years of experience in the industry.",
    }
  ];





const AboutUsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our story, mission, and the passion that drives us to create stunning modular kitchens.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {aboutFeatures.map((feature, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="flex items-start">
                  <CheckCircle2 className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl">{feature.title}</h3>
                    <p className="text-gray-600 text-md">{feature.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>






      {/* Ceo & Owner*/}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="flex flex-col lg:flex-row items-center gap-12">

            <AnimatedSection direction="left" className="lg:w-1/2">

            <div>

            {teamMembers.map((e,index)=>(  
              
              <>
              <h2 key={index} className="text-4xl font-bold text-gray-900 mb-6"> 
              <span>
                {e.name}
                 </span>
              </h2>
             
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10rounded-full flex items-center justify-center mr-4 mt-1">
                  <Crown className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={24} />

                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{e.role}</h3>
                    <p className="text-gray-600">He took the initiative with the mindset to change the perespective of community.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10  rounded-full flex items-center justify-center mr-4 mt-1">
                  <Compass className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{e.bio}</h3>
                    <p className="text-gray-600">A remarkable journey,since 2019.Building a large customer base and winning trust.</p>
                  </div>
                </div>
                
              </div>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 text-lg font-medium"
              >
                <span>Contact For Advantage Of Our Services !! </span>
                <ArrowRight size={20} />
              </Link>
              </>
              
              ))}
           
           </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="lg:w-1/2">
<img src="https://ik.imagekit.io/rohanKashyap/761ae13bbc5a70a569fef997f9878ad6.jpg?updatedAt=1741081777362" alt="ceo-image" height={300} width={400}  className='rounded'/>
          
            </AnimatedSection>
          </div>
        </div>
      </section>






      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to start your journey with a team that values innovation and quality.
          </p>
          <Link to="/contact" className="bg-white text-amber-600 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-medium">
            Get in Touch
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default AboutUsPage;