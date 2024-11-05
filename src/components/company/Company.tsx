import Image from "next/image";
import React from "react";

interface ICompany {
  companyLogo: string;
}

const Company = ({ companyLogo }: ICompany) => {
  return (
    <article className="relative bg-[#F1F4F7] flex justify-center items-center h-[60px] md:h-[70px] w-[145px] md:w-[160px] p-2 rounded-xl shadow-md border-2 border-white">
      <Image src={companyLogo} height={60} width={80} alt="company logo" />
    </article>
  );
};

export default Company;
