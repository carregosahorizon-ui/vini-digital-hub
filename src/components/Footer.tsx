import { Instagram, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/vini",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/5511999999999",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/vini",
    },
  ];

  return (
    <footer className="bg-gradient-card border-t border-border py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary hover:shadow-neon transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Vini – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;