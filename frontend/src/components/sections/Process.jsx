import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Plant, 
  Farm, 
  Sun, 
  Scissors, 
  Funnel, 
  Tag, 
  Package, 
  QrCode 
} from '@phosphor-icons/react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Plant,
      title: "Seleção dos Bulbos",
      description: "Escolha criteriosa dos bulbos-matrizes com base em características varietais superiores"
    },
    {
      icon: Farm,
      title: "Condução Assistida",
      description: "Acompanhamento técnico constante dos campos de produção de sementes"
    },
    {
      icon: Sun,
      title: "Secagem Controlada",
      description: "Processo realizado em estufas próprias com controle de temperatura e umidade"
    },
    {
      icon: Scissors,
      title: "Trilha",
      description: "Separação cuidadosa das sementes das umbelas colhidas"
    },
    {
      icon: Funnel,
      title: "Limpeza",
      description: "Remoção de impurezas e materiais inertes para máxima pureza"
    },
    {
      icon: Tag,
      title: "Classificação",
      description: "Separação por tamanho e peso para garantir uniformidade"
    },
    {
      icon: Package,
      title: "Beneficiamento",
      description: "Tratamento e embalagem em condições ideais de conservação"
    },
    {
      icon: QrCode,
      title: "Rastreabilidade",
      description: "Documentação completa de todo o processo produtivo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="processo" 
      ref={ref}
      className="relative py-24 md:py-32 bg-[#11231A] overflow-hidden"
      data-testid="process-section"
    >
      {/* Diagonal top cut */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0A140F] transform skew-y-2 -translate-y-12" />

      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-[#C5A059]/5 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span 
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block"
            >
              Nosso Processo
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#F4F1ED] mb-6"
              data-testid="process-heading"
            >
              Como <span className="text-gold-gradient">Trabalhamos</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-[#BDB1A3] text-base md:text-lg max-w-2xl mx-auto"
            >
              Da seleção do material genético até a embalagem final, cada etapa é 
              conduzida com rigor técnico e comprometimento com a qualidade.
            </motion.p>
          </div>

          {/* Process steps grid */}
          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                data-testid={`process-step-${index}`}
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#C5A059] text-[#0A140F] flex items-center justify-center font-bold text-sm z-10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Card */}
                <div className="p-6 pt-8 bg-[#0A140F] border border-[#2A3F28] hover:border-[#C5A059]/50 transition-all duration-300 h-full card-hover">
                  <step.icon 
                    size={36} 
                    weight="light"
                    className="text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <h3 className="text-lg font-semibold text-[#F4F1ED] mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-[#BDB1A3] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (hidden on last item of each row) */}
                {index % 4 !== 3 && index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#C5A059]/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Diagonal bottom cut */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#0A140F] transform -skew-y-2 translate-y-12" />
    </section>
  );
};

export default Process;
