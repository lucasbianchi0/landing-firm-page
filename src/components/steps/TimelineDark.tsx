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

const TimelineDark = ({
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
      className={`ml-5 relative border-l-[5px] last:border-transparent 
        ${isHighlighted ? "border-l-[#006BFC]" : "border-l-[#EBEBEB]"}
         w-full `}
    >
      <div className=" ms-6">
        <div className="absolute px-2 pt-1 bg-[#25262B] w-8 h-8 -start-8">
          <div
            className={`${
              isHighlighted
                ? "bg-[#FFFFFF] !bg-[#0E74FF] text-white timeline-blue-shadow border border-blue-700/20"
                : "!text-[#0E74FF] text-[#396FBD] bg-[#FEFEFE] timeline-black-shadow timeline-inner-shadow "
            } flex items-center justify-center  drop-shadow-xl  w-8 h-8 rounded-xl `}
          >
            <Icon className="w-5 h-5 " />
          </div>
        </div>
        <div className=" pl-3 cursor-pointer">
          <h3
            className={`flex items-center mb-1 text-lg font-bold ${
              isHighlighted
                ? "!text-[#0E74FF] text-[#396FBD] text-shadow-blue"
                : "text-white"
            } `}
          >
            {title}
          </h3>
          {/* <p className="text-base md:leading-relaxed   text-[#757575] !text-[#59677E]">
            {description}
          </p> */}
          <p>
            {description.map((part, index) => (
              <span
                key={index}
                className={` md:leading-relaxed text-[#59677E] `}
                // ${part.highlight && "!text-[#2A5189]"}

                // style={{ color: part.highlight ? "red" : "inherit" }}
              >
                {part.text}
              </span>
            ))}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default TimelineDark;
