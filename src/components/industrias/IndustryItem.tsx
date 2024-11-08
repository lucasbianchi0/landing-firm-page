"use client";
import { SvgIconProps } from "@mui/material";
import React from "react";
import { motion, useInView } from "framer-motion";

type IndustryItemProps = {
  title: string;
  icon?: React.ComponentType<SvgIconProps>;
  color?: string;
  delay: number;
  onClick?: () => void;
};

const IndustryItem = ({
  title,
  icon: Icon,
  color,
  delay,
  onClick
}: IndustryItemProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      className="cursor-pointer card flex items-center h-full p-4 lg:p-8 transition border-none shadow-lg bg-zinc-900/80 rounded-3xl group"
    >
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay }}
        onClick={onClick}
        className="flex flex-col items-center justify-center w-full h-full space-y-2 "
      >
        <div className="relative flex flex-col items-center justify-center w-full">
          <Icon className="text-[3rem] z-10 text-zinc-400 group-hover:text-blue-500" />
        </div>
        <p className="mt-4 font-semibold text-white group-hover:text-blue-500">
          {title}
        </p>

      </motion.article>
      {/* <button className="card-button">More info</button> */}

    </div>
  );
};

export default IndustryItem;
