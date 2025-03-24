
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
      className="food-card flex items-center justify-between bg-restaurant-cream border-b border-restaurant-brown/20 py-2 px-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="food-info">
        <h3 className="food-title text-restaurant-brown font-semibold">{item.name}</h3>
      </div>
      <p className="food-price text-restaurant-brown font-bold">{item.price}/-</p>
    </motion.div>
  );
};

export default MenuCard;
