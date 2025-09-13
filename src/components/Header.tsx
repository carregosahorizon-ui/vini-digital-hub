import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Links Úteis do Vini
        </h1>
        <div className="h-1 w-32 mx-auto bg-gradient-button rounded-full shadow-neon animate-gradient-shift bg-[length:200%_100%]" />
      </motion.div>
    </header>
  );
};

export default Header;