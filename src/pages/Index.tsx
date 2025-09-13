import Header from "@/components/Header";
import AxionPlusSection from "@/components/AxionPlusSection";
import ConsultoriaSection from "@/components/ConsultoriaSection";
import TikTokSection from "@/components/TikTokSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AxionPlusSection />
      <ConsultoriaSection />
      <TikTokSection />
      <Footer />
    </div>
  );
};

export default Index;
