import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WhatsappLogo, InstagramLogo, ArrowRight } from "@phosphor-icons/react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="final-cta-section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1763110803881-583dc935ca6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnMlMjBzdW5zZXR8ZW58MHx8fHwxNzc0OTc4OTM0fDA&ixlib=rb-4.1.0&q=85)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A140F]/90 via-[#0A140F]/85 to-[#0A140F]/95" />

      {/* Diagonal cuts */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0A140F] transform skew-y-2 -translate-y-12" />

      {/* Decorative gold accents */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-[#C5A059] to-transparent" />
      <div className="absolute top-1/4 right-0 w-1 h-32 bg-gradient-to-b from-[#C5A059] to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="/img/logo-nativa-sem-fundo.png"
            alt="NATIVA"
            className="h-24 md:h-32 mx-auto mb-8 object-contain"
          />

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F4F1ED] mb-6 leading-tight font-serif"
            data-testid="final-cta-heading"
          >
            Fale com a Nativa e encontre a{" "}
            <span className="text-gold-gradient">cultivar ideal</span> para a
            sua realidade
          </h2>

          <p className="text-[#BDB1A3] text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Nossa equipe técnica está pronta para orientar você na escolha da
            melhor cultivar para suas condições de produção. Entre em contato
            agora mesmo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/5548999673232"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-primary bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 flex items-center gap-3 transition-all duration-300 w-full sm:w-auto justify-center"
              data-testid="final-cta-whatsapp"
            >
              <WhatsappLogo size={24} weight="fill" />
              FALAR NO WHATSAPP
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.a
              href="https://instagram.com/nativasementes"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-semibold px-8 py-4 flex items-center gap-3 transition-all duration-300 w-full sm:w-auto justify-center"
              data-testid="final-cta-instagram"
            >
              <InstagramLogo size={24} weight="fill" />
              SIGA NO INSTAGRAM
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>

          {/* Phone number */}
          <p className="text-[#C5A059] text-lg mt-8 font-semibold">
            (48) 99967-3232
          </p>
        </motion.div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#081710] transform -skew-y-2 translate-y-12" />
    </section>
  );
};

export default FinalCTA;
