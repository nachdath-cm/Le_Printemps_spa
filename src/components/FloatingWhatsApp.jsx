import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous à l'institut Le Printemps.");
  const url = `https://wa.me/2290197921046?text=${message}`;

  return (
    <a 
      href={url} 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Prendre rendez-vous sur WhatsApp"
    >
      <MessageSquare fill="currentColor" />
    </a>
  );
};

export default FloatingWhatsApp;
