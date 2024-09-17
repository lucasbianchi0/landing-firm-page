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
import Solutions from "@/components/solutions/Solutions";
import Steps4 from "@/components/steps/Steps4";
import Solutions2 from "@/components/solutions/Solutions2";

export default function Home() {
  return (
    <main className="relative h-full">
      <Header4 />
      <Solutions />
      {/* <Solutions2 /> */}

      <Steps2 />
      {/* <Steps4 /> */}
      <Benefits4 />
      <Banner />
      <Integrations />
      <Industries2 />
      {/* <News2 /> */}
      <Faqs3 />
      <Footer />
    </main>
  );
}
