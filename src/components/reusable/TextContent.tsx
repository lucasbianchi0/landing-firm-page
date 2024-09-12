import { SvgIconProps } from "@mui/material";
import React from "react";

interface IContentProps {
  title: string;
  description?: string;
  subtitle: string;
  icon: React.ComponentType<SvgIconProps>;
  position: string;
  color?: string;
}

const TextContent = ({
  title,
  description,
  subtitle,
  icon: Icon,
  position,
  color,
}: IContentProps) => {
  return (
    <div
      className={`flex flex-col ${
        position === "left"
          ? "md:justify-start"
          : position === "right"
          ? "md:justify-end md:text-right"
          : position === "center"
          ? "md:justify-center md:text-center"
          : ""
      } `}
    >
      <div
        className={` subtitle flex items-center ${
          position === "left"
            ? ""
            : position === "right"
            ? "md:flex-row-reverse"
            : position === "center"
            ? "md:justify-center"
            : ""
        } gap-3 md:justify-start`}
      >
        <Icon
          style={{ fontSize: "1.8rem" }}
          className="!text-[#006BFC] text-[#396FBD]"
        />
        <p className="text-[hsl(215,76%,73%)] font-bold !text-[#396FBD]">
          {subtitle}
        </p>
      </div>

      <h2
        style={{
          whiteSpace: "pre-line",
          background: "linear-gradient(to top, #000000, #4C96FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        // className={`text-[44px] md:text-[56px] title !text-[#396FBD]
        // className={`text-[44px] md:text-5xl title !text-gray-800
        className={`text-[44px] md:text-5xl title 


          ${position === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"} 
          from-[#11203A] to-[#4C96FF] bg-clip-text text-transparent 
          ${
            color === "white"
              ? // ? "!bg-gradient-to-r !from-[#FFFFFF] !to-[#2C2C2C]"
                "!bg-gradient-to-r !from-[#FFFFFF] !to-[#FFFFFF]"
              : ""
          }
        `}
      >
        {title}
      </h2>

      <div
        className={`text-description ${
          color === "white" ? "!text-white" : ""
        } ${!description ? "hidden" : ""}`}
      >
        <span>{description}</span>
      </div>
    </div>
  );
};

export default TextContent;
