import { useState } from 'react';

const Lookbook = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const lookbookItems = [
    {
      id: 1,
      title: 'URBAN WARRIOR',
      description: 'Bold statement pieces for the fearless',
      image: '/images/lookbook/look1.jpg',
    },
    {
      id: 2,
      title: 'STREET LUXURY',
      description: 'Where comfort meets high fashion',
      image: '/images/lookbook/look2.jpg',
    },
    {
      id: 3,
      title: 'GOLD STANDARD',
      description: 'Exclusive designs that shine',
      image: '/images/lookbook/look3.jpg',
    },
    {
      id: 4,
      title: 'NIGHT MOVES',
      description: 'Elevated streetwear for after dark',
      image: '/images/lookbook/look4.jpg',
    },
    {
      id: 5,
      title: 'REBEL SPIRIT',
      description: 'For those who dare to be different',
      image: '/images/lookbook/look5.jpg',
    },
    {
      id: 6,
      title: 'URBAN ELITE',
      description: 'The pinnacle of street luxury',
      image: '/images/lookbook/look6.jpg',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gold mb-4">
            LOOKBOOK
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest collection. Each piece tells a story of boldness and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lookbookItems.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-montserrat font-bold text-gold mb-2">
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
