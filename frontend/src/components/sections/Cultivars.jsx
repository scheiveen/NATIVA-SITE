import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mountains, Sun, TreeEvergreen, Clock, Palette, Target } from '@phosphor-icons/react';

const Cultivars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const cultivars = [
    {
      name: "NATIVA DO VALE",
      tagline: "Precocidade e Adaptação",
      image: "https://images.unsplash.com/photo-1760192499223-0dc15a4ad3c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHw0fHxyZWQlMjBvbmlvbiUyMGNsb3NlJTIwdXAlMjB2ZWdldGFibGUlMjBoYXJ2ZXN0fGVufDB8fHx8MTc3NDk3ODg4NHww&ixlib=rb-4.1.0&q=85",
      icon: Sun,
      features: [
        { icon: Clock, label: "Ciclo", value: "Precoce" },
        { icon: Palette, label: "Coloração", value: "Avermelhada" },
        { icon: Target, label: "Indicação", value: "Vales e baixas altitudes" }
      ],
      description: "A NATIVA DO VALE foi desenvolvida para regiões de menor altitude, oferecendo precocidade excepcional e vigor incomparável. Ideal para produtores que buscam colheitas antecipadas com máxima qualidade comercial.",
      highlights: [
        "Adaptação excepcional aos vales",
        "Ciclo precoce para colheita antecipada",
        "Coloração avermelhada intensa",
        "Alto vigor germinativo"
      ]
    },
    {
      name: "NATIVA DA SERRA",
      tagline: "Rusticidade e Performance",
      image: "https://static.prod-images.emergentagent.com/jobs/7e81d906-68d9-4d08-b3aa-668c0ef60f66/images/c8566267bc57de6635d81e4e8f71737b35c78cbea59e5c56f3f891d70ce0239b.png",
      icon: Mountains,
      features: [
        { icon: Clock, label: "Ciclo", value: "Médio" },
        { icon: Palette, label: "Coloração", value: "Vermelho-alaranjado" },
        { icon: Target, label: "Indicação", value: "Altitude média" }
      ],
      description: "A NATIVA DA SERRA combina rusticidade com alto desempenho em condições de altitude média. Sua sanidade superior e resistência a condições adversas garantem estabilidade produtiva.",
      highlights: [
        "Rusticidade comprovada",
        "Excelente sanidade",
        "Performance em altitude",
        "Comportamento estável"
      ]
    },
    {
      name: "NATIVA PLANALTO",
      tagline: "Produtividade Máxima",
      image: "https://images.unsplash.com/photo-1639172486437-28d0e1ce6493?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHw0fHxyZWQlMjBvbmlvbiUyMGhhcnZlc3QlMjBjbG9zZSUyMHVwfGVufDB8fHx8MTc3NDk3ODkzNXww&ixlib=rb-4.1.0&q=85",
      icon: TreeEvergreen,
      features: [
        { icon: Clock, label: "Ciclo", value: "Tardio" },
        { icon: Palette, label: "Coloração", value: "Vermelho-pinhão" },
        { icon: Target, label: "Indicação", value: "Altitudes elevadas" }
      ],
      description: "A NATIVA PLANALTO representa o máximo em produtividade e padrão comercial. Desenvolvida para altitudes elevadas e plantios tardios, entrega bulbos de qualidade superior.",
      highlights: [
        "Produtividade máxima",
        "Padrão comercial superior",
        "Ideal para altitudes elevadas",
        "Ciclo tardio de alta performance"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      id="cultivares" 
      ref={ref}
      className="relative py-24 md:py-32 bg-[#11231A] overflow-hidden"
      data-testid="cultivars-section"
    >
      {/* Diagonal top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0A140F] transform skew-y-1 -translate-y-12" />

      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-5"
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
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span 
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block"
            >
              Nossas Cultivares
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#F4F1ED] mb-6"
              data-testid="cultivars-heading"
            >
              A <span className="text-gold-gradient">Cultivar Certa</span> para Sua Região
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-[#BDB1A3] text-base md:text-lg max-w-2xl mx-auto"
            >
              Três cultivares exclusivas, cada uma desenvolvida para atender às 
              características específicas de diferentes regiões produtoras.
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {cultivars.map((cultivar, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === index 
                    ? 'bg-[#C5A059] text-[#0A140F]' 
                    : 'bg-transparent border border-[#2A3F28] text-[#BDB1A3] hover:border-[#C5A059]/50 hover:text-[#C5A059]'
                }`}
                data-testid={`cultivar-tab-${index}`}
              >
                <cultivar.icon size={20} weight={activeTab === index ? "fill" : "light"} />
                {cultivar.name}
              </button>
            ))}
          </motion.div>

          {/* Cultivar Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={cultivars[activeTab].image}
                  alt={cultivars[activeTab].name}
                  className="w-full h-[400px] object-cover"
                  data-testid={`cultivar-image-${activeTab}`}
                />
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#C5A059]" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#C5A059]" />
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(cultivars[activeTab].icon, {
                    size: 32,
                    weight: "light",
                    className: "text-[#C5A059]"
                  })}
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059]">
                    {cultivars[activeTab].tagline}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#F4F1ED] mb-4 font-serif" data-testid={`cultivar-name-${activeTab}`}>
                  {cultivars[activeTab].name}
                </h3>

                <p className="text-[#BDB1A3] text-base leading-relaxed mb-6">
                  {cultivars[activeTab].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {cultivars[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="text-center p-4 bg-[#0A140F] border border-[#2A3F28]">
                      <feature.icon size={24} className="text-[#C5A059] mx-auto mb-2" />
                      <span className="text-xs text-[#BDB1A3] block">{feature.label}</span>
                      <span className="text-sm font-semibold text-[#F4F1ED]">{feature.value}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {cultivars[activeTab].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#BDB1A3]">
                      <span className="w-1.5 h-1.5 bg-[#C5A059] flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#0A140F] transform -skew-y-1 translate-y-12" />
    </section>
  );
};

export default Cultivars;
