import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const text = textRef.current;

    gsap.fromTo(
      logo,
      { scale: 1.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: logo,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      text,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero/hero.jpg)',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <img
          ref={logoRef}
          src="/images/logo/logo.png"
          alt="URBAN FASHION"
          className="w-48 sm:w-64 md:w-80 lg:w-96 mb-6 md:mb-8"
        />
        <h1
          ref={textRef}
          className="hero-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight mb-4 md:mb-6 px-4"
        >
          Style That Fits Your Life
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl font-normal px-4">
          Look good every day without overspending
        </p>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-[#FFBB33]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
