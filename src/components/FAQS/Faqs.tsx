"use client";
import React from "react";
import TextContent from "../reusable/TextContent";
import { useInView, motion } from "framer-motion";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { SvgIconProps } from "@mui/material";
import { faqs } from "@/data/8-faqs";

interface IqaProps {
  summary: string;
  description: string;
  delay: number;
  icon: React.ComponentType<SvgIconProps>;
}

const Faqs = () => {


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

export default Faqs;

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
