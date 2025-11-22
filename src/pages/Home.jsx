import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Why People Love Us Section */}
      <section className="section-padding px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why People Love Us
            </h2>
            <p className="text-lg text-[#8A8A8A] max-w-2xl mx-auto">
              Style that respects your budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[#F5F5F5] rounded-lg hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="text-[#FFBB33] text-5xl mb-6">👕</div>
              <h3 className="text-xl font-bold mb-4">Trendy & Affordable Clothing</h3>
              <p className="text-[#8A8A8A] leading-relaxed">Stay on trend without breaking the bank</p>
            </div>

            <div className="text-center p-8 bg-[#F5F5F5] rounded-lg hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="text-[#FFBB33] text-5xl mb-6">✨</div>
              <h3 className="text-xl font-bold mb-4">Comfortable Everyday Fits</h3>
              <p className="text-[#8A8A8A] leading-relaxed">Designed for real life, real comfort</p>
            </div>

            <div className="text-center p-8 bg-[#F5F5F5] rounded-lg hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="text-[#FFBB33] text-5xl mb-6">❤️</div>
              <h3 className="text-xl font-bold mb-4">Trusted by Young Fashion Lovers</h3>
              <p className="text-[#8A8A8A] leading-relaxed">Join thousands who choose smart style</p>
            </div>

            <div className="text-center p-8 bg-[#F5F5F5] rounded-lg hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="text-[#FFBB33] text-5xl mb-6">💰</div>
              <h3 className="text-xl font-bold mb-4">Pocket-Friendly Styles for Everyone</h3>
              <p className="text-[#8A8A8A] leading-relaxed">Fashion that fits every budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brand Block */}
      <section className="section-padding px-6 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-4xl text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Wear Confidence, Not Expensive Labels
          </h2>
          <p className="text-lg text-[#8A8A8A] leading-relaxed mb-6">
            Urban Fashion is built for everyday people who want to look stylish without burning money. 
            We create trendy designs, comfortable fits, and pocket-friendly styles for everyone who loves fashion.
          </p>
          <p className="text-lg text-[#8A8A8A] leading-relaxed">
            Because looking good shouldn't mean choosing between style and your savings.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
