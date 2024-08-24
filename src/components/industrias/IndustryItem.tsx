import Image from "next/image";
import React from "react";

interface IIndustry {
  icon: string;
  title: string;
}

const IndustryItem = ({ title, icon }: IIndustry) => {
  return (
    <div className="flex items-center gap-2 w-full h-full">
      <figure className="relative bg-[#C0DAFF] rounded-lg p-1 h-[50px] w-[50px] flex items-center justify-center overflow-hidden">
        <Image
          src={icon}
          alt=""
          width={50}
          height={50}
          className="object-contain"
        />
      </figure>
      <p>{title}</p>
    </div>
  );
};

export default IndustryItem;
