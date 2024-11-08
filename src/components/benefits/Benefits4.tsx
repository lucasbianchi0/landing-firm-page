"use client";
import Image from "next/image";
import React from "react";
import { AiFillAmazonCircle } from "react-icons/ai";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import Benefits from "@/components/Benefits";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { SvgIconProps } from "@mui/material";
import { BiMessageRoundedDetail } from "react-icons/bi";
import TextContent from "../reusable/TextContent";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Benefits4 = () => {
  const benefits = [
    {
      title: "Transformación Digital",
      description:
        "Transforma tu empresa con soluciones digitales innovadoras que optimizan procesos y mejoran la eficiencia operativa.",
      icon: MemoryRoundedIcon,
    },
    {
      title: "Validación Jurídica",
      description:
        "Asegura que todos tus documentos y procesos cumplan con los requisitos legales vigentes, protegiendo a tu empresa de riesgos legales.",
      icon: BalanceRoundedIcon,
    },
    {
      title: "Accesibilidad",
      description:
        "Facilita el acceso y manejo de tus documentos desde cualquier dispositivo, en cualquier lugar, asegurando disponibilidad continua.",
      icon: AccessibilityNewRoundedIcon,
    },
    {
      title: "Integridad Documental",
      description:
        "Garantiza la integridad, autenticidad y seguridad de tus documentos, evitando alteraciones no autorizadas y manteniendo su valor legal.",
      icon: DocumentScannerRoundedIcon,
    },
    {
      title: "Integración Multicanal",
      description:
        "Conecta tus procesos a través de múltiples canales y plataformas, asegurando una experiencia fluida y sin interrupciones para tus usuarios.",
      icon: IntegrationInstructionsRoundedIcon,
    },
    {
      title: "Alto Retorno de Inversión",
      description:
        "Maximiza el retorno de inversión mediante soluciones eficaces y eficientes que impulsan el crecimiento y la rentabilidad de tu empresa.",
      icon: AttachMoneyRoundedIcon,
    },
  ];

  // const ref = React.useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative w-full sectionStyle md:!py-10 ">
      <div className="container flex flex-col-reverse items-start md:h-[900px] gap-10 md:gap-20 md:flex-row md:justify-between">
        <div className="relative z-10 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
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
          <article className="md:sticky md:top-16 md:left-0 md:w-full ">
            <TextContent
              title={"Beneficios"}
              description={
                "La firma biométrica ofrece una serie de beneficios clave que la han convertido en una opción cada vez más popular en sectores como la banca, seguros, medicina y telecomunicaciones. Uno de los principales beneficios es la seguridad: al utilizar características biométricas únicas. "
              }
              subtitle={"Ventajas clave"}
              icon={VerifiedOutlinedIcon}
              position="left"
            />
            <Link href="#book-a-call">
              <button className="mt-5 block self-start shine-button cursor-pointer z-[10] mt-10  px-5 py-2.5   bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-base transform transition-all duration-200 ease-in-out  text-white text-specialist lg:hover:scale-105 lg:hover:bg-[#25497a]">
                Más información
                <ChevronRightIcon />
              </button>
            </Link>
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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 15 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col justify-center w-full gap-2 p-6 text-left bg-white border rounded-[18px] shadow-lg md:p-8 shadow-blue-700/20 border-blue-700/20 md:border-zinc-100 md:border-2 md:hover:border-blue-700/20 md:hover:shadow-xl md:hover:shadow-blue-700/20"
    >
      <Icon
        style={{ fontSize: "2.8rem" }}
        className="!text-blue-500 text-[#006BFC] text-[#396FBD]"
      />
      <h3 className="py-0 text-lg font-semibold text-black md:text-lg">
        {title}
      </h3>
      <p className="text-base  text-pretty text-zinc-400  md:text-base !text-[#59677E]">
        {description}
      </p>
    </motion.article>
  );
};
