'use client';
import React, { useState } from 'react';
import TextContent from '../reusable/TextContent';
import {
  LocalShippingRounded,
  InventoryOutlined,
} from '@mui/icons-material';

import IndustryItem from './IndustryItem';
import IndustryBenefits from './IndustryBenefits';
import { SvgIconProps } from '@mui/material';
import { industrias, textoIndustrias } from '@/data/7-industrias';

interface Industry {
  title: string;
  icon: React.ComponentType<SvgIconProps>;
  color: string;
  hoverClass: string;
  beneficios: string[];
}


const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>({
    title: "Logística",
    icon: LocalShippingRounded,
    color: "#A3C6FF",
    hoverClass: "industry-item-hover-blue-soft",
    beneficios: [
      "Identifica a los transportistas y personal logístico sin demoras, mejorando la eficiencia operativa.",
      "Asegura la entrega correcta al destinatario gracias a la identificación biométrica en tiempo real.",
      "Minimiza el riesgo de fraude en la cadena de suministro al utilizar datos biométricos para verificar la identidad.",
    ],
  });

  const handleIndustryClick = (industry: Industry) => {
    setSelectedIndustry(industry);
  };

  return (
    <section className="relative z-50 bg-[#1D293B] lg:min-h-[90vh] overflow-hidden sectionStyle sectionStylePadding">
      <div className="absolute inset-0 bg-black/60" style={{ zIndex: -5 }} />
      <video
        className="hidden md:block absolute top-0 left-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted
        preload="auto"
        style={{
          animation: 'slowVideo 60s linear infinite',
          WebkitAnimation: 'slowVideo 60s linear infinite',
        }}
      >
        <source src="/background1.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="container">

        <div className="flex flex-col-reverse gap-5 md:gap-20 md:grid grid-cols-2 md:justify-between">
          <div className="grid grid-cols-2 gap-4 mt-10 md:mt-0 md:grid-cols-3 h-full">
            {industrias.map((industry, index) => (
              <IndustryItem
                key={index}
                title={industry.title}
                icon={industry.icon}
                color={industry.color}
                delay={index * 0.2}
                onClick={() => handleIndustryClick(industry)}
              />
            ))}
          </div>
          <div className="z-10 flex flex-col w-full space-y-4 md:items-end">
            <div className="z-10 flex flex-col w-full md:w-full space-y-4  mb-8">
              <TextContent
                title={`${selectedIndustry?.title} `}
                subtitle={textoIndustrias[0].subtituloSuperior}
                icon={InventoryOutlined}
                position="left"
                color="white"
                industrySection={true}
              />
            </div>
            {selectedIndustry && (

              <IndustryBenefits selectedIndustry={selectedIndustry} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
