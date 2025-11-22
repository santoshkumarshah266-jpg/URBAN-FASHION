const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gold mb-8 text-center" data-aos="fade-up">
            OUR STORY
          </h1>

          <div className="space-y-12">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                URBAN FASHION was born from a simple belief: fashion should be fearless. 
                We create for those who dare to lead, who refuse to follow the crowd, 
                and who understand that true style is about making a statement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div className="bg-gradient-to-br from-gold/10 to-transparent p-8 border border-gold/20" data-aos="fade-right">
                <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">EXCLUSIVITY</h3>
                <p className="text-gray-400">
                  Limited collections designed for the select few who appreciate true luxury streetwear.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-transparent p-8 border border-gold/20" data-aos="fade-left">
                <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">BOLDNESS</h3>
                <p className="text-gray-400">
                  Every piece is crafted to make a statement, to turn heads, to inspire confidence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-transparent p-8 border border-gold/20" data-aos="fade-right">
                <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">QUALITY</h3>
                <p className="text-gray-400">
                  Premium materials and exceptional craftsmanship in every stitch, every detail.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-transparent p-8 border border-gold/20" data-aos="fade-left">
                <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">CONFIDENCE</h3>
                <p className="text-gray-400">
                  Wear URBAN FASHION and feel the power of knowing you're dressed to lead.
                </p>
              </div>
            </div>

            <div className="text-center py-12" data-aos="fade-up">
              <h2 className="text-3xl font-montserrat font-bold mb-6">
                FOR THOSE WHO DARE
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We don't just create clothing. We create armor for the modern warrior, 
                the trendsetter, the leader. Join us in redefining what luxury streetwear means.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
