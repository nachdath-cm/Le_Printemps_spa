import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Sparkles, Scissors, Calendar } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les soins' },
    { id: 'spa', name: 'Espace Spa' },
    { id: 'beauty', name: 'Soins de Beauté' },
    { id: 'hair', name: 'Coiffure' }
  ];

  const servicesData = [
    {
      category: 'spa',
      title: 'Soins du Spa',
      icon: <Flower2 />,
      items: [
        { name: 'Soins du visage', desc: 'Purifiant, hydratant et éclat instantané pour raviver votre teint.', price: 'À partir de 15 000 FCFA' },
        { name: 'Soins du corps', desc: 'Soins ciblés pour nourrir, raffermir et relaxer la peau.', price: 'À partir de 20 000 FCFA' },
        { name: 'Massages relaxants', desc: 'Détente musculaire profonde aux huiles précieuses et pierres chaudes.', price: 'À partir de 25 000 FCFA' },
        { name: 'Gommages du corps', desc: 'Exfoliation douce pour une peau soyeuse et revitalisée.', price: 'À partir de 18 000 FCFA' },
        { name: 'Gommages du visage', desc: 'Élimination des impuretés et des cellules mortes pour un teint clarifié.', price: 'À partir de 10 000 FCFA' }
      ]
    },
    {
      category: 'beauty',
      title: 'Soins de Beauté',
      icon: <Sparkles />,
      items: [
        { name: 'Manucure prestige', desc: 'Soin complet des mains, cuticules, massage et pose de vernis.', price: 'À partir de 8 000 FCFA' },
        { name: 'Pédicure spa', desc: 'Soin relaxant des pieds, gommage, traitement des callosités et pose.', price: 'À partir de 12 000 FCFA' },
        { name: 'Pose vernis semi-permanent', desc: 'Vernis longue tenue de haute qualité sous lampe UV.', price: 'À partir de 10 000 FCFA' }
      ]
    },
    {
      category: 'hair',
      title: 'Salon de Coiffure',
      icon: <Scissors />,
      items: [
        { name: 'Coiffure Femme', desc: 'Coupes modernes, brushings, tresses, colorations et soins profonds.', price: 'Sur devis / consultation' },
        { name: 'Coiffure Homme', desc: 'Coupes tendances, soins de barbe personnalisés et shampoing.', price: 'À partir de 5 000 FCFA' },
        { name: 'Coiffure Enfant', desc: 'Coupes douces et ludiques adaptées à vos petits bouts de chou.', price: 'À partir de 3 000 FCFA' }
      ]
    }
  ];

  const handleBookingClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite réserver un soin chez Le Printemps.");
    window.open(`https://wa.me/2290197921046?text=${message}`, '_blank');
  };

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(cat => cat.category === activeTab);

  return (
    <section id="services" className="services-section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <p className="section-subtitle">
          Choisissez parmi nos soins essentiels pour votre bien-être et votre beauté.
        </p>

        <div className="services-tabs-container">
          {/* Tabs */}
          <div className="services-tabs">
            {categories.map(tab => (
              <button
                key={tab.id}
                className={`service-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout 
            className="services-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map(cat => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={cat.category}
                  className="glass-card service-card"
                  style={{ backgroundColor: '#faf6f2', border: '1px solid rgba(242, 130, 78, 0.15)' }}
                >
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      {cat.icon}
                    </div>
                    <h3 className="service-card-title">{cat.title}</h3>
                  </div>

                  <ul className="service-list">
                    {cat.items.map((item, index) => (
                      <li key={index} className="service-item">
                        <div className="service-item-name">{item.name}</div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="services-cta-box">
          <button onClick={handleBookingClick} className="btn btn-primary">
            <Calendar size={18} />
            <span>Réserver un service</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
