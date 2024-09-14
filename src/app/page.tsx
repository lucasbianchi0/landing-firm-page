import Banner from "@/components/Banner";
import Benefits4 from "@/components/benefits/Benefits4";
import Footer from "@/components/Footer";
import Header3 from "@/components/Header3";
import Industries2 from "@/components/industrias/Industries2";
import Integrations from "@/components/integraciones/Integrations";
import News2 from "@/components/news/News2";
import Steps2 from "@/components/steps/Steps2";
import Faqs3 from "../components/FAQS/Faqs3";
import Header4 from "@/components/Header4";
import Steps3 from "@/components/steps/Steps3hidden";

export default function Home() {
  return (
    <main className="relative h-full">
      <Header4 />
      <Steps2 />
      <Benefits4 />
      <Banner />
      <Integrations />
      <Industries2 />
      <Faqs3 />
      <Footer />
    </main>
  );
}
