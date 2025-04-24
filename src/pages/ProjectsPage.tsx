import  { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 'modern-kitchen-makeover',
    title: 'Modern Kitchen Makeover',
    category: 'Modular Kitchen',
    image: 'https://ik.imagekit.io/rohanKashyap/VIP-KITCHEN/vipkitchensPhotos/IMG-20250410-WA0013.jpg?updatedAt=1745427303293',
    description: 'Complete transformation of an outdated kitchen into a modern culinary haven with smart appliances and premium finishes.'
  },
  {
    id: 'luxury-apartment-interior',
    title: 'Luxury Apartment Interior',
    category: 'Interior Design',
    image: 'https://ik.imagekit.io/rohanKashyap/VIP-KITCHEN/vipkitchensPhotos/IMG-20250410-WA0005.jpg?updatedAt=1745427302009',
    description: 'Bespoke interior design for a high-end apartment with custom furniture and elegant finishes.'
  },
  {
    id: 'smart-home-integration',
    title: 'Complete Smart Home Integration',
    category: 'Home Automation',
    image: 'https://ik.imagekit.io/rohanKashyap/homeautomation-home-vipkitchen.JPG?updatedAt=1740842381750',
    description: 'Comprehensive home automation system with integrated lighting, security, and appliance control.'
  },
  {
    id: 'contemporary-villa-design',
    title: 'Contemporary Villa Design',
    category: 'Interior Design',
    image: 'https://ik.imagekit.io/rohanKashyap/VIP-KITCHEN/vipkitchensPhotos/IMG-20250410-WA0007.jpg?updatedAt=1745427302013',
    description: 'Complete interior design for a contemporary villa, featuring open spaces and luxurious finishes.'
  },
  {
    id: 'minimalist-kitchen',
    title: 'Minimalist Kitchen Design',
    category: 'Modular Kitchen',
    image: 'https://ik.imagekit.io/rohanKashyap/VIP-KITCHEN/vipkitchensPhotos/IMG-20250410-WA0011.jpg?updatedAt=1745427300848',
    description: 'Clean, minimalist kitchen design with high-end appliances and sleek cabinetry.'
  },
  {
    id: 'smart-lighting-system',
    title: 'Smart Lighting System',
    category: 'Home Automation',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Comprehensive smart lighting system with scene control and energy monitoring.'
  },
  {
    id: 'traditional-modern-fusion',
    title: 'Traditional-Modern Fusion',
    category: 'Interior Design',
    image: 'https://ik.imagekit.io/rohanKashyap/VIP-KITCHEN/vipkitchensPhotos/IMG-20250410-WA0009.jpg?updatedAt=1745427301776',
    description: 'Interior design that blends traditional elements with modern aesthetics for a timeless appeal.'
  },
  {
    id: 'compact-kitchen-solution',
    title: 'Compact Kitchen Solution',
    category: 'Modular Kitchen',
    image: 'https://ik.imagekit.io/rohanKashyap/VIP-KITCHEN/vipkitchensPhotos/IMG-20250410-WA0010.jpg?updatedAt=1745427299581',
    description: 'Space-efficient kitchen design that maximizes functionality in a compact area.'
  },
  {
    id: 'smart-security-system',
    title: 'Comprehensive Security System',
    category: 'Home Automation',
    image: 'https://ik.imagekit.io/rohanKashyap/cc293f6055c1647043b7c11caa3c3775.jpg?updatedAt=1740908763726',
    description: 'Advanced security system with cameras, smart locks, and real-time monitoring.'
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-6">Our Projects Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our showcase of Modular kitchens, interiors, and smart home installations.
              Each project reflects our commitment to quality, innovation, and client satisfaction.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-4">
              {['all', 'Modular Kitchen', 'Interior Design', 'Home Automation'].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition duration-300 ${
                    filter === category.toLowerCase()
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilter(category.toLowerCase())}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear what our clients have to say about their experience working with us.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                quote: "The team at VIP Kitchen transformed our outdated kitchen into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              },
              {
                name: "Michael Chen",
                role: "Property Developer",
                quote: "We've worked with VIP Kitchen on multiple projects, and they consistently deliver exceptional results. Their expertise in both design and implementation is unmatched.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              },
              {
                name: "Priya Patel",
                role: "Interior Designer",
                quote: "As a designer, I appreciate VIP Kitchen's ability to bring my vision to life. Their craftsmanship and attention to detail make them my go-to partner for kitchen projects.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-amber-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a free consultation.
            </p>
            <a 
              href="/contact"
              className="bg-white text-amber-600 py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-medium inline-block"
            >
              Contact Us Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;