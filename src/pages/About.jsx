const About = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* About Us Section */}
      <section className="section-padding px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About Us
            </h1>
            <p className="text-xl text-[#8A8A8A] leading-relaxed mb-8">
              Urban Fashion started with a simple idea — everyone deserves stylish clothes at prices they can actually afford.
            </p>
            <p className="text-lg text-[#8A8A8A] leading-relaxed">
              We focus on everyday wear, trending designs, and comfortable fits. Our goal? Make good fashion accessible for all over Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding px-6 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-4">Affordable Fashion</h3>
              <p className="text-[#8A8A8A] leading-relaxed">
                We believe style shouldn't cost a fortune. Every piece is priced with your budget in mind, 
                so you can build a wardrobe you love without the guilt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4">Everyday Comfort</h3>
              <p className="text-[#8A8A8A] leading-relaxed">
                Fashion is meant to be lived in. Our designs prioritize comfort and practicality, 
                perfect for your daily routine, from morning coffee to evening hangouts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-4">Trending Designs</h3>
              <p className="text-[#8A8A8A] leading-relaxed">
                Stay current without the premium price tag. We keep up with the latest trends 
                and bring them to you at prices that make sense.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-4">For Everyone</h3>
              <p className="text-[#8A8A8A] leading-relaxed">
                Fashion is for everyone, not just the few. We create inclusive styles that 
                celebrate diversity and make everyone feel confident and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding px-6">
        <div className="container mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Fashion That Fits Your Life
          </h2>
          <p className="text-lg text-[#8A8A8A] leading-relaxed">
            At Urban Fashion, we're not about exclusivity or luxury labels. We're about real people, 
            real style, and real affordability. Join us in making fashion accessible, comfortable, and fun for everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
