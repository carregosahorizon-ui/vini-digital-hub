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
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Vini – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;