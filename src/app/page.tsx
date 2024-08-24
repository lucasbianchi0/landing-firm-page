import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import Faqs from "@/components/FAQS/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Industries from "@/components/industrias/Industries";
import Integrations from "@/components/integraciones/Integrations";
import News from "@/components/news/News";
import Steps from "@/components/steps/Steps";

export default function Home() {
  return (
    <main className=" min-h-[100vh]">
      <Header />
      <Steps />
      <Benefits />
      <Banner />
      <Integrations />
      <Industries />
      <News />
      <Faqs />
      <Footer />
    </main>
  );
}
