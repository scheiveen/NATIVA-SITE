import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Processo', id: 'processo' },
    { label: 'Cultivares', id: 'cultivares' },
    { label: 'Certificação', id: 'certificacao' },
    { label: 'Contato', id: 'contato' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A140F]/95 backdrop-blur-md border-b border-[#2A3F28]/50' 
            : 'bg-transparent'
        }`}
        data-testid="navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center"
              data-testid="nav-logo"
            >
              <img
                src="https://customer-assets.emergentagent.com/job_cultivares-nativa/artifacts/s0328tki_8B590799-5C8A-4B9F-AC65-794047CA71E7.png"
                alt="NATIVA"
                className="h-12 object-contain"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link text-[#F4F1ED] text-sm font-medium tracking-wide"
                  data-testid={`nav-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="https://wa.me/5547999673232"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4AF37] text-[#0A140F] px-6 py-2.5 font-semibold text-sm transition-all duration-300"
              data-testid="nav-cta"
            >
              Fale Conosco
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#F4F1ED] p-2"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <div className="absolute top-0 right-0 bottom-0 w-80 max-w-full bg-[#0A140F] border-l border-[#2A3F28]">
              <div className="p-6 pt-24">
                {/* Navigation links */}
                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left text-[#F4F1ED] hover:text-[#C5A059] text-lg font-medium py-3 border-b border-[#2A3F28]/50 transition-colors"
                      data-testid={`mobile-nav-link-${link.id}`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  href="https://wa.me/5547999673232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full text-center bg-[#C5A059] hover:bg-[#D4AF37] text-[#0A140F] px-6 py-4 font-semibold transition-all duration-300"
                  data-testid="mobile-nav-cta"
                >
                  Fale Conosco
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
