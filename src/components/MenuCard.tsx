
import { motion } from 'framer-motion';

export interface MenuItemProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

const MenuCard = ({ item }: { item: MenuItemProps }) => {
  return (
    <motion.div 
      className="food-card flex items-center justify-between bg-white border-b border-gray-100 py-4 px-5 hover:bg-gray-50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="food-info flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 shadow-sm hidden sm:block">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h3 className="food-title text-restaurant-dark font-display font-semibold text-lg">{item.name}</h3>
          {item.description && (
            <p className="text-restaurant-brown/70 text-sm mt-1">{item.description}</p>
          )}
        </div>
      </div>
      <p className="food-price text-restaurant-red font-display font-bold text-xl">Rs. {item.price}/-</p>
    </motion.div>
  );
};

export default MenuCard;
