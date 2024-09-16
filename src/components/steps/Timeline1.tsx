"use client";
import { SvgIconProps } from "@mui/material";
import React from "react";
import { color, motion, useInView } from "framer-motion";

interface ITimelineData {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  description: IDescriptionPart[];
  isHighlighted: boolean;
}

interface IDescriptionPart {
  text: string;
  highlight?: boolean;
}

const Timeline1 = ({
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
      className={`ml-5 relative 
        pb-7  w-full h-[160px] md:h-[40px]`}
    >
      <div className=" ms-6">
        <div className="absolute  -start-5">
          <div
            className={`${
              isHighlighted
                ? " text-[#0E74FF] "
                : "!text-zinc-400 text-[#396FBD]   "
            } flex items-center justify-center  drop-shadow-xl  w-8 h-8 rounded-xl `}
          >
            <Icon className="w-5 h-5 " />
          </div>
        </div>
        <div className="pt-1 pl-1">
          <h3
            className={`flex items-center mb-1 text-base  ${
              isHighlighted
                ? "!text-[#0E74FF]  font-bold text-[#396FBD] text-shadow-blue"
                : "text-[#172B4D]   "
            } `}
          >
            {title}
          </h3>
          {/* <p className="text-base md:leading-relaxed   text-[#757575] !text-[#59677E]">
            {description}
          </p> */}
        </div>
      </div>
    </motion.article>
  );
};

export default Timeline1;
