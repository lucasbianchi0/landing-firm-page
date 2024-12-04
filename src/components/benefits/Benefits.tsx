"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { SvgIconProps } from "@mui/material";
import TextContent from "../reusable/TextContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { beneficios, textoBeneficios } from "@/data/5-beneficios";

const Benefits = () => {
  const col1Ref = useRef<HTMLDivElement | null>(null);
  const [col1Height, setCol1Height] = useState<number>(0);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    const lgBreakpoint = 1024;
    if (screenWidth > lgBreakpoint && col1Ref.current) {
      setCol1Height(col1Ref.current.offsetHeight);
    } else {
      setCol1Height(0);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className="relative w-full sectionStyle">
      <div className="container flex flex-col-reverse items-start gap-10 md:gap-20 lg:flex-row lg:justify-between">
        <div ref={col1Ref}
          className="relative z-10 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
          {beneficios.map((benefit, index) => (
            <BenefitItem
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
        <div className="relative h-full w-full lg:w-[40%]" style={{ height: col1Height || 'auto', }}>
          <article className=" md:sticky md:top-16 md:left-0 md:w-full ">
            <TextContent
              title={textoBeneficios[0].tituto}
              description={textoBeneficios[0].descripcion}
              subtitle={textoBeneficios[0].subtituloSuperior}
              icon={VerifiedOutlinedIcon}
              position="left"
            />
            <Link href="#book-a-call">
              <button className="mt-5 block self-start shine-button cursor-pointer z-[10] px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-base transform transition-all duration-200 ease-in-out text-white text-specialist lg:hover:scale-105 lg:hover:bg-[#25497a]">
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

export default Benefits;

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
        className="text-blue-500"
      />
      <h3 className="py-0 text-lg font-semibold text-black md:text-lg">
        {title}
      </h3>
      <p className="text-base  text-prettymd:text-base text-[#59677E]">
        {description}
      </p>
    </motion.article>
  );
};
