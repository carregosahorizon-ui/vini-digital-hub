import { Instagram, MessageCircle, Send } from "lucide-react";
const Footer = () => {
  const socialLinks = [{
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/vini"
  }, {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/5511999999999"
  }, {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/vini"
  }];
  
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Vini – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;