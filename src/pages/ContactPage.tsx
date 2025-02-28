import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage = () => {
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
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="+1 (555) 123-4567"
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
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@vipkitchen.com</p>
                      <p className="text-gray-600">support@vipkitchen.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Culinary Street<br />
                        Foodville, FC 12345<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 10AM - 7PM</p>
                      <p className="text-gray-600">Saturday: 10AM - 6PM</p>
                      <p className="text-gray-600">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://wa.me/15551234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="tel:+15551234567"
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
            <div className="rounded-xl overflow-hidden shadow-lg h-[500px] bg-gray-200">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <MapPin size={48} className="text-amber-600 mx-auto mb-4" />
                  <p className="text-gray-600">Google Maps would be embedded here</p>
                </div>
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
                answer: "We currently serve major cities across India, including Delhi, Mumbai, Bangalore, and surrounding areas. Contact us to check if we serve your specific location."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes, we offer free initial consultations to discuss your project requirements and provide preliminary design ideas and cost estimates."
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