import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import {toast} from 'react-toastify'


const ContactPage = () => {



  const locations = [
    {
        title: "VIP Kitchen & Interiors",
        address: "Nawanshahr Road, near Petrol Pump, Garhshankar, Punjab 144527",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d853.0847873095261!2d76.14481926952875!3d31.21133199839732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEyJzQwLjgiTiA3NsKwMDgnNDMuNyJF!5e0!3m2!1sen!2sin!4v1741014125286!5m2!1sen!2sin" 
    }
];

//handles sumbit here

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData: FormData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    phone: (document.getElementById("phone") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    service: (document.getElementById("service") as HTMLSelectElement).value,
    message: (document.getElementById("message") as HTMLTextAreaElement).value,
  };

  try {
    const response = await fetch("https://vip-backend-77nq.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data: { success: boolean; message?: string } = await response.json();
    if (data.success) {
      toast.success("Message sent successfully!");
    } else {
      toast.error(data.message || "Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong.");
  }
};

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our services or ready to start your project?
                Contact us today for a free consultation.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

{/* form section */}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Your Number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Select a Service</option>
                      <option value="modular-kitchen">Modular Kitchen</option>
                      <option value="interior-design">Interior Design</option>
                      <option value="home-automation">Home Automation</option>
                      <option value="3d-design">2D & 3D Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 flex items-center gap-2"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>


{/* form end  */}


              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 70093-50717</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">vipkitchen@gmail.com</p>
                      <p className="text-gray-600">vipkitchen@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      Nawanshahr Road,<br />
                  Near Petrol Pump<br />
                  Garhshankar,144527,District-Hoshiarpur,Punjab-India


                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Sunday:9am-8pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://wa.me/917009350717?text=Hello%20there!%20I%20found%20you%20on%20your%20website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="tel:+91 70093-50717"
                      className="flex items-center gap-2 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition duration-300"
                    >
                      <Phone size={18} />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Showroom</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Come experience our designs in person at our showroom.
              </p>
            </div>
          </AnimatedSection>
          
       





          <AnimatedSection>
  <div className="w-full h-screen flex flex-col">
    {/* Title */}
    <div className="text-center p-6 bg-white-200 shadow-md z-10 rounded">
      <MapPin size={48} className="text-amber-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800">Find Us</h2>
      <h2 className='text-amber-600 mx-auto mb-4 font-bold'>{locations[0].title}</h2>
      <h2 className='text-amber-600 mx-auto mb-4 font-bold'>{locations[0].address}</h2>
    </div>

    {/* Full Map */}
    <div className="flex-grow relative">
      <iframe
        src={locations[0].mapSrc}
        className="absolute inset-0 w-full h-full rounded"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</AnimatedSection>






        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What areas do you serve?",
                answer: "We currently serve major cities across Punjab and surrounding areas. Contact us to check if we serve your specific location."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes, we offer free initial consultations to discuss your project requirements and provide starting design ideas and cost estimates."
              },
              {
                question: "What is the typical timeline for a kitchen renovation?",
                answer: "A typical kitchen renovation takes 4-6 weeks from design approval to completion, depending on the scope of work and customization required."
              },
              {
                question: "Do you provide warranty for your services?",
                answer: "Yes, we offer a lifetime warranty on our modular kitchen installations and varying warranties for other services. Details will be provided in your contract."
              },
              {
                question: "Can you work with my existing layout?",
                answer: "Absolutely! We can work with your existing layout or suggest modifications to optimize space and functionality based on your needs."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
