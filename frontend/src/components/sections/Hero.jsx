import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WhatsappLogo, ArrowDown } from "@phosphor-icons/react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://static.prod-images.emergentagent.com/jobs/7e81d906-68d9-4d08-b3aa-668c0ef60f66/images/1bf9b15d65b44bb61b698f6c91b360399fbba4fb1754352d93983579fdcfc676.png"
          alt="Campos de cebola NATIVA"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A140F]/60 via-[#0A140F]/70 to-[#0A140F] z-10" />

      {/* Diagonal decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C5A059]/5 to-transparent z-10 transform skew-x-12" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container-custom text-center px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/img/logo-nativa-sem-fundo.png"
            alt="NATIVA Sementes de Cebola"
            className="h-32 md:h-40 lg:h-48 mx-auto object-contain drop-shadow-2xl"
            data-testid="hero-logo"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          data-testid="hero-headline"
        >
          <span className="text-gold-gradient">ADAPTADA À SUA REGIÃO,</span>
          <br />
          <span className="text-[#F4F1ED]">PRONTA PRA SUA PRODUTIVIDADE!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-[#BDB1A3] max-w-3xl mx-auto mb-10 leading-relaxed"
          data-testid="hero-subtitle"
        >
          Sementes de cebola com{" "}
          <span className="text-[#C5A059] font-semibold">pureza genética</span>,
          <span className="text-[#C5A059] font-semibold"> sanidade</span>,
          <span className="text-[#C5A059] font-semibold">
            {" "}
            vigor germinativo
          </span>{" "}
          e
          <span className="text-[#C5A059] font-semibold">
            {" "}
            adaptação regional
          </span>
          . Desenvolvidas para entregar máxima performance no campo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/5548999673232"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#C5A059] hover:bg-[#D4AF37] text-[#0A140F] font-semibold px-8 py-4 flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
            data-testid="hero-cta-whatsapp"
          >
            <WhatsappLogo size={24} weight="fill" />
            FALE COM A NATIVA
          </a>
          <button
            onClick={() => scrollToSection("cultivares")}
            className="bg-transparent border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 px-8 py-4 font-semibold transition-all duration-300"
            data-testid="hero-cta-cultivares"
          >
            CONHECER CULTIVARES
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("sobre")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#C5A059] hover:text-[#D4AF37] transition-colors"
          data-testid="hero-scroll-indicator"
        >
          <ArrowDown size={32} />
        </motion.button>
      </motion.div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#0A140F] z-20 transform -skew-y-2 translate-y-16" />
    </section>
  );
};

export default Hero;
