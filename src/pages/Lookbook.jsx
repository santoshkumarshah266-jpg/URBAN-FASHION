import { useState } from 'react';

const Lookbook = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const lookbookItems = [
    {
      id: 1,
      title: 'EVERYDAY ESSENTIALS',
      description: 'Comfortable basics for daily wear',
      image: '/images/lookbook/look1.jpg',
    },
    {
      id: 2,
      title: 'CASUAL COMFORT',
      description: 'Relaxed styles that fit your life',
      image: '/images/lookbook/look2.jpg',
    },
    {
      id: 3,
      title: 'TRENDY PICKS',
      description: 'Current styles at great prices',
      image: '/images/lookbook/look3.jpg',
    },
    {
      id: 4,
      title: 'WEEKEND VIBES',
      description: 'Easy outfits for your days off',
      image: '/images/lookbook/look4.jpg',
    },
    {
      id: 5,
      title: 'SMART CASUAL',
      description: 'Versatile pieces for any occasion',
      image: '/images/lookbook/look5.jpg',
    },
    {
      id: 6,
      title: 'FRESH STYLES',
      description: 'New arrivals you can afford',
      image: '/images/lookbook/look6.jpg',
    },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#FFBB33]">
            Lookbook
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Explore our latest collection. Affordable style for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {lookbookItems.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden group cursor-pointer rounded-lg border border-[#FFBB33]/20 hover:border-[#FFBB33]/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] bg-[#1a1a1a] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-[#FFBB33] mb-2">
                    {item.title}
                  </h3>
                  <p
                    className={`text-gray-300 transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
