"use client";
import { SvgIconProps } from "@mui/material";
import React from "react";
import { motion, useInView } from "framer-motion";

interface ITimelineData {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  description: any;
  isHighlighted: boolean;
}

const Timeline = ({
  icon: Icon,
  title,
  description,
  isHighlighted,
}: ITimelineData) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 15 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="ml-5 relative border-s-gray-[#EBEBEB] border-s-4 pb-7 last:border-none max-w-[90%] h-[160px] md:h-[100px]"
    >
      <div className=" ms-6">
        <div className="absolute p-2 bg-[#FFFFFF] w-18 h-18 -start-8">
          <div
            className={`${
              isHighlighted
                ? "bg-[#FFFFFF] !bg-[#0E74FF]  text-white shadow-blue-700/20 border border-blue-700/20"
                : "!text-[#0E74FF] text-[#396FBD] bg-[#FFFFFF]"
            } flex items-center justify-center border-2 drop-shadow-2xl  w-12 h-12 rounded-xl`}
          >
            <Icon className="w-8 h-8 " />
          </div>
        </div>
        <div className="pt-2 pl-8">
          <h3
            className={`flex items-center mb-1 text-lg font-bold ${
              isHighlighted
                ? "!text-[#0E74FF] text-[#396FBD] text-shadow-blue"
                : "text-[#172B4D]   "
            } `}
          >
            {title}
          </h3>
          <p className="text-base md:leading-relaxed text-md font-medium text-[#757575]">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default Timeline;
