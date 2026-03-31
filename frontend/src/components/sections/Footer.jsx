import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, InstagramLogo, Globe, Envelope } from '@phosphor-icons/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Processo', id: 'processo' },
    { label: 'Cultivares', id: 'cultivares' },
    { label: 'Certificação', id: 'certificacao' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <footer 
      className="relative bg-[#081710] pt-16 pb-8 overflow-hidden"
      data-testid="footer-section"
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src="https://customer-assets.emergentagent.com/job_cultivares-nativa/artifacts/s0328tki_8B590799-5C8A-4B9F-AC65-794047CA71E7.png"
              alt="NATIVA Sementes de Cebola"
              className="h-20 object-contain mb-4"
              data-testid="footer-logo"
            />
            <p className="text-[#BDB1A3] text-sm leading-relaxed max-w-md">
              NATIVA Sementes de Cebola – um novo padrão de qualidade para o 
              produtor que busca excelência. Genética adaptada, origem controlada 
              e rastreabilidade completa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#F4F1ED] font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#BDB1A3] hover:text-[#C5A059] transition-colors text-sm"
                    data-testid={`footer-nav-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[#F4F1ED] font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#BDB1A3] text-sm">
                <MapPin size={18} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>
                  Rua Padre Cristovão Arnald, 289 - Sala 02<br />
                  Bairro Estreito - Alfredo Wagner - SC
                </span>
              </li>
              <li>
                <a 
                  href="tel:+5547999673232" 
                  className="flex items-center gap-3 text-[#BDB1A3] hover:text-[#C5A059] transition-colors text-sm"
                  data-testid="footer-phone"
                >
                  <Phone size={18} className="text-[#C5A059]" />
                  (47) 9 9967-3232
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/nativasementesdecebola" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#BDB1A3] hover:text-[#C5A059] transition-colors text-sm"
                  data-testid="footer-instagram"
                >
                  <InstagramLogo size={18} className="text-[#C5A059]" />
                  @nativasementesdecebola
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2A3F28] to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[#BDB1A3] text-xs">
            © {currentYear} <span className="text-[#C5A059]">NATIVA SEMENTES DE CEBOLA LTDA</span>. 
            Todos os direitos reservados.
          </p>
          <p className="text-[#BDB1A3]/60 text-xs">
            Desenvolvido com excelência para o agronegócio brasileiro
          </p>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-[#2A3F28] opacity-30" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#2A3F28] opacity-30" />
    </footer>
  );
};

export default Footer;
