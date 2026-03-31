import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Medal, 
  ShieldCheck, 
  Path, 
  UserCheck, 
  ChartLineUp, 
  Coins 
} from '@phosphor-icons/react';

const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentials = [
    {
      icon: MapPin,
      title: "Genética Adaptada por Região",
      description: "Cultivares desenvolvidas especificamente para diferentes altitudes e climas"
    },
    {
      icon: Medal,
      title: "Alto Padrão de Qualidade",
      description: "Processos certificados e rigoroso controle em todas as etapas"
    },
    {
      icon: ShieldCheck,
      title: "Origem Controlada",
      description: "Total transparência sobre a procedência de cada lote de sementes"
    },
    {
      icon: Path,
      title: "Rastreabilidade Completa",
      description: "Documentação de todo o ciclo produtivo, do campo à embalagem"
    },
    {
      icon: UserCheck,
      title: "Segurança para o Produtor",
      description: "Garantia de pureza varietal e vigor germinativo comprovados"
    },
    {
      icon: ChartLineUp,
      title: "Desempenho no Campo",
      description: "Cultivares testadas e validadas em condições reais de cultivo"
    },
    {
      icon: Coins,
      title: "Retorno por Hectare",
      description: "Máxima produtividade e qualidade comercial dos bulbos colhidos"
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="diferenciais" 
      ref={ref}
      className="relative py-24 md:py-32 bg-[#0A140F] overflow-hidden"
      data-testid="differentials-section"
    >
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1720205066012-506914cac413?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxhZ3JpY3VsdHVyYWwlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnMlMjBzdW5zZXR8ZW58MHx8fHwxNzc0OTc4OTM0fDA&ixlib=rb-4.1.0&q=85)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A140F] via-transparent to-[#0A140F]" />

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
              Por que escolher a Nativa
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#F4F1ED] mb-6"
              data-testid="differentials-heading"
            >
              Nossos <span className="text-gold-gradient">Diferenciais</span>
            </motion.h2>
          </div>

          {/* Differentials Bento Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group glass p-8 hover:border-[#C5A059]/50 transition-all duration-300 card-hover ${
                  index === 0 ? 'lg:col-span-2' : ''
                } ${index === 3 ? 'lg:col-span-2' : ''}`}
                data-testid={`differential-${index}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors duration-300">
                    <item.icon 
                      size={28} 
                      weight="light"
                      className="text-[#C5A059]" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F4F1ED] mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-[#BDB1A3] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-[#C5A059]/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-[#C5A059]/50 to-transparent" />
    </section>
  );
};

export default Differentials;
