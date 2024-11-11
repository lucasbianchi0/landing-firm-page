"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { SvgIconProps } from "@mui/material";
import TextContent from "../reusable/TextContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { beneficios } from "@/data/beneficios";

const Benefits = () => {

  return (
    <section className="relative w-full sectionStyle md:!py-10 ">
      <div className="container flex flex-col-reverse items-start md:h-[900px] gap-10 md:gap-20 md:flex-row md:justify-between">
        <div className="relative z-10 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
          {beneficios.map((benefit, index) => (
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
