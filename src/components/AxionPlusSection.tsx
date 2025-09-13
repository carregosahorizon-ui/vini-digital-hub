import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import viniAvatar from "@/assets/vini-new-avatar.png";
const AxionPlusSection = () => {
  return <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Serviço Exclusivo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Axion Pro</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">Com o Axion Pro, você terá acesso ao meu serviço exclusivo para acelerar resultados no digital com estratégias validadas. Preencha o formulário e dê o próximo passo para transformar o seu negócio.</p>
            
            <Button variant="hero" size="lg" onClick={() => window.open <a href= ( https://form.respondi.app/Mbt058Sv, "_blank")} className="group animate-glow-pulse text-base">
              Agende uma reunião
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Imagem à direita */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <img src={viniAvatar} alt="Vini - Consultor Digital" className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-2 border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-button rounded-full blur-2xl opacity-50" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default AxionPlusSection;
