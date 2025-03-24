
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070" 
          alt="Delicious Pizza" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-restaurant-dark/80 to-restaurant-dark/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-2xl flex flex-col gap-6 animate-fade-in">
          <span className="bg-restaurant-red/90 text-white px-4 py-1 rounded-full inline-block text-sm font-medium w-fit">
            Taste the Difference
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
            Delicious Burgers & Pizzas, Just a Call Away!
          </h1>
          <p className="text-white/80 text-lg">
            Indulge in our mouthwatering burgers, crispy fried chicken, and gourmet pizzas. 
            Free delivery within 4km for orders above Rs. 1000.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="tel:+923488826061" 
              className="btn-primary flex items-center gap-2"
            >
              Call Now
              <Phone size={18} />
            </a>
            <Link 
              to="/menu" 
              className="btn-outline flex items-center gap-2"
            >
              View Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Images */}
      <div className="hidden md:block absolute right-10 bottom-0 z-10 w-[300px] h-[300px] image-float pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=1964" 
          alt="Juicy Burger" 
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.3))' }}
        />
      </div>
    </div>
  );
};

export default Hero;
