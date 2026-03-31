import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, ShieldCheck, Target, Dna } from '@phosphor-icons/react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    {
      icon: Target,
      title: "Rigor Técnico",
      description: "Processos padronizados e acompanhamento constante em todas as etapas"
    },
    {
      icon: Dna,
      title: "Pureza Genética",
      description: "Seleção criteriosa dos bulbos-matrizes para garantir a identidade varietal"
    },
    {
      icon: ShieldCheck,
      title: "Sanidade",
      description: "Controle fitossanitário rigoroso em todo o ciclo de produção"
    },
    {
      icon: Leaf,
      title: "Adaptação Regional",
      description: "Cultivares desenvolvidas para as condições específicas de cada região"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="sobre" 
      ref={ref}
      className="relative py-24 md:py-32 bg-[#0A140F] overflow-hidden"
      data-testid="about-section"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1D3627]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-[#C5A059]/5 to-transparent" />
      </div>

      {/* Diagonal texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(https://static.prod-images.emergentagent.com/jobs/7e81d906-68d9-4d08-b3aa-668c0ef60f66/images/fbc440361d77ae8316b76ab955826ea215233af031f1fe57b5ac9b7bd94922a1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Label */}
          <motion.span 
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block"
          >
            Sobre a Empresa
          </motion.span>

          {/* Main heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4F1ED] mb-8 leading-tight"
            data-testid="about-heading"
          >
            Um novo padrão de{' '}
            <span className="text-gold-gradient">qualidade</span>
            <br />no mercado de sementes de cebola
          </motion.h2>

          {/* Description */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <p className="text-[#BDB1A3] text-base md:text-lg leading-relaxed">
              A <strong className="text-[#F4F1ED]">NATIVA Sementes de Cebola</strong> nasceu 
              da necessidade de atender o produtor rural com excelência. Somos uma empresa 
              com base agronômica sólida, comprometida em entregar sementes que fazem a 
              diferença no campo.
            </p>
            <p className="text-[#BDB1A3] text-base md:text-lg leading-relaxed">
              Nossa missão é fornecer sementes com <strong className="text-[#C5A059]">vigor 
              germinativo superior</strong>, garantindo ao produtor segurança no plantio e 
              previsibilidade na colheita. Cada lote é tratado com o máximo rigor técnico.
            </p>
          </motion.div>

          {/* Concepts Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-[#11231A] border border-[#2A3F28] hover:border-[#C5A059]/50 transition-all duration-300 card-hover"
                data-testid={`about-concept-${index}`}
              >
                <concept.icon 
                  size={40} 
                  weight="light"
                  className="text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300" 
                />
                <h3 className="text-xl font-semibold text-[#F4F1ED] mb-2 font-serif">
                  {concept.title}
                </h3>
                <p className="text-[#BDB1A3] text-sm leading-relaxed">
                  {concept.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gold line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
    </section>
  );
};

export default About;
