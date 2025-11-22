const Blog = () => {
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Shrestha',
      role: 'College Student',
      review: 'Finally found a brand that fits my budget! The clothes are trendy and comfortable. I can actually afford to update my wardrobe without feeling guilty.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Gurung',
      role: 'Young Professional',
      review: 'Love how affordable yet stylish everything is. I can dress well for work and weekends without spending a fortune. Urban Fashion gets it!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Aditya Thapa',
      role: 'Freelancer',
      review: 'Great quality at prices that make sense. I appreciate that I don\'t have to choose between looking good and saving money. Highly recommend!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Sanjana Rai',
      role: 'Teacher',
      review: 'Perfect for everyday wear! Comfortable, trendy, and most importantly, affordable. I can buy multiple pieces without breaking my budget.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Bikash Tamang',
      role: 'Startup Employee',
      review: 'This is exactly what young people in Nepal need - fashion that doesn\'t cost a month\'s salary. Quality is solid and styles are current. Love it!',
      rating: 5,
    },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#FFBB33]">
            Customer Reviews
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Real people, real style, real affordability.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-[#FFBB33]/10 to-transparent p-6 md:p-8 rounded-lg border border-[#FFBB33]/20 hover:border-[#FFBB33]/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex mb-3 md:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-[#FFBB33]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 italic leading-relaxed">"{review.review}"</p>
              
              <div className="border-t border-[#FFBB33]/20 pt-3 md:pt-4">
                <p className="text-[#FFBB33] font-bold text-sm md:text-base">{review.name}</p>
                <p className="text-gray-400 text-xs md:text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
