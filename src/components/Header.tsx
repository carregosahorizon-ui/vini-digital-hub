import { motion } from "framer-motion";
const Header = () => {
  return <header className="relative overflow-hidden bg-gradient-hero px-0 my-0 py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 mx-0" />
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="container relative z-10 text-center">
        <h1 className="text-3xl mb-4 text-muted-foreground text-center font-medium">
          Links do Vini
        </h1>
        <div className="h-1 w-32 mx-auto bg-gradient-button rounded-full shadow-neon animate-gradient-shift bg-[length:200%_100%]" />
      </motion.div>
    </header>;
};
export default Header;