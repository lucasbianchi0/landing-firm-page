import Image from "next/image";
import React from "react";

interface ICompany {
  companyLogo: string;
}

const Company = ({ companyLogo }: ICompany) => {
  return (
    <article className="bg-[#F1F4F7] p-4 rounded-lg shadow-md  border border-white">
      <Image src={companyLogo} height={50} width={80} alt="company logo" />
    </article>
  );
};

export default Company;
