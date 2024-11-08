import { SvgIconProps } from "@mui/material";
import React from "react";

interface IContentProps {
  title: string;
  description?: string;
  subtitle?: string;
  icon?: React.ComponentType<SvgIconProps>;
  position: string;
  color?: string;
  industrySection?: boolean;
}

const TextContent = ({
  title,
  description,
  subtitle,
  icon: Icon,
  position,
  color,
  industrySection
}: IContentProps) => {
  return (
    <div
      className={`flex flex-col ${position === "left"
        ? "md:justify-start"
        : position === "right"
          ? "md:justify-end md:text-right"
          : position === "center"
            ? "md:justify-center md:text-center"
            : ""
        } `}
    >
      <div
        className={`subtitle flex items-center ${position === "left"
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

      {industrySection ?
        <h2 className="text-4xl md:text-5xl font-medium text-white flex flex-col w-full">
          Especialistas en <span className="custom-gradient-text font-bold  w-full bg-gradient-to-r from-blue-600 to-blue-800 inline-block text-transparent bg-clip-text">{title}</span>
        </h2>
        :
        <h2 className={`text-4xl md:text-5xl font-medium
            ${color === "white"
            ?
            "text-white"
            : "text-[#0A2540]"
          }
        `}
        >
          {title}
        </h2>
      }



      <div
        className={`text-description ${color === "white" ? "!text-white" : ""
          } ${!description ? "hidden" : ""}`}
      >
        <span>{description}</span>
      </div>
    </div >
  );
};

export default TextContent;
