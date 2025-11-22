import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Why People Love Us Section */}
      <section className="section-padding px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFBB33]">
              Why People Love Us
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Style that respects your budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-[#FFBB33]/10 to-transparent border border-[#FFBB33]/20 rounded-lg hover:border-[#FFBB33]/40 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="text-[#FFBB33] text-5xl mb-6">👕</div>
              <h3 className="text-xl font-bold mb-4 text-white">Trendy & Affordable Clothing</h3>
              <p className="text-gray-400 leading-relaxed">Stay on trend without breaking the bank</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#FFBB33]/10 to-transparent border border-[#FFBB33]/20 rounded-lg hover:border-[#FFBB33]/40 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="text-[#FFBB33] text-5xl mb-6">✨</div>
              <h3 className="text-xl font-bold mb-4 text-white">Comfortable Everyday Fits</h3>
              <p className="text-gray-400 leading-relaxed">Designed for real life, real comfort</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#FFBB33]/10 to-transparent border border-[#FFBB33]/20 rounded-lg hover:border-[#FFBB33]/40 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="text-[#FFBB33] text-5xl mb-6">❤️</div>
              <h3 className="text-xl font-bold mb-4 text-white">Trusted by Young Fashion Lovers</h3>
              <p className="text-gray-400 leading-relaxed">Join thousands who choose smart style</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#FFBB33]/10 to-transparent border border-[#FFBB33]/20 rounded-lg hover:border-[#FFBB33]/40 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="text-[#FFBB33] text-5xl mb-6">💰</div>
              <h3 className="text-xl font-bold mb-4 text-white">Pocket-Friendly Styles for Everyone</h3>
              <p className="text-gray-400 leading-relaxed">Fashion that fits every budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brand Block */}
      <section className="section-padding px-6 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="container mx-auto max-w-4xl text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFBB33]">
            Wear Confidence, Not Expensive Labels
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Urban Fashion is built for everyday people who want to look stylish without burning money. 
            We create trendy designs, comfortable fits, and pocket-friendly styles for everyone who loves fashion.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Because looking good shouldn't mean choosing between style and your savings.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
