const Blog = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Shrestha',
      role: 'Creative Director',
      review: 'URBAN FASHION completely transformed my wardrobe. The quality is unmatched, and every piece makes me feel like I\'m leading, not following. This is what luxury streetwear should be.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Gurung',
      role: 'Fashion Influencer',
      review: 'I\'ve never felt more confident in my style. URBAN FASHION pieces are bold, exclusive, and always turn heads. The attention to detail is incredible. Worth every penny.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Aditya Thapa',
      role: 'Entrepreneur',
      review: 'Finally, a brand that understands what it means to stand out. The craftsmanship is exceptional, and the designs are fearless. URBAN FASHION is my go-to for making statements.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Sanjana Rai',
      role: 'Artist',
      review: 'These aren\'t just clothes, they\'re armor. Every time I wear URBAN FASHION, I feel powerful and ready to conquer. The exclusivity and quality are unmatched.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Bikash Tamang',
      role: 'Music Producer',
      review: 'URBAN FASHION gets it. Bold, luxurious, and unapologetically different. This is the brand for people who refuse to blend in. Absolutely love everything I own.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gold mb-4">
            CUSTOMER REVIEWS
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from those who dare to lead with URBAN FASHION.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-gold/10 to-transparent p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{review.review}"</p>
              
              <div className="border-t border-gold/20 pt-4">
                <p className="text-gold font-montserrat font-bold">{review.name}</p>
                <p className="text-gray-400 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
