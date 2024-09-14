"use client";
import React from "react";
import TextContent from "../reusable/TextContent";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";
import { useInView, motion } from "framer-motion";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

interface IqaProps {
  summary: string;
  description: string;
  delay: number;
}

const Faqs3 = () => {
  const faqs = [
    {
      summary: "¿Qué es la transformación digital?",
      description:
        "La transformación digital implica la integración de tecnología digital en todas las áreas de una empresa, cambiando fundamentalmente cómo operas y brindas valor a los clientes.cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
    },
    {
      summary: "¿Cómo se valida la autenticidad de los documentos?",
      description:
        "La validación de documentos se realiza a través de procesos jurídicos que aseguran el cumplimiento de todas las normativas legales aplicables. cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
    },
    {
      summary: "¿Qué es la accesibilidad digital?",
      description:
        "La accesibilidad digital se refiere a la capacidad de un sistema para ser usado por cualquier persona, independientemente de sus capacidades técnicas o físicas. cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
    },
    {
      summary: "¿Qué es la integridad documental?",
      description:
        "La integridad documental asegura que un documento no ha sido alterado desde su creación, manteniendo su autenticidad y confiabilidad. cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
    },
  ];

  return (
    <div className="container sectionStyle !min-h-0">
      <div className="flex flex-col space-y-2 ">
        <TextContent
          title={"Preguntas frecuentes "}
          subtitle="Especialistas"
          icon={QuestionAnswerOutlinedIcon}
          position={"center"}
        />
      </div>
      <div className="grid grid-cols-1 mt-6 md:mt-14 space-y-7 md:gap-20 md:space-y-0 md:grid-cols-2 md:gap-y-16">
        {faqs.map((fq, index) => (
          // <motion.article
          //   ref={ref}
          //   initial={{ opacity: 0, y: 15 }}
          //   animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 15 }}
          //   transition={{ duration: 0.5, delay: 0.5 }}
          //   className="space-y-1 md:space-y-3"
          //   key={index}
          // >
          //   <h4 className="text-xl font-semibold text-[#2A5189]">
          //     {fq.summary}
          //   </h4>
          //   <p className="text-zinc-500 md:leading-relaxed">{fq.description}</p>
          // </motion.article>
          <QA
            key={index}
            summary={fq.summary}
            description={fq.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs3;

const QA = ({ summary, description, delay }: IqaProps) => {
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
      <h4 className="text-xl font-semibold text-[#2A5189]">{summary}</h4>
      <p className="text-zinc-500 md:leading-relaxed">{description}</p>
    </motion.article>
  );
};
