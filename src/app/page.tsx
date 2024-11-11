import Footer from "@/components/reusable/Footer";
import Integrations from "@/components/integraciones/Integrations";
import Solutions from "@/components/solutions/Solutions";
import BookACall from "@/components/reusable/BookACall";
import ButtonWsp from "@/components/reusable/ButtonWsp";
import Faqs from "../components/FAQS/Faqs";
import Industries from "@/components/industrias/Industries";
import Benefits from "@/components/benefits/Benefits";
import Header from "@/components/header/Header";
import Steps from "@/components/steps/Steps";

export default function Home() {
  return (
    <main className="relative h-full bg-[#F9F9F9]">
      <div className='absolute z-[999]'>
        <ButtonWsp />
      </div>
      <Header />
      <Solutions />
      <Steps />
      <Benefits />
      <Integrations />
      <Industries />
      <Faqs />
      <BookACall />
      <Footer />
    </main>
  );
}
