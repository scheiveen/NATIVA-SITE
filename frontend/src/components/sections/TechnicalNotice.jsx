import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Warning, ThermometerHot, Mountains, Plant, Tractor } from '@phosphor-icons/react';

const TechnicalNotice = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const factors = [
    { icon: ThermometerHot, label: "Clima" },
    { icon: Mountains, label: "Altitude" },
    { icon: Plant, label: "Tipo de Solo" },
    { icon: Tractor, label: "Condução da Lavoura" }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-20 overflow-hidden"
      data-testid="technical-notice-section"
    >
      {/* Background - Matte gold with dark text */}
      <div className="absolute inset-0 bg-[#C5A059]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.05) 10px,
            rgba(0,0,0,0.05) 20px
          )`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header with warning icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Warning size={28} weight="bold" className="text-[#0A140F]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#0A140F] font-semibold">
              Aviso Técnico
            </span>
          </div>

          {/* Main text */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A140F] text-center mb-6 font-serif" data-testid="technical-notice-heading">
            O manejo é decisivo para o sucesso da lavoura
          </h3>

          <p className="text-[#0A140F]/80 text-center text-base md:text-lg mb-8 leading-relaxed">
            Os ciclos e desempenhos apresentados são <strong className="text-[#0A140F]">estimativas médias</strong> e 
            podem variar conforme as condições locais. Para máximos resultados, considere sempre:
          </p>

          {/* Factors */}
          <div className="flex flex-wrap justify-center gap-6">
            {factors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 bg-[#0A140F]/10 border border-[#0A140F]/20"
                data-testid={`technical-factor-${index}`}
              >
                <factor.icon size={24} weight="bold" className="text-[#0A140F]" />
                <span className="text-[#0A140F] font-semibold text-sm">{factor.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-[#0A140F]/70 text-center text-sm mt-8">
            Consulte sempre um profissional técnico para orientações específicas à sua propriedade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalNotice;
