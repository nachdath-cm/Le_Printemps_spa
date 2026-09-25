import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';

const Hero = () => {
  const handleBookingClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous à l'institut Le Printemps.");
    window.open(`https://wa.me/2290197921046?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* Animated tag */}
        <motion.div 
          className="hero-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={16} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#f2824e' }} />
          Institut de Beauté & Spa
        </motion.div>

        {/* Animated title */}
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Révélez votre beauté naturelle
        </motion.h1>

        {/* Animated description */}
        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Bienvenue au Printemps. Plongez dans notre univers de douceur et de luxe absolu à Jéricho. Soins d'exception, coiffure et bien-être sur mesure.
        </motion.p>

        {/* Animated call to actions */}
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button onClick={handleBookingClick} className="btn btn-primary">
            <Calendar size={18} />
            <span>Prendre RDV</span>
          </button>
          <a href="#services" className="btn btn-white">
            Découvrir nos soins
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
