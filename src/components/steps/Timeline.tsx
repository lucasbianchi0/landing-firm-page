import { SvgIconProps } from "@mui/material";
import React from "react";

interface ITimelineData {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  description: any;
}

const Timeline = ({ icon: Icon, title, description }: ITimelineData) => {
  return (
    <ol className="ml-auto relative border-s border-s-gray-[#EBEBEB] border-s-4 pb-7 last:border-none max-w-[90%] h-[160px] md:h-[120px]">
      <li className=" ms-6">
        <div className="absolute p-2 bg-white w-22 h-22 -start-9">
          <div className="flex items-center justify-center bg-white border border-2 shadow-xl w-14 h-14 rounded-xl">
            <Icon className="w-8 h-8 text-[#006BFC] " />
          </div>
        </div>
        <div className="pt-2 pl-10">
          <h3 className="flex items-center mb-1 text-lg font-semibold text-[#172B4D] ">
            {title}
          </h3>
          <p className="text-base text-md font-medium text-[#757575]">
            {description}
          </p>
        </div>
      </li>
    </ol>
  );
};

export default Timeline;
