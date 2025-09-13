import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Users, TrendingUp, ExternalLink } from "lucide-react";

const TikTokSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-neon">
            <Video className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            TikTok do Vini
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Aprenda comigo no TikTok as estratégias que aplico para gerar resultados reais. 
            Conteúdo prático e direto ao ponto.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border"
            >
              <Users className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">+50K Seguidores</h3>
              <p className="text-sm text-muted-foreground">Comunidade engajada</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border"
            >
              <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Conteúdo Diário</h3>
              <p className="text-sm text-muted-foreground">Dicas práticas sempre</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border"
            >
              <Video className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Cases Reais</h3>
              <p className="text-sm text-muted-foreground">Resultados comprovados</p>
            </motion.div>
          </div>
          
          <Button 
            variant="neon" 
            size="lg"
            onClick={() => window.open("https://tiktok.com/@vini", "_blank")}
          >
            Ver no TikTok
            <ExternalLink className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TikTokSection;