import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Users, TrendingUp, ExternalLink } from "lucide-react";
const TikTokSection = () => {
  return <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center">
          
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              TikTok do Vini
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Me siga no TikTok e acompanhe os bastidores, insights e estratégias que aplico no dia a dia para gerar resultados reais.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            
            
            
            
            
          </div>
          
          <Button variant="neon" size="lg" onClick={() => window.open("https://tiktok.com/@vini", "_blank")}>
            Ver meu TikTok
            <ExternalLink className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default TikTokSection;