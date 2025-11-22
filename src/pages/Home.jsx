import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-4">
              DARE TO BE DIFFERENT
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              URBAN FASHION is more than clothing—it's a statement. For those who refuse to blend in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="text-gold text-5xl mb-4">✦</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">EXCLUSIVE</h3>
              <p className="text-gray-400">Limited collections for the bold few</p>
            </div>

            <div className="text-center p-8 hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="text-gold text-5xl mb-4">◆</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">QUALITY</h3>
              <p className="text-gray-400">Premium materials, exceptional craftsmanship</p>
            </div>

            <div className="text-center p-8 hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="text-gold text-5xl mb-4">★</div>
              <h3 className="text-xl font-montserrat font-bold mb-3">BOLD</h3>
              <p className="text-gray-400">Designs that make a statement</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
