import Image from "next/image";
import React from "react";

interface IIndustry {
  icon: string;
  title: string;
}

const IndustryItem = ({ title, icon }: IIndustry) => {
  return (
    <div className="space-y-5 w-full h-full">
      <figure className="relative bg-gray-50 p-3 rounded-lg  h-[50px] w-[50px] flex items-center justify-center overflow-hidden">
        <Image
          src={icon}
          alt=""
          width={50}
          height={50}
          className="object-contain"
        />
      </figure>
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default IndustryItem;
