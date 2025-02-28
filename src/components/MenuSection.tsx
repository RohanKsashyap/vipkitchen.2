import React, { useState } from 'react';

const menuCategories = [
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' }
];

const menuItems = {
  starters: [
    {
      name: 'Crispy Spring Rolls',
      description: 'Vegetable filled crispy rolls served with sweet chili sauce',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1677678701434-5c5e5bfb9f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Paneer Tikka',
      description: 'Marinated cottage cheese grilled to perfection',
      price: '$10.99',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Garlic Bread',
      description: 'Freshly baked bread with garlic butter and herbs',
      price: '$6.99',
      image: 'https://images.unsplash.com/photo-1619535860434-cf9b902a0a14?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ],
  mains: [
    {
      name: 'Butter Chicken',
      description: 'Tender chicken in a rich tomato and butter sauce',
      price: '$16.99',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Vegetable Biryani',
      description: 'Fragrant basmati rice cooked with mixed vegetables and spices',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Lamb Rogan Josh',
      description: 'Slow-cooked lamb in aromatic Kashmiri spices',
      price: '$18.99',
      image: 'https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ],
  desserts: [
    {
      name: 'Gulab Jamun',
      description: 'Soft milk dumplings soaked in rose-flavored sugar syrup',
      price: '$7.99',
      image: 'https://images.unsplash.com/photo-1601303516534-bf0b1eb70866?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Chocolate Brownie',
      description: 'Warm chocolate brownie served with vanilla ice cream',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Mango Kulfi',
      description: 'Traditional Indian ice cream flavored with mango',
      price: '$6.99',
      image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ],
  beverages: [
    {
      name: 'Masala Chai',
      description: 'Spiced Indian tea with milk',
      price: '$3.99',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Mango Lassi',
      description: 'Refreshing yogurt drink with mango pulp',
      price: '$4.99',
      image: 'https://images.unsplash.com/photo-1626201850129-a96cf18a22d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Fresh Lime Soda',
      description: 'Refreshing lime soda with mint leaves',
      price: '$3.49',
      image: 'https://images.unsplash.com/photo-1556679343-c1c1c9308e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ]
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Our Menu</h2>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-lg transition duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-amber-600 text-amber-600 py-2 px-8 rounded-md hover:bg-amber-600 hover:text-white transition duration-300 text-lg font-medium">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;