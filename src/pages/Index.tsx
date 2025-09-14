import Header from "@/components/Header";
import AxionPlusSection from "@/components/AxionPlusSection";
import TikTokSection from "@/components/TikTokSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AxionPlusSection />
      <TikTokSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
