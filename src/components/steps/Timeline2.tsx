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

const Timeline2 = ({
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
      className={`overflow-hidden relative border p-3 border-zinc-200 rounded-2xl shadow-lg flex w-full z-50 ${isHighlighted
        ? "bg-gradient-to-r from-blue-600 to-blue-800 shine-button "
        : "bg-white lg:hover:border-blue-700/20 md:hover:shadow-lg md:hover:shadow-blue-700/20"
        }`}
    >
      <div
        className={`${isHighlighted ? "text-white" : "!text-[#0E74FF] text-[#396FBD]  "
          } flex items-center justify-center drop-shadow-xl `}
      >
        <Icon className="w-12 h-12 " />
      </div>

      <div className=" pl-3 cursor-pointer">
        <h3
          className={`flex items-center mb-1 text-lg font-bold ${isHighlighted
            ? "!text-white text-[#396FBD] text-shadow-blue"
            : "text-blue-900"
            } `}
        >
          {title}
        </h3>
        <p>
          {description.map((part, index) => (
            <span
              key={index}
              className={`text-sm md:text-base md:leading-relaxed text-[#59677E] ${isHighlighted ? "!text-white" : ""
                } `}
            >
              {part.text}
            </span>
          ))}
        </p>
      </div>
    </motion.article>
  );
};

export default Timeline2;
