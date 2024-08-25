import Image from "next/image";
import React from "react";
import Company from "./company/Company";

const CompanyList = () => {
  const companyLogos = [
    "/logos/accentureLOGO.png",
    "/logos/accentureLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
    "/logos/bancocredicoopLOGO.png",
    "/logos/bancocredicoopLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
  ];
  return (
    <div className="stock-ticker mt-12">
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
