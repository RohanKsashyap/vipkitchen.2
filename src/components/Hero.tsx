import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-black">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience Culinary Excellence
          </h1>
          <p className="text-xl text-white mb-8">
            Indulge in a symphony of flavors crafted with passion and the finest ingredients.
            Welcome to VIP Kitchen, where every meal tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 text-lg font-medium">
              View Our Menu
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-amber-800 transition duration-300 text-lg font-medium">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;