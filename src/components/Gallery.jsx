import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryItems = [
    {
      img: '/assets/about_spa.png',
      category: 'Massages & Rituels',
      title: 'Détente aux Pierres Chaudes',
      classes: 'row-span-2'
    },
    {
      img: '/assets/hair_salon.png',
      category: 'Coiffure & Visage',
      title: 'Stylisme & Coupe Moderne',
      classes: 'col-span-2'
    },
    {
      img: '/assets/manicure_nail.png',
      category: 'Onglerie & Beauté',
      title: 'Manucure Douceur Orange Pêche',
      classes: ''
    },
    {
      img: '/assets/hero_spa_bg.png',
      category: 'Espace Détente',
      title: 'Cabine de Massage Prestige',
      classes: 'col-span-2'
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Notre Galerie</h2>
        <p className="section-subtitle">
          Découvrez en images l'ambiance apaisante et les créations capillaires ou ongulaires réalisées dans notre institut.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`gallery-item ${item.classes}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <img src={item.img} alt={item.title} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-overlay-cat">{item.category}</span>
                <h3 className="gallery-overlay-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
