
import LocationCard from '@/components/LocationCard';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  // Location data
  const locations = [
    {
      id: 'branch1',
      name: 'Branch 1 - Saidu Sharif',
      address: 'Near City School Junior Campus, Behind Center Hospital College Colony, Saidu Sharif Swat.',
      phone: ['0946-723238', '0348-8826061', '0315-9149871'],
      mapUrl: 'https://maps.google.com/?q=Hafiz+Pizza+Hut+Saidu+Sharif+Swat',
    },
    {
      id: 'branch2',
      name: 'Branch 2 - Qambar',
      address: 'G.T Road City Center Block A, 1st Floor, Qambar Swat.',
      phone: ['0946-883904', '0344-8426566', '0311-1399090'],
      mapUrl: 'https://maps.google.com/?q=Hafiz+Pizza+Hut+Qambar+Swat',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Contact Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1770"
            alt="Contact Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-restaurant-dark/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-restaurant-red/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Visit our locations or contact us for inquiries, orders, and feedback.
            </p>
          </div>
        </div>
      </section>
      
      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-restaurant-cream rounded-xl p-6 text-center shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-14 h-14 bg-restaurant-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p className="text-gray-700 mb-1">Branch 1: 0348-8826061</p>
                <p className="text-gray-700 mb-1">Branch 2: 0344-8426566</p>
                <p className="text-gray-700">For Complaints: 0342-9426566</p>
              </motion.div>
              
              <motion.div 
                className="bg-restaurant-cream rounded-xl p-6 text-center shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-14 h-14 bg-restaurant-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                <p className="text-gray-700 mb-1">Branch 1: Saidu Sharif, Swat</p>
                <p className="text-gray-700">Branch 2: Qambar, Swat</p>
              </motion.div>
              
              <motion.div 
                className="bg-restaurant-cream rounded-xl p-6 text-center shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-14 h-14 bg-restaurant-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
                <p className="text-gray-700 mb-1">Monday - Thursday: 11AM - 11PM</p>
                <p className="text-gray-700">Friday - Sunday: 11AM - 12AM</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Cards */}
      <section className="py-16 bg-restaurant-cream/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-restaurant-red mb-2">
              Our Branches
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-restaurant-dark">
              Visit Our Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have two convenient locations to serve you. Visit us or call for deliveries in the area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-restaurant-red mb-2">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-restaurant-dark">
              Our Locations
            </h2>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214381.0477133732!2d72.18836863281249!3d34.77823430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc19be4e6db1e1%3A0x2c2a1f96d41d0ba1!2sSwat%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1656567346261!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hafiz Pizza Hut Locations"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Feedback Section */}
      <section className="py-16 bg-restaurant-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              We Value Your Feedback
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Your satisfaction is our priority. For complaints, suggestions, or feedback, please call our dedicated customer service line.
            </p>
            <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">For Complaints & Suggestions</h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+923429426566" 
                  className="flex items-center gap-2 bg-restaurant-red text-white px-6 py-3 rounded-full hover:bg-restaurant-red/90 transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>0342-9426566</span>
                </a>
                <a 
                  href="tel:+923482413388" 
                  className="flex items-center gap-2 bg-restaurant-red text-white px-6 py-3 rounded-full hover:bg-restaurant-red/90 transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>0348-2413388</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-restaurant-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Order?</h2>
            <p className="text-gray-600 mb-8">
              Call us now to place your order! We offer free delivery within 4 km for orders above Rs. 1000/-.
            </p>
            <a 
              href="tel:+923488826061" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Now: 0348-8826061
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
