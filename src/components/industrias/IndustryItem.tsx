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
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center w-full h-full space-y-2"
    >
      <div className="relative flex flex-col items-center justify-center w-full ">
        {/* <figure className="relative flex items-center justify-center overflow-hidden rounded-lg bg-black-700 "> */}
        <Icon className="text-[3rem]  z-10 !text-relieve text-zinc-400  hover:text-blue-600" />
        {/* </figure> */}
        {/* <div
          className="absolute  top-1/2 right-1/2  h-[30px] w-[30px] blur-[1rem] z-5"
          style={{ backgroundColor: color }}
        ></div> */}
      </div>
      <p className="mt-4 font-semibold !text-relieve text-white  ">{title}</p>
      <p className="text-[#006BFC] text-sm">Ver más</p>
    </motion.article>
  );
};

export default IndustryItem;
