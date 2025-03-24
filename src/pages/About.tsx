
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1774"
            alt="About Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-restaurant-dark/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-restaurant-red/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Learn about our journey, values, and commitment to serving delicious food.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-medium text-restaurant-red mb-2">
                Welcome to Hafiz Pizza Hut
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-restaurant-dark">
                A Family Restaurant with Delicious Food
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Hafiz Pizza Hut is a family restaurant serving delicious burgers, fried chicken, shawarmas, and pizzas. We take pride in our quality ingredients and authentic recipes that bring joy to our customers.
                </p>
                <p>
                  Our journey began with a simple passion for good food and a desire to create a welcoming space for families and friends to gather and enjoy meals together. Over the years, we've grown to become one of the most loved restaurants in the area.
                </p>
                <p>
                  We provide free home delivery within 4 km for orders above Rs. 1000/-. Our commitment to customer satisfaction drives us to maintain the highest standards of food quality and service.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470"
                alt="Restaurant Interior" 
                className="w-full h-auto object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Special Features */}
      <section className="py-16 bg-restaurant-cream/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-restaurant-red mb-2">
              What Makes Us Special
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-restaurant-dark">
              Special Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-restaurant-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Delivery</h3>
              <p className="text-gray-600">
                We offer free home delivery within 4 km for orders above Rs. 1000/-. Our delivery team ensures your food reaches you hot and fresh.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-restaurant-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Hall for Parties</h3>
              <p className="text-gray-600">
                Celebrate your special moments at our restaurant. We offer a free hall for birthday parties with delicious food and exceptional service.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-16 h-16 bg-restaurant-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Value Deals</h3>
              <p className="text-gray-600">
                Enjoy our value-packed meal deals, perfect for family gatherings or friendly get-togethers. Get more for less with our carefully curated combos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quality Promise */}
      <section className="py-16 bg-restaurant-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-sm font-medium text-restaurant-red mb-2">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Quality & Freshness Guaranteed
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  At Hafiz Pizza Hut, we are committed to using only the freshest ingredients in our dishes. Our meats are sourced from trusted suppliers, and our vegetables are handpicked for quality.
                </p>
                <p>
                  We prepare all our food with care and attention to detail, ensuring that every bite is a delightful experience. Our chefs are trained to maintain the highest standards of cleanliness and food safety.
                </p>
                <a 
                  href="tel:+923488826061" 
                  className="btn-primary inline-flex items-center gap-2 mt-4"
                >
                  Order Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2899"
                  alt="Delicious Burger" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1364"
                  alt="Tasty Shawarma" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&q=80&w=1770"
                  alt="Crispy Fried Chicken" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=2080"
                  alt="Hot Wings" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-restaurant-red text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Experience Our Delicious Food?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Call us now to place your order or visit our restaurant for a memorable dining experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+923488826061" 
                className="bg-white text-restaurant-red px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-restaurant-red transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
