import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageSquare, Check } from 'lucide-react';

const Contact = () => {
  const handleBookingClick = () => {
    const message = encodeURIComponent("Hello, I would like to book an appointment at Le Printemps.");
    window.open(`https://wa.me/2290197921046?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Nous Trouver & Réserver</h2>
        <p className="section-subtitle">
          Situé au cœur de Jéricho, notre institut est facilement accessible. Contactez-nous ou passez nous voir.
        </p>

        <div className="contact-grid">
          {/* Left Column: Contact details */}
          <motion.div 
            className="contact-info-cards"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Address */}
            <div className="glass-card contact-info-card">
              <div className="contact-info-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="contact-info-content">
                <h4>Adresse</h4>
                <p>
                  Rue de l'ancienne station Dovonou,<br />
                  En face de la "Pharmacie Le Nokoué",<br />
                  Jéricho, Cotonou, Bénin
                </p>
                <a 
                  href="https://maps.google.com/?q=Jericho+Cotonou+Pharmacie+Le+Nokoue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#f2824e', fontSize: '0.85rem', fontWeight: '500', textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card contact-info-card">
              <div className="contact-info-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="contact-info-content">
                <h4>Téléphone</h4>
                <p>+229 01 97 92 10 46</p>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card contact-info-card">
              <div className="contact-info-icon-wrapper">
                <Clock size={24} />
              </div>
              <div className="contact-info-content" style={{ width: '100%' }}>
                <h4>Horaires d'ouverture</h4>
                <div className="contact-hours-list">
                  <div className="contact-hours-item highlight">
                    <span>Mardi - Dimanche</span>
                    <span>09:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: WhatsApp Booking Action Card */}
          <motion.div 
            className="contact-booking-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card" style={{ height: '100%', border: '1px solid rgba(37, 211, 102, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
              <h3 className="booking-card-title">Prendre rendez-vous en ligne</h3>
              <p className="booking-card-desc">
                Planifiez votre moment de bien-être en quelques secondes. Cliquez sur le bouton ci-dessous pour nous envoyer directement un message sur WhatsApp.
              </p>

              <div className="booking-features">
                <div className="booking-feature-item">
                  <div className="booking-feature-icon"><Check size={18} /></div>
                  <span>Réponse rapide par notre équipe</span>
                </div>
                <div className="booking-feature-item">
                  <div className="booking-feature-icon"><Check size={18} /></div>
                  <span>Choix flexible de votre créneau horaire</span>
                </div>
                <div className="booking-feature-item">
                  <div className="booking-feature-icon"><Check size={18} /></div>
                  <span>Confirmation instantanée</span>
                </div>
              </div>

              <button onClick={handleBookingClick} className="btn btn-primary whatsapp-large-btn w-full">
                <MessageSquare size={22} fill="currentColor" style={{ marginRight: '8px' }} />
                <span>Réserver sur WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
