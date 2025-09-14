import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Instagram do Vini
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Acompanhe meu Instagram para dicas diárias, cases de sucesso e conteúdo exclusivo sobre marketing digital e crescimento de negócios.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-card border border-border">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Conteúdo diário sobre estratégias digitais</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Stories interativos com dicas práticas</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border">
              <Instagram className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Lives semanais com Q&A ao vivo</p>
            </div>
          </div>
          
          <Button
            variant="neon"
            size="lg"
            onClick={() => window.open("https://www.instagram.com/vinicarreg", "_blank")}
          >
            Seguir no Instagram
            <ExternalLink className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;