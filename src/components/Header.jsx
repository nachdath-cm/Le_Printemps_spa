import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // WhatsApp click handler
  const handleBookingClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous à l'institut Le Printemps.");
    window.open(`https://wa.me/2290197921046?text=${message}`, '_blank');
  };

  return (
    <header className={isShrunk ? 'shrink' : ''}>
      <div className="nav-container">
        <a href="#home" className="logo-link" onClick={closeMenu}>
          <span className="nav-logo">Le Printemps SPA & Lumière</span>
        </a>

        {/* Desktop & Mobile Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" onClick={closeMenu}>Accueil</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>À Propos</a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
          
          {/* Mobile CTA */}
          <li className="nav-item nav-cta-mobile" style={{ display: 'none' }}>
            <button className="btn btn-primary" onClick={() => { closeMenu(); handleBookingClick(); }}>
              <PhoneCall size={18} />
              <span>Réserver</span>
            </button>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <button className="btn btn-primary" onClick={handleBookingClick}>
            <PhoneCall size={18} />
            <span>Réserver</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
