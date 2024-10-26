import Banner from "@/components/Banner";
import Benefits4 from "@/components/benefits/Benefits4";
import Footer from "@/components/Footer";
import Header3 from "@/components/Header3";
import Industries2 from "@/components/industrias/Industries2";
import Integrations from "@/components/integraciones/Integrations";
import Steps2 from "@/components/steps/Steps2";
import Faqs3 from "../components/FAQS/Faqs3";
import Header4 from "@/components/Header4";
import Solutions from "@/components/solutions/Solutions";
import Steps4 from "@/components/steps/Steps4";
import Solutions2 from "@/components/solutions/Solutions2";
import Steps5 from "@/components/steps/Steps5";
import News3 from "@/components/news/News3";
import StepsDark from "@/components/steps/StepsDark";

export default function Home() {
  return (
    <main className="relative h-full bg-[#F9F9F9]">
      <Header4 />
      <Solutions />
      {/* <Solutions2 /> */}

      <StepsDark />
      {/* <Steps4 /> */}
      <Benefits4 />
      {/* <Banner /> */}
      <Integrations />
      <Industries2 />
      <News3 />
      <Faqs3 />
      <Footer />
    </main>
  );
}
