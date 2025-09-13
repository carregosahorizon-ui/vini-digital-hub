import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Building2, TrendingUp } from "lucide-react";
const ConsultoriaSection = () => {
  return <section className="py-20 px-4 bg-gradient-card">
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
      }} className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Minha Consultoria para Empresas</h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Consultoria estratégica personalizada para empresas que querem crescer no 
            digital com processos testados e aplicados pelo Vini.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Estratégias Validadas</h3>
                <p className="text-sm text-muted-foreground">Métodos comprovados no mercado</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Acompanhamento</h3>
                <p className="text-sm text-muted-foreground">Suporte contínuo e personalizado</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Foco em Resultados</h3>
                <p className="text-sm text-muted-foreground">Métricas claras e objetivos definidos</p>
              </div>
            </div>
          </div>
          
          <Button variant="neon" size="lg" className="w-full md:w-auto" onClick={() => window.open("https://calendly.com/vini", "_blank")}>
            <Calendar className="mr-2" />
            Agendar Consultoria
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default ConsultoriaSection;