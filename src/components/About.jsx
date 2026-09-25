import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Smile } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Heart size={18} />, text: 'Service attentionné' },
    { icon: <Sparkles size={18} />, text: 'Qualité premium' },
    { icon: <ShieldCheck size={18} />, text: 'Hygiène & Sécurité' },
    { icon: <Smile size={18} />, text: 'Experts qualifiés' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">À Propos de Nous</h2>
        <p className="section-subtitle">
          Découvrez l'histoire de notre institut de beauté et notre engagement envers votre bien-être.
        </p>

        <div className="about-grid">
          {/* Left side: Image & Badge */}
          <motion.div 
            className="about-img-container logo-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-logo-wrapper">
              <img
                src="/assets/logo.png"
                alt="Logo Le Printemps"
                className="about-logo"
              />
            </div>
          </motion.div>

          {/* Right side: Description */}
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Votre havre de paix à Jéricho</h3>
            <p>
              Depuis notre création, <strong>Le Printemps PA & Lumière</strong> s'efforce de réinventer l'expérience du soin et du bien-être. Niché au cœur de Jéricho, notre institut offre un espace unique d'évasion où le temps semble s'arrêter.
            </p>
            <p>
              Nous croyons que la beauté est le reflet d'un esprit serein. C'est pourquoi notre équipe d'esthéticiennes et de coiffeurs professionnels met tout en œuvre pour vous offrir des soins hautement personnalisés dans une atmosphère douce, chaleureuse et raffinée.
            </p>

            <div className="about-features">
              {features.map((feat, index) => (
                <div key={index} className="about-feat-item">
                  <div className="about-feat-icon">
                    {feat.icon}
                  </div>
                  <span>{feat.text}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="btn btn-secondary">
              Découvrir nos services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
