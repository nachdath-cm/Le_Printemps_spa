import React from 'react';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        {/* Col 1: About */}
        <div className="footer-col footer-about">
          <h3>Le Printemps SPA & Lumière</h3>
          <p>
            Votre institut de beauté et spa de confiance à Jéricho. Nous révélons votre beauté naturelle à travers des rituels de soins d'exception.
          </p>
        </div>


        {/* Col 2: Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <MapPin size={18} />
            <span>Jéricho, rue de l'ancienne station Dovonou, soit la rue en face de la Pharmacie Le Nokoué</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} />
            <span>+229 01 97 92 10 46</span>
          </div>
        </div>

        {/* Col 4: Horaires */}
        <div className="footer-col">
          <h4>Horaires</h4>
          <div className="footer-contact-item">
            <Clock size={18} />
            <div>
              <p>Mardi au Dimanche</p>
              <p style={{ color: '#ffffff', fontWeight: '500' }}>09:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 Le Printemps SPA & Lumière. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
