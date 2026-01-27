import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '/INTERIOR-by-HUI/' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-xl md:text-2xl font-serif font-bold tracking-wider flex items-center gap-2 transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
          INTERIORS <span className={`text-sm font-light tracking-widest mt-1 ${isScrolled ? 'text-stone-900' : 'text-stone-200'}`}>by HUI</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`text-sm font-medium border rounded-full px-3 py-1 transition-colors ${isScrolled ? 'text-stone-800 border-stone-300 hover:bg-stone-200' : 'text-white border-white/30 hover:bg-white/10'}`}
          >
            {language === 'zh' ? 'EN' : '中'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className={`md:hidden flex items-center space-x-4 ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
          <button
            onClick={toggleLanguage}
            className={`text-sm font-medium border rounded-full px-3 py-1 ${isScrolled ? 'border-stone-300' : 'border-white/30'}`}
          >
            {language === 'zh' ? 'EN' : '中'}
          </button>
          <button
            className="focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 shadow-lg py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-700 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;