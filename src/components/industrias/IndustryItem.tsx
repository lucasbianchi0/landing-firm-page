"use client";
import { SvgIconProps } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";

type IndustryItemProps = {
  title: string;
  icon: React.ComponentType<SvgIconProps>;
  color: string;
  delay: number;
};

const IndustryItem = ({
  title,
  icon: Icon,
  color,
  delay,
}: IndustryItemProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div
      className="flex items-center h-full p-4 transition border-none shadow-lg bg-zinc-900 rounded-xl hover:shadow-xl hover:border-blue-700/20 hover:shadow-blue-700/20 group"
      //   style={{ border: `2px solid ${industry.color}` }}
    >
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center justify-center w-full h-full space-y-2 hover:text-blue-600 "
      >
        <div className="relative flex flex-col items-center justify-center w-full">
          <Icon className="text-[3rem] z-10 text-zinc-400 group-hover:text-blue-600 " />
        </div>
        <p className="mt-4 font-semibold text-white group-hover:text-blue-600">
          {title}
        </p>
        <p className="text-[#006BFC] text-sm group-hover:text-white">Ver más</p>
      </motion.article>
    </div>
  );
};

export default IndustryItem;
