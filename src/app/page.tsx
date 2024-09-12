import Banner from "@/components/Banner";
import Benefits4 from "@/components/benefits/Benefits4";
import Footer from "@/components/Footer";
import Header3 from "@/components/Header3";
import Industries2 from "@/components/industrias/Industries2";
import Integrations from "@/components/integraciones/Integrations";
import News2 from "@/components/news/News2";
import Steps2 from "@/components/steps/Steps2";
import Faqs3 from "../components/FAQS/Faqs3";
import Header4 from "@/Header4";

export default function Home() {
  return (
    <main className="relative h-full">
      {/* <Header /> */}
      {/* <Header3 /> */}
      <Header4 />
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
      {/* <News /> */}
      {/* <News2 /> */}
      {/* <Faqs2 /> */}
      <Faqs3 />
      <Footer />
    </main>
  );
}
