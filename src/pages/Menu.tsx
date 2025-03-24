
import { useState, useEffect } from 'react';
import MenuCard, { MenuItemProps } from '@/components/MenuCard';
import DealCard, { DealProps } from '@/components/DealCard';
import { motion } from 'framer-motion';

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
      description: 'Crispy chicken, fresh lettuce, and our signature sauce',
    },
    {
      id: 'burger-2',
      name: 'Zinger with Cheese Burger',
      price: 350,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&q=80&w=1740',
      description: 'Classic zinger with melted cheese',
    },
    {
      id: 'burger-3',
      name: 'American Burger',
      price: 230,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=1368',
      description: 'American style burger with special sauce',
    },
    {
      id: 'burger-4',
      name: 'Tikka Burger',
      price: 230,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?auto=format&fit=crop&q=80&w=1289',
      description: 'Spicy tikka flavor with fresh vegetables',
    },
    {
      id: 'burger-5',
      name: 'Chicken Patti Burger',
      price: 200,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=2815',
      description: 'Classic chicken patty with fresh veggies',
    },
    {
      id: 'burger-6',
      name: 'Tower Burger',
      price: 400,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1760',
      description: 'Towering burger with multiple layers',
    },
    {
      id: 'burger-7',
      name: 'Double Decker Burger',
      price: 350,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&q=80&w=1287',
      description: 'Double the patty, double the flavor',
    },
    {
      id: 'burger-8',
      name: 'Pizza Burger',
      price: 450,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80&w=2069',
      description: 'The perfect fusion of pizza and burger',
    },
    
    // Fried Chicken
    {
      id: 'chicken-1',
      name: '1 Piece Chicken',
      price: 150,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&q=80&w=1770',
      description: 'Crispy fried chicken piece',
    },
    {
      id: 'chicken-2',
      name: 'Thai Piece Chicken',
      price: 170,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1632789395771-21d95a140b4c?auto=format&fit=crop&q=80&w=1374',
      description: 'Thai style spicy fried chicken',
    },
    {
      id: 'chicken-3',
      name: '5 Pieces Hot Wings',
      price: 220,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=2080',
      description: '5 pieces of spicy hot wings',
    },
    {
      id: 'chicken-4',
      name: '10 Pieces Hot Wings',
      price: 400,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=1319',
      description: '10 pieces of spicy hot wings',
    },
    {
      id: 'chicken-5',
      name: '10 Pieces Nuggets',
      price: 400,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=1773',
      description: '10 pieces of chicken nuggets',
    },
    {
      id: 'chicken-6',
      name: '10 Pieces BBQ Wings',
      price: 400,
      category: 'chicken',
      image: 'https://images.unsplash.com/photo-1504383633899-bb0e38151db3?auto=format&fit=crop&q=80&w=1336',
      description: '10 pieces of BBQ flavored wings',
    },
    
    // Shawarmas
    {
      id: 'shawarma-1',
      name: 'Large Chicken Shawarma',
      price: 150,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=1364',
      description: 'Large chicken shawarma with fresh veggies',
    },
    {
      id: 'shawarma-2',
      name: 'Chicken Cheese Shawarma',
      price: 180,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1615372122049-56bfa71ba48a?auto=format&fit=crop&q=80&w=1336',
      description: 'Chicken shawarma with melted cheese',
    },
    {
      id: 'shawarma-3',
      name: 'Zinger Shawarma',
      price: 180,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1557112038-dd3fc53fdbbb?auto=format&fit=crop&q=80&w=1364',
      description: 'Zinger flavored special shawarma',
    },
    {
      id: 'shawarma-4',
      name: 'Pratha Roll',
      price: 300,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1649179326439-6d5391a5dd66?auto=format&fit=crop&q=80&w=1770',
      description: 'Special roll with paratha bread',
    },
    {
      id: 'shawarma-5',
      name: 'Zinger Pratha Roll',
      price: 400,
      category: 'shawarmas',
      image: 'https://images.unsplash.com/photo-1584844115436-473887b1e327?auto=format&fit=crop&q=80&w=1364',
      description: 'Zinger chicken rolled in paratha bread',
    },
  ];

  // Deals data
  const deals: DealProps[] = [
    {
      id: 'deal-1',
      name: 'Deal 1',
      price: 800,
      items: ['2 Zinger Burgers', '1 French Fries', '2 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&q=80&w=1364',
    },
    {
      id: 'deal-2',
      name: 'Deal 1 Half',
      price: 420,
      items: ['1 Zinger Burger', '1 French Fries', '1 Cold Drink'],
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1771',
    },
    {
      id: 'deal-3',
      name: 'Deal 2',
      price: 900,
      items: ['2 Chicken Burgers', '2 Chicken Pieces', '1 French Fries', '2 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1365',
      popular: true,
    },
    {
      id: 'deal-4',
      name: 'Deal 3',
      price: 1050,
      items: ['2 Zinger Burgers', '2 Chicken Pieces', '1 French Fries', '2 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1571091655789-405127d14fc3?auto=format&fit=crop&q=80&w=1408',
      popular: true,
    },
    {
      id: 'deal-5',
      name: 'Deal 5',
      price: 1250,
      items: ['1 Tower Burger', '1 French Fries', '2 Cold Drinks', '10 Hot Wings'],
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2899',
    },
    {
      id: 'deal-6',
      name: 'Deal 7',
      price: 1400,
      items: ['8 Chicken Pieces', '1 French Fries', '2 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1627309302198-41e2cfb4429e?auto=format&fit=crop&q=80&w=1374',
    },
    {
      id: 'deal-7',
      name: 'Deal 8',
      price: 2800,
      items: ['8 Chicken Burgers', '1 French Fries', '4 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1771',
    },
    {
      id: 'deal-8',
      name: 'Deal 9',
      price: 3200,
      items: ['6 Zinger Burgers', '6 Chicken Pieces', '10 Hot Wings', '1 French Fries', '4 Cold Drinks'],
      image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&q=80&w=1740',
      popular: true,
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

  return (
    <div className="min-h-screen">
      {/* Menu Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe?auto=format&fit=crop&q=80&w=1974"
            alt="Menu Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-restaurant-dark/70"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-restaurant-red/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Menu
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Delicious Food Menu
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Explore our wide variety of mouthwatering burgers, fried chicken, shawarmas, and value deals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Category Tabs */}
      <section className="sticky top-16 bg-white z-30 py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="section-padding">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="food-card animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {activeCategory !== 'deals' && filteredItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            )}
            
            {activeCategory === 'deals' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {deals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
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
      
      {/* Order Call-to-Action */}
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

export default Menu;
