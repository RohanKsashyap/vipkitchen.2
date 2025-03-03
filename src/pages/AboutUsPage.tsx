import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
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
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://via.placeholder.com/150",
      bio: "John leads the team with over 10 years of experience in the industry.",
    },
    {
      name: "Jane Smith",
      role: "Head of Design",
      image: "https://via.placeholder.com/150",
      bio: "Jane is a design expert, crafting beautiful and functional spaces.",
    },
    {
      name: "Mike Johnson",
      role: "Project Manager",
      image: "https://via.placeholder.com/150",
      bio: "Mike ensures every project runs smoothly and meets client expectations.",
    },
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

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Our team consists of skilled professionals passionate about creating dream spaces.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-center p-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-amber-600 font-semibold">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
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