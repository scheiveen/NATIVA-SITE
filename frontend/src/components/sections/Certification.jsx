import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Certificate, CheckCircle, Eye, Heartbeat, Lightning, Path, SealCheck } from '@phosphor-icons/react';

const Certification = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificationPoints = [
    { icon: Eye, text: "Controle de identidade varietal" },
    { icon: CheckCircle, text: "Pureza genética comprovada" },
    { icon: Heartbeat, text: "Sanidade fitossanitária" },
    { icon: Lightning, text: "Vigor germinativo testado" },
    { icon: Path, text: "Acompanhamento das etapas de produção" },
    { icon: SealCheck, text: "Origem documentada e comprovada" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="certificacao" 
      ref={ref}
      className="relative py-24 md:py-32 bg-[#0A140F] overflow-hidden"
      data-testid="certification-section"
    >
      {/* Background with earthy tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#68523A]/5 via-transparent to-[#1D3627]/10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2A3F28]/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Badge/Icon */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 bg-[#C5A059]/10 border-2 border-[#C5A059] flex items-center justify-center">
              <Certificate size={48} weight="light" className="text-[#C5A059]" />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">
              Garantia de Qualidade
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F4F1ED] mb-6 leading-tight" data-testid="certification-heading">
              CERTIFICAÇÃO OFICIAL:{' '}
              <span className="text-gold-gradient">A GARANTIA QUE A SUA LAVOURA MERECE</span>
            </h2>
            <p className="text-[#BDB1A3] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Todos os processos da NATIVA são conduzidos sob certificação oficial da{' '}
              <strong className="text-[#F4F1ED]">Fundação Pró-Sementes</strong> e seguem as 
              normas rigorosas do <strong className="text-[#F4F1ED]">MAPA</strong> (Ministério 
              da Agricultura, Pecuária e Abastecimento).
            </p>
          </motion.div>

          {/* Certification points */}
          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {certificationPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-5 bg-[#11231A] border border-[#2A3F28] hover:border-[#C5A059]/30 transition-colors duration-300"
                data-testid={`certification-point-${index}`}
              >
                <point.icon size={28} weight="light" className="text-[#C5A059] flex-shrink-0" />
                <span className="text-[#F4F1ED] text-sm">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom message */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 border border-[#C5A059]/30 bg-gradient-to-r from-[#C5A059]/5 via-[#C5A059]/10 to-[#C5A059]/5"
          >
            <p className="text-[#F4F1ED] text-lg md:text-xl font-serif italic">
              "Com a certificação oficial, você tem a segurança de que cada semente 
              entregue passou por rigorosos controles de qualidade, garantindo 
              <span className="text-[#C5A059] font-semibold"> desempenho previsível</span> e 
              <span className="text-[#C5A059] font-semibold"> origem comprovada</span>."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Gold horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />
    </section>
  );
};

export default Certification;
