import Image from "next/image";
import React from "react";

interface ICompany {
  companyLogo: string;
}

const Company = ({ companyLogo }: ICompany) => {
  return (
    <article className="bg-[#F1F4F7] flex justify-center items-center h-[3.75rem] w-[8.75rem] p-3 rounded-xl shadow-md border-2 border-white">
      <Image src={companyLogo} height={60} width={80} alt="company logo" />
    </article>
  );
};

export default Company;
