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
          : "md:justify-end md:text-right"
      } `}
    >
      <div
        className={`flex items-center ${
          position === "left" ? "" : "md:flex-row-reverse"
        } gap-3 md:justify-start`}
      >
        <Icon style={{ fontSize: "1.8rem" }} className="text-[#006BFC]" />
        <p className="text-[hsl(215,76%,73%)] font-bold">{subtitle}</p>
      </div>

      <h2
        style={{ whiteSpace: "pre-line" }}
        className={`text-[44px] md:text-[56px] title 
          ${position === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"} 
          from-[#11203A] to-[#4C96FF] bg-clip-text text-transparent 
          ${
            color === "white"
              ? "!bg-gradient-to-r !from-[#FFFFFF] !to-[#2C2C2C]"
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
