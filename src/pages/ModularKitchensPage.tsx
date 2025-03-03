import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

 const kitchenFeatures = [
  {
    title: "Quality Materials",
    description: "High-quality materials with lifetime warranty for durability and longevity."
  },
  {
    title: "Custom Designs",
    description: "Tailored designs to match your space, preferences, and lifestyle needs."
  },
  {
    title: "Smart Integration",
    description: "Seamless integration of smart appliances and automation features."
  },
  {
    title: "Expert Installation",
    description: "Professional installation by our team of skilled craftsmen."
  }
];

const kitchenTypes = [
  {
    id: "l-shaped",
    title: "L-Shaped Kitchens",
    description: "Perfect for medium to large spaces, offering ample counter space and storage.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "u-shaped",
    title: "U-Shaped Kitchens",
    description: "Ideal for larger spaces, providing maximum storage and work surface area.",
    image: "https://ik.imagekit.io/rohanKashyap/6a3286de1af22add6fc61c6f6b9b4951.jpg?updatedAt=1740909890939"
  },
  {
    id: "parallel",
    title: "Parallel Kitchens",
    description: "Perfect for narrow spaces, with efficient workflow between opposite counters.",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "island",
    title: "Island Kitchens",
    description: "Featuring a central island for additional workspace and social interaction.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

// partners brand name

interface Brand {
  name: string;
  logo: string;
}

export const brands: Brand[] = [
  {
    name: "EBCO",
    logo: "https://ik.imagekit.io/rohanKashyap/ebco-logo?updatedAt=1740934524035",
  },
  {
    name: "ELICA",
    logo: "https://ik.imagekit.io/rohanKashyap/elica-logo.PNG?updatedAt=1740979564349",
  },
  {
    name: "LECCY & GENESIS",
    logo: "https://ik.imagekit.io/rohanKashyap/leccy_genesis?updatedAt=1740980539417",
  },
];

const ModularKitchensPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection direction="left" className="lg:w-1/2">
              <span className="text-amber-600 font-semibold mb-4 block"> MODULAR KITCHENS</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Lifetime Warranty Modular Kitchens
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience the perfect blend of functionality, aesthetics, and durability with our  modular kitchens. 
                Designed to last a lifetime with our exclusive warranty.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {kitchenFeatures.map((feature, index) => (
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
                  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
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
                      <div>Lifetime</div>
                      <div>Warranty</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Kitchen Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">KITCHEN LAYOUTS</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Kitchen Style</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
                We offer a variety of kitchen layouts to suit different spaces and preferences.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kitchenTypes.map((type, index) => (
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <Link 
                      to={`/modular-kitchens/${type.id}`}
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
        </div>
      </section>
      
      
      
      {/* Before & After */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">TRANSFORMATIONS</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the  transformations we've achieved for our clients.
                Slide to compare the before and after results.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <BeforeAfterSlider 
                beforeImage="https://ik.imagekit.io/rohanKashyap/Feinmann-CulinaryCouture-Brody-ChestnutHillMa-After-06.jpg?updatedAt=1740983259966"
                afterImage="https://ik.imagekit.io/rohanKashyap/Feinmann-CulinaryCouture-Brody-ChestnutHillMa-After-02.jpg?updatedAt=1740983217559"
                beforeLabel="Before"
                afterLabel="After"
              />
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                afterImage="https://images.unsplash.com/photo-1556911220-bda9f33a8b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                beforeLabel="Before"
                afterLabel="After"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Brands & Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-semibold mb-2 block">OUR PARTNERS</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4"> Brand Partnerships</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We partner with leading brands to ensure the highest quality products and components for your kitchen.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {brands.map((brand, index) => (
        <AnimatedSection key={brand.name} delay={index * 0.1}>
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-32">
            <div className="flex items-center gap-2">
              {/* <span className="text-2xl font-bold text-gray-800">{brand.name}</span> */}

              <img
                src={brand.logo}
                alt={`${brand.name}-logo`}
                height={100}
                width={100}
                className="object-contain rounded"

              />
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
            <h2 className="text-4xl font-bold mb-6">Ready for Your Dream Kitchen?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a free consultation with our kitchen design experts and take the first step towards your dream kitchen.
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
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md hover:bg-white/10 transition duration-300 text-lg font-medium"
              >
                View Kitchen Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ModularKitchensPage;