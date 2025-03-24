import { useState, useEffect } from 'react';
import MenuCard, { MenuItemProps } from '@/components/MenuCard';
import DealCard, { DealProps } from '@/components/DealCard';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

// Define the categories
const categories = [
  'all',
  'burgers',
  'chicken',
  'shawarmas',
  'deals'
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState<MenuItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Menu items data
  const menuItems: MenuItemProps[] = [
    // Burgers
    {
      id: 'burger-1',
      name: 'Zinger Burger Large',
      price: 300,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2899',
    },
    {
      id: 'burger-2',
      name: 'Zinger With Cheese Burger',
      price: 350,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&q=80&w=1740',
    },
    {
      id: 'burger-3',
      name: 'American Burger',
      price: 300,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=1368',
    },
    {
      id: 'burger-4',
      name: 'Tikka Burger',
      price: 230,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?auto=format&fit=crop&q=80&w=1289',
    },
    {
      id: 'burger-5',
      name: 'Chicken Patti Burger',
      price: 280,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=2815',
    },
    {
      id: 'burger-6',
      name: 'Tower Burger',
      price: 400,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1760',
    },
    {
      id: 'burger-7',
      name: 'Double Decker Burger',
      price: 500,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&q=80&w=1287',
    },
    {
      id: 'burger-8',
      name: 'Pizza Burger',
      price: 450,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80&w=2069',
    },
    
    // Fried Chicken
    {
      id: 'chicken-1',
      name: '1 Piece Chicken',
      price: 150,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&q=80&w=1770',
    },
    {
      id: 'chicken-2',
      name: 'Thai Piece Chicken',
      price: 170,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1632789395771-21d95a140b4c?auto=format&fit=crop&q=80&w=1374',
    },
    {
      id: 'chicken-3',
      name: '5 Pieces Hot Wings',
      price: 220,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=2080',
    },
    {
      id: 'chicken-4',
      name: '10 Pieces Hot Wings',
      price: 400,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=1319',
    },
    {
      id: 'chicken-5',
      name: '10 Pieces Nuggets',
      price: 400,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=1773',
    },
    {
      id: 'chicken-6',
      name: '10 Pieces BBQ Wings',
      price: 400,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1504383633899-bb0e38151db3?auto=format&fit=crop&q=80&w=1336',
    },
    
    // Shawarmas
    {
      id: 'shawarma-1',
      name: 'Large Chicken Shawarma',
      price: 150,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1364',
    },
    {
      id: 'shawarma-2',
      name: 'Chicken Cheese Shawarma',
      price: 180,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1615372122049-56bfa71ba48a?auto=format&fit=crop&q=80&w=1336',
    },
    {
      id: 'shawarma-3',
      name: 'Zinger Shawarma',
      price: 300,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1557112038-dd3fc53fdbbb?auto=format&fit=crop&q=80&w=1364',
    },
    {
      id: 'shawarma-4',
      name: 'Pratha Roll',
      price: 260,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1649179326439-6d5391a5dd66?auto=format&fit=crop&q=80&w=1770',
    },
    {
      id: 'shawarma-5',
      name: 'Zinger Pratha Roll',
      price: 300,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1584844115436-473887b1e327?auto=format&fit=crop&q=80&w=1364',
    },
  ];

  // Deals data with improved images
  const deals: DealProps[] = [
    {
      id: 'deal-1',
      name: 'Family Deal',
      price: 800,
      items: ['2 Zinger Burger', '1 French Fries', '2 Cold drink Reg'],
      image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&q=80&w=1364',
      popular: true,
    },
    {
      id: 'deal-2',
      name: 'Classic Deal',
      price: 420,
      items: ['1 Zinger Burger', '1 French Fries Reg Half', '1 Cane'],
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1771',
    },
    {
      id: 'deal-3',
      name: 'Premium Deal',
      price: 900,
      items: ['2 Chicken Burger', '2 Chicken Piece', '1 French Fries Reg', '2 Cold Drink Reg'],
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1365',
      popular: true,
    },
    {
      id: 'deal-4',
      name: 'Spicy Deal',
      price: 1050,
      items: ['2 Zinger Burger', '2 Chicken Piece', '1 French Fries Reg', '2 Cold Drink Reg'],
      image: 'https://images.unsplash.com/photo-1571091655789-405127d14fc3?auto=format&fit=crop&q=80&w=1408',
    },
    {
      id: 'deal-5',
      name: 'Special Deal',
      price: 1250,
      items: ['1 Tower Burger', '1 French Fries Reg', '2 Cold Drink Reg', '10 Hot Wings'],
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2899',
    },
    {
      id: 'deal-6',
      name: 'Party Deal',
      price: 1400,
      items: ['8 Chicken Piece', '1 French Fries', '4 Cold Drink Reg'],
      image: 'https://images.unsplash.com/photo-1627309302198-41e2cfb4429e?auto=format&fit=crop&q=80&w=1374',
      popular: true,
    },
    {
      id: 'deal-7',
      name: 'Group Deal',
      price: 2800,
      items: ['8 Chicken Burger', '1 French Fries', '4 Cold Drink Reg'],
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1771',
    },
    {
      id: 'deal-8',
      name: 'Super Deal',
      price: 3200,
      items: ['6 Zinger Burger', '6 Chicken Piece', '10 Hot Wings', '1 French Fries', '4 Cold Drink Reg'],
      image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&q=80&w=1740',
    },
  ];

  // Filter items when category changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredItems(menuItems);
      } else if (activeCategory === 'deals') {
        setFilteredItems([]);
      } else {
        setFilteredItems(menuItems.filter(item => item.category === activeCategory));
      }
      setIsLoading(false);
    }, 500);
  }, [activeCategory]);

  // Define category headers mapping
  const categoryHeaders: Record<string, string> = {
    'burgers': 'Gourmet Burgers',
    'chicken': 'Premium Fried Chicken',
    'shawarmas': 'Special Shawarmas',
    'deals': 'Value Deals'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-restaurant-dark to-restaurant-brown">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/lovable-uploads/7ff8890d-e310-4f9f-b66b-edfdefe90b74.png"
            alt="Menu Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-3">
                Hafiz Pizza Hut
              </h1>
              <div className="w-24 h-1 bg-restaurant-red mx-auto mb-4"></div>
              <p className="text-white/90 text-lg italic mb-4">Fine Dining Experience</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto mt-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-white font-display font-semibold text-xl mb-2">Complimentary Delivery</p>
              <p className="text-white/90 mb-5 text-sm">Within 4 km on orders above Rs. 1000</p>
              <div className="flex items-center justify-center gap-6 mt-2">
                <a 
                  href="tel:+923488826061" 
                  className="text-white hover:text-restaurant-cream transition-colors flex items-center gap-2"
                >
                  <Phone size={18} />
                  0348-8826061
                </a>
                <a 
                  href="tel:+923429426566" 
                  className="text-white hover:text-restaurant-cream transition-colors flex items-center gap-2"
                >
                  <Phone size={18} />
                  0342-9426566
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Category Tabs */}
      <section className="sticky top-16 bg-white z-30 py-4 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-tab font-medium text-sm px-5 py-2.5 rounded-full transition-all ${
                    activeCategory === category 
                      ? 'bg-restaurant-dark text-white shadow-md' 
                      : 'text-restaurant-dark hover:bg-gray-100'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-3 max-w-3xl mx-auto">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="food-card animate-pulse flex items-center justify-between p-4 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gray-200 rounded-full hidden sm:block"></div>
                  <div className="h-6 bg-gray-200 rounded w-40"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {activeCategory !== 'deals' && filteredItems.length > 0 && (
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-display font-bold text-restaurant-dark mb-2">
                    {categoryHeaders[activeCategory] || 'Our Menu'}
                  </h2>
                  <div className="w-16 h-0.5 bg-restaurant-red mx-auto"></div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg max-w-3xl mx-auto">
                  <div className="divide-y divide-gray-100">
                    {filteredItems.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeCategory === 'deals' && (
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-display font-bold text-restaurant-dark mb-2">
                    Special Value Deals
                  </h2>
                  <div className="w-16 h-0.5 bg-restaurant-red mx-auto mb-4"></div>
                  <p className="text-restaurant-brown/80 max-w-2xl mx-auto">
                    Experience our chef's specially curated deals for exceptional value
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {deals.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))}
                </div>
              </div>
            )}
            
            {filteredItems.length === 0 && activeCategory !== 'deals' && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No items found in this category.</p>
              </div>
            )}
          </>
        )}
      </section>
      
      {/* Free Birthday Hall - Elegant Design */}
      <section className="py-20 bg-gradient-to-br from-restaurant-dark to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=2070"
            alt="Birthday Party Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-white">Celebrate Your Special Day</h2>
            <div className="w-16 h-0.5 bg-restaurant-red mx-auto mb-6"></div>
            <p className="text-white font-display text-2xl font-bold mb-6 inline-block px-8 py-2 border-2 border-restaurant-red rounded-full">
              COMPLIMENTARY HALL
            </p>
            <p className="text-white/80 text-lg mb-10">
              Host your memorable celebration in our elegant private venue. Complimentary hall for birthday parties.
            </p>
            <a 
              href="tel:+923488826061" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-restaurant-red text-white rounded-full font-medium hover:bg-restaurant-red/90 transition-all shadow-lg hover:shadow-xl"
            >
              <Phone />
              Reserve Now
              <ArrowRight size={18} className="ml-1" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Order Call-to-Action - Elegant Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-3xl mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4 text-restaurant-dark">Ready to Order?</h2>
            <div className="w-12 h-0.5 bg-restaurant-red mx-auto mb-6"></div>
            <p className="text-restaurant-brown/80 text-lg mb-10">
              Call us now for a premium dining experience delivered to your doorstep. Complimentary delivery within 4 km for orders above Rs. 1000/-.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:+923488826061" 
                className="bg-restaurant-dark text-white px-6 py-3 rounded-full font-medium hover:bg-restaurant-dark/90 transition-all flex items-center gap-2 shadow-md"
              >
                <Phone size={18} />
                Branch 1: 0348-8826061
              </a>
              <a 
                href="tel:+923448426566" 
                className="bg-restaurant-dark text-white px-6 py-3 rounded-full font-medium hover:bg-restaurant-dark/90 transition-all flex items-center gap-2 shadow-md"
              >
                <Phone size={18} />
                Branch 2: 0344-8426566
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;

