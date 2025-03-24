
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
      className="food-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="food-image-container">
        <img 
          src={item.image} 
          alt={item.name} 
          className="food-image"
          loading="lazy"
        />
      </div>
      <div className="food-info">
        <h3 className="food-title">{item.name}</h3>
        <p className="food-price">Rs. {item.price}/-</p>
        {item.description && (
          <p className="text-gray-500 text-sm mt-1">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;
