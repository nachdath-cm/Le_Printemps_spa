import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "Vraiment,le printemps, c'est juste de la professionnalisme au bout des doigts !",
      name: "Sébastien Kpossou",
      role: "Client régulier",
      avatar: "SB"
    },
    {
      quote: "Excellent accueil. Beau cadre.",
      name: "charaf deen Osseni",
      role: "Client régulier",
      avatar: "CD"
    },
    {
      quote: "Accueil, massage et pédicure avec soin et bienveillance",
      name: "Imelda Dagba",
      role: "Cliente régulière",
      avatar: "ID"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials-section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="section-title">Ce que disent nos clients</h2>
        <p className="section-subtitle">
          Découvrez les avis de nos clients sur la qualité de nos soins et notre accueil.
        </p>

        <div className="testimonials-slider">
          <div className="glass-card testimonial-card" style={{ backgroundColor: '#faf6f2', border: '1px solid rgba(242, 130, 78, 0.15)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="testimonial-quote">
                  “ {testimonials[current].quote} ”
                </div>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonials[current].avatar}
                  </div>
                  <div className="testimonial-name">
                    {testimonials[current].name}
                  </div>
                  <div className="testimonial-role">
                    {testimonials[current].role}
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${current === index ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
