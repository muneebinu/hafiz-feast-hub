
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import MenuCard, { MenuItemProps } from '@/components/MenuCard';
import DealCard, { DealProps } from '@/components/DealCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Reveal animation for elements when scrolling
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal(); // Call once to check elements in initial viewport
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  // Sample data for featured menu items
  const featuredItems: MenuItemProps[] = [
    {
      id: '1',
      name: 'Zinger Burger Large',
      price: 300,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2899',
    },
    {
      id: '2',
      name: 'Chicken Cheese Shawarma',
      price: 180,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1364',
    },
    {
      id: '3',
      name: '10 Pieces Hot Wings',
      price: 400,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=2080',
    },
    {
      id: '4',
      name: 'Pizza Burger',
      price: 450,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80&w=2069',
    },
  ];

  // Sample data for popular deals
  const popularDeals: DealProps[] = [
    {
      id: '1',
      name: 'Deal 1',
      price: 800,
      items: ['2 Zinger Burgers', '1 French Fries', '2 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&q=80&w=1364',
      popular: true,
    },
    {
      id: '2',
      name: 'Deal 3',
      price: 1050,
      items: ['2 Zinger Burgers', '2 Chicken Pieces', '1 French Fries', '2 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1571091655789-405127d14fc3?auto=format&fit=crop&q=80&w=1408',
      popular: true,
    },
    {
      id: '3',
      name: 'Deal 5',
      price: 1250,
      items: ['1 Tower Burger', '1 French Fries', '2 Cold Drinks', '10 Hot Wings'],
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80&w=2069',
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Menu Items */}
      <section className="section-padding bg-white">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-medium text-restaurant-red mb-2">Our Specialties</span>
          <h2 className="section-title">Most Popular Items</h2>
          <p className="section-subtitle">
            Discover our most beloved dishes, crafted with premium ingredients and extraordinary flavors
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link 
            to="/menu" 
            className="btn-outline inline-flex items-center gap-2"
          >
            View Full Menu
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      
      {/* Special Offer Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070"
            alt="Special Offer Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-restaurant-dark/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 reveal">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="inline-block bg-restaurant-red px-4 py-1 rounded-full text-sm font-medium mb-4">
              Special Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Free Hall For Birthday Parties
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Celebrate your special day with us! We offer a free hall for birthday parties with delicious food and exceptional service.
            </p>
            <a 
              href="tel:+923488826061" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Book Now
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Popular Deals */}
      <section className="section-padding bg-restaurant-cream/50">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-medium text-restaurant-red mb-2">Value Meals</span>
          <h2 className="section-title">Popular Deals</h2>
          <p className="section-subtitle">
            Get more for less with our value-packed meal deals, perfect for family gatherings or friendly get-togethers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {popularDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link 
            to="/menu" 
            className="btn-primary inline-flex items-center gap-2"
          >
            See All Deals
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      
      {/* Free Delivery Banner */}
      <section className="py-16 bg-restaurant-red text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Free Home Delivery
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Enjoy free home delivery within 4 km for orders above Rs. 1000/-. Order now and have your favorite food delivered to your doorstep!
              </p>
              <a 
                href="tel:+923488826061" 
                className="bg-white text-restaurant-red px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Order Now
                <ArrowRight size={18} />
              </a>
            </div>
            <motion.div 
              className="w-full max-w-[300px]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1571091655789-405127d14fc3?auto=format&fit=crop&q=80&w=1408" 
                alt="Free Delivery" 
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
