"use client";
import Image from "next/image";
import React from "react";

import { motion, useInView } from "framer-motion";
import Benefits from "@/components/Benefits";
import MemoryTwoToneIcon from "@mui/icons-material/MemoryTwoTone";
import BalanceTwoToneIcon from "@mui/icons-material/BalanceTwoTone";
import AccessibilityNewTwoToneIcon from "@mui/icons-material/AccessibilityNewTwoTone";
import DocumentScannerTwoToneIcon from "@mui/icons-material/DocumentScannerTwoTone";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import { SvgIconProps } from "@mui/material";
import { BiMessageRoundedDetail } from "react-icons/bi";

const Benefits4 = () => {
  const benefits = [
    {
      title: "Transformación Digital",
      description:
        "Transforma tu empresa con soluciones digitales innovadoras que optimizan procesos y mejoran la eficiencia operativa.",
      icon: MemoryTwoToneIcon,
    },
    {
      title: "Validación Jurídica",
      description:
        "Asegura que todos tus documentos y procesos cumplan con los requisitos legales vigentes, protegiendo a tu empresa de riesgos legales.",
      icon: BalanceTwoToneIcon,
    },
    {
      title: "Accesibilidad",
      description:
        "Facilita el acceso y manejo de tus documentos desde cualquier dispositivo, en cualquier lugar, asegurando disponibilidad continua.",
      icon: AccessibilityNewTwoToneIcon,
    },
    {
      title: "Integridad Documental",
      description:
        "Garantiza la integridad, autenticidad y seguridad de tus documentos, evitando alteraciones no autorizadas y manteniendo su valor legal.",
      icon: DocumentScannerTwoToneIcon,
    },
    {
      title: "Integración Multicanal",
      description:
        "Conecta tus procesos a través de múltiples canales y plataformas, asegurando una experiencia fluida y sin interrupciones para tus usuarios.",
      icon: IntegrationInstructionsTwoToneIcon,
    },
    {
      title: "Alto Retorno de Inversión",
      description:
        "Maximiza el retorno de inversión mediante soluciones eficaces y eficientes que impulsan el crecimiento y la rentabilidad de tu empresa.",
      icon: AttachMoneyTwoToneIcon,
    },
  ];

  // const ref = React.useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative w-full bg-[#FEFEFE] sectionStyle">
      <div className="container flex flex-col-reverse items-start md:h-[900px] gap-20 md:flex-row md:justify-between">
        <div className="relative z-10 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
          {/* {benefits.map((benefit, index) => {
            const ref = React.useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true, amount: 0.1 });

            return (
              <motion.article
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                key={index}
                className="flex flex-col justify-center w-full gap-2 p-6 text-left bg-white border rounded-lg shadow-lg md:p-8 shadow-blue-700/20 border-blue-700/20 md:border-zinc-100 md:border-2 md:hover:border-blue-700/20 md:hover:shadow-xl md:hover:shadow-blue-700/20"
              >
                <benefit.icon
                  style={{ fontSize: "2.8rem" }}
                  className="text-[#006BFC]"
                />
                <h3 className="py-0 text-lg font-semibold text-black md:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-base leading-tight text-pretty text-zinc-400">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })} */}
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
        <div className="relative h-full w-full md:w-[40%] ">
          <article className="md:sticky md:top-0 md:left-0 md:w-full ">
            <div className="flex items-center gap-3 md:flex-row-reverse md:justify-start">
              <Image src="/tituloPasos.png" alt="tit" height={60} width={60} />
              <p className="text-right text-[hsl(215,76%,73%)] font-bold">
                Lorem ipsum
              </p>
            </div>

            <h2 className="text-[44px] text-left md:text-[56px] md:text-right title ">
              <span className="text-[#172B4D] w-full">Beneficios</span>
              <span
                style={{
                  background: "linear-gradient(to top, #000000, #4C96FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Lorem, ipsum dolor.
              </span>
            </h2>
            <div className="text-left md:text-right text-description">
              <p>
                La firma biométrica ofrece una serie de beneficios clave que la
                han convertido en una opción cada vez más popular en sectores
                como la banca, seguros, medicina y telecomunicaciones. Uno de
                los principales beneficios es la seguridad: al utilizar
                características biométricas únicas, como la huella dactilar o la
                forma de la firma, se reduce significativamente el riesgo de
                fraude o suplantación de identidad.
              </p>

              <span className="inline-flex gap-3 mt-20 py-2 px-5 bg-[#2A5189] text-white rounded-lg md:justify-end items-center">
                <BiMessageRoundedDetail className="h-[30px] w-[30px]" />
                <span className="text-lg font-semibold">
                  Hablar con especialista
                </span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Benefits4;

interface benefitProps {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  description: string;
}

const BenefitItem = ({ icon: Icon, title, description }: benefitProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      // key={index}
      className="flex flex-col justify-center w-full gap-2 p-6 text-left bg-white border rounded-lg shadow-lg md:p-8 shadow-blue-700/20 border-blue-700/20 md:border-zinc-100 md:border-2 md:hover:border-blue-700/20 md:hover:shadow-xl md:hover:shadow-blue-700/20"
    >
      <Icon style={{ fontSize: "2.8rem" }} className="text-[#006BFC]" />
      <h3 className="py-0 text-lg font-semibold text-black md:text-lg">
        {title}
      </h3>
      <p className="text-base leading-tight text-pretty text-zinc-400">
        {description}
      </p>
    </motion.article>
  );
};
