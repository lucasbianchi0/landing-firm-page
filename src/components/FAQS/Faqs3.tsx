"use client";
import React from "react";
import TextContent from "../reusable/TextContent";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";
import { useInView, motion } from "framer-motion";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import { SvgIconProps } from "@mui/material";

interface IqaProps {
  summary: string;
  description: string;
  delay: number;
  icon: React.ComponentType<SvgIconProps>;
}

const Faqs3 = () => {
  const faqs = [
    {
      summary: "¿Qué es la transformación digital?",
      description:
        "La transformación digital implica la integración de tecnología digital en todas las áreas de una empresa, cambiando fundamentalmente cómo operas y brindas valor a los clientes.cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
      icon: InventoryOutlinedIcon,
    },
    {
      summary: "¿Cómo se valida la autenticidad de los documentos?",
      description:
        "La validación de documentos se realiza a través de procesos jurídicos que aseguran el cumplimiento de todas las normativas legales aplicables. cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
      icon: InventoryOutlinedIcon,
    },
    {
      summary: "¿Qué es la accesibilidad digital?",
      description:
        "La accesibilidad digital se refiere a la capacidad de un sistema para ser usado por cualquier persona, independientemente de sus capacidades técnicas o físicas. cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
      icon: InventoryOutlinedIcon,
    },
    {
      summary: "¿Qué es la integridad documental?",
      description:
        "La integridad documental asegura que un documento no ha sido alterado desde su creación, manteniendo su autenticidad y confiabilidad. cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
      icon: InventoryOutlinedIcon,
    },
  ];

  return (
    <div className="container sectionStyle mb-14 md:mb-32 !min-h-0 !pt-0">
      <div className="flex flex-col space-y-2 ">
        <TextContent
          title={"Preguntas frecuentes "}
          subtitle="Resuelve dudas"
          icon={QuestionAnswerOutlinedIcon}
          position={"center"}
        />
      </div>
      <div className="grid grid-cols-1 mt-6 md:mt-14 space-y-7 md:gap-20 md:space-y-0 md:grid-cols-2 md:gap-y-16">
        {faqs.map((fq, index) => (
          <QA
            key={index}
            summary={fq.summary}
            description={fq.description}
            delay={index * 0.2}
            icon={fq.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs3;

const QA = ({ summary, description, delay, icon: Icon }: IqaProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 15 }}
      transition={{ duration: 0.5, delay: delay }}
      className="space-y-1 md:space-y-3"
    >
      <div className="flex flex-col lg:flex-row gap-2">
        <Icon className="pt-1 text-[2.625rem] lg:text-[1.5rem] text-[#006BFC] " />
        <div>
          <h4 className="text-xl font-semibold text-[#2A5189]">{summary}</h4>
          <p className="pt-3 text-zinc-500 md:leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.article>
  );
};
