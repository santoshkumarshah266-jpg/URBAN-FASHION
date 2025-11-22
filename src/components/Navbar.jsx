import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'BLOG', id: 'blog' },
    { name: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 border-b border-[#FFBB33]/20 py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="flex items-center z-50">
          <img
            src="/images/logo/logo.png"
            alt="URBAN FASHION"
            className={`transition-all duration-500 ${
              scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-semibold tracking-wide transition-all duration-300 group ${
                  activeSection === link.id ? 'text-[#FFBB33]' : 'text-white hover:text-[#FFBB33]'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBB33] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50 text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black/98 backdrop-blur-sm transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ top: scrolled ? '60px' : '72px' }}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-2xl font-bold transition-all duration-300 ${
                    activeSection === link.id ? 'text-[#FFBB33]' : 'text-white hover:text-[#FFBB33]'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
