"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface IIntegration {
  image: string;
  style?: string;
  delay?: number;
}

const IntegrationItem = ({ image, style, delay }: IIntegration) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, delay }}
      className={`flex justify-center !shadow-lg items-center rounded-xl border border-gray-100 p-4 focus:outline-none ${style} `}
    >
      <figure className="bg-white relative w-full h-[100px] flex justify-center items-center">
        <Image src={image} fill alt="" className="object-contain" />
      </figure>
    </motion.article>
  );
};

export default IntegrationItem;
