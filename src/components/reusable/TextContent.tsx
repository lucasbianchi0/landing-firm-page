import { SvgIconProps } from "@mui/material";
import React from "react";

interface IContentProps {
  title: string;
  description?: string;
  subtitle?: string;
  icon?: React.ComponentType<SvgIconProps>;
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
        className={`subtitle flex items-center ${
          position === "left"
            ? ""
            : position === "right"
            ? "md:flex-row-reverse"
            : position === "center"
            ? "md:justify-center"
            : ""
        } gap-3 md:justify-start`}
      >
        {Icon && (
          <Icon
            style={{ fontSize: "1.8rem" }}
            className="text-[#006BFC] bg-transparent !text-[hsl(215,76%,73%)] text-[#396FBD] subtitle-icon-shadow bg-white "
          />
        )}
        {subtitle && (
          <p className="!text-[hsl(215,76%,73%)] font-bold text-[#396FBD]">
            {subtitle}
          </p>
        )}
      </div>

      <h2
        className={`text-4xl md:text-5xl font-medium
          ${
            color === "white"
              ? // ? "!bg-gradient-to-r !from-[#FFFFFF] !to-[#2C2C2C]"
                "text-white"
              : "text-[#0A2540]"
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
