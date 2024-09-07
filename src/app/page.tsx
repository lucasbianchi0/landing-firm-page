import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import Benefits4 from "@/components/benefits/Benefits4";
import Benefits2 from "@/components/Benefits2";
import Benefits3 from "@/components/Benefits3";
import CompanyList from "@/components/CompanyList";
import DesignRight from "@/components/Design";
import Design from "@/components/Design";
import DesignLeft from "@/components/DesignLeft";
import Faqs from "@/components/FAQS/Faqs";
import Faqs2 from "@/components/FAQS/Faqs2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Industries from "@/components/industrias/Industries";
import Industries2 from "@/components/industrias/Industries2";
import Integrations from "@/components/integraciones/Integrations";
import Metrics2 from "@/components/Metrics2";
import News from "@/components/news/News";
import Steps from "@/components/steps/Steps";
import Steps2 from "@/components/steps/Steps2";
import Testing from "@/components/Testing";

export default function Home() {
  return (
    <main className="relative h-full">
      {/* <Header /> */}
      <Header3 />
      {/* <div className=" relative bg-[#E4EDF7] ">
        <Header2 />
        <Metrics2 />
      </div>
      <CompanyList /> */}
      {/* <Steps /> */}
      <Steps2 />
      {/* <Benefits /> */}
      {/* <div className="relative z-10 overflow-x-clip"> */}
      {/* <Benefits /> */}
      <Benefits4 />
      {/* <DesignRight /> */}
      {/* <DesignLeft /> */}
      {/* </div> */}

      <Banner />
      <Integrations />
      {/* <Industries /> */}
      <Industries2 />
      <News />
      <Faqs2 />
      <Footer />
      <Testing />
    </main>
  );
}
