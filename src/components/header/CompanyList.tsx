import Image from "next/image";
import React from "react";
import Company from "../company/Company";

const CompanyList = () => {
  const companyLogos = [
    "/companias/andreani.png",
    "/companias/ford1.png",
    "/companias/bcoProvincia1.png",
    "/companias/volkswagen1.png",
    "/companias/bcoMacro1.png",
    "/companias/bcoChubut1.png",
    "/companias/bcoCreedicop1.png",
    "/companias/segurosAon.png",
    "/companias/andreani.png",
    "/companias/ford1.png",
    "/companias/bcoProvincia1.png",
    "/companias/volkswagen1.png",
    "/companias/bcoMacro1.png",
    "/companias/bcoChubut1.png",
    "/companias/bcoCreedicop1.png",
    "/companias/segurosAON1.png",
  ];
  return (
    <div className="mt-12 stock-ticker">
      <div className="list">
        {companyLogos.map((item, index) => (
          <Company key={index} companyLogo={item} />
        ))}
      </div>

      <div className="list" aria-hidden="true">
        {companyLogos.map((item, index) => (
          <Company key={index} companyLogo={item} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
