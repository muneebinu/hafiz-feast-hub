
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
      className="food-card flex items-center justify-between bg-restaurant-cream border-b border-restaurant-brown/20 py-3 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="food-info flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-restaurant-red/20 hidden sm:block">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h3 className="food-title text-restaurant-brown font-semibold">{item.name}</h3>
          {item.description && (
            <p className="text-restaurant-brown/70 text-sm">{item.description}</p>
          )}
        </div>
      </div>
      <p className="food-price text-restaurant-red font-bold text-lg">Rs. {item.price}/-</p>
    </motion.div>
  );
};

export default MenuCard;
