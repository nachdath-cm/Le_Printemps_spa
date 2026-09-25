import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const galleryItems = [
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.15.29.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.15.47.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.16.05.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.21.40.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.22.25.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.22.40.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.23.56.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.24.08.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.25.31.jpeg',
  '/assets/WhatsApp%20Image%202026-09-25%20at%2012.27.25.jpeg'
];

const AUTO_ADVANCE_DELAY = 5000;

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const goTo = (index) => {
    const nextIndex = (index + galleryItems.length) % galleryItems.length;
    const distance = (nextIndex - current + galleryItems.length) % galleryItems.length;

    setDirection(distance > galleryItems.length / 2 ? -1 : 1);
    setCurrent(nextIndex);
  };

  const goPrevious = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setDirection(1);
      setCurrent((previous) => (previous + 1) % galleryItems.length);
    }, AUTO_ADVANCE_DELAY);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title" className="section-title">Notre galerie</h2>
        <p className="section-subtitle">
          Découvrez l&apos;ambiance et les instants de beauté partagés dans notre institut.
        </p>

        <div
          className="gallery-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Photos de l'institut"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        >
          <div className="gallery-viewport" aria-live="polite">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.figure
                key={galleryItems[current]}
                className="gallery-slide"
                custom={direction}
                initial={{ opacity: 0, x: direction * 45 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -45 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <img
                  src={galleryItems[current]}
                  alt={`Photo ${current + 1} de l'ambiance et des prestations de l'institut`}
                  className="gallery-img"
                  loading={current === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className="gallery-caption">
                  <span>Le Printemps</span>
                  <span>Photo {String(current + 1).padStart(2, '0')}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-control gallery-arrow"
              onClick={goPrevious}
              aria-label="Afficher la photo précédente"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="gallery-control gallery-play"
              onClick={() => setIsPlaying((previous) => !previous)}
              aria-label={isPlaying ? 'Mettre la galerie en pause' : 'Lire la galerie'}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
            </button>
            <button
              type="button"
              className="gallery-control gallery-arrow"
              onClick={goNext}
              aria-label="Afficher la photo suivante"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="gallery-meta">
            <span className="gallery-counter" aria-live="polite">
              {String(current + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
            </span>
            <div className="gallery-dots" role="group" aria-label="Choisir une photo">
              {galleryItems.map((item, index) => (
                <button
                  type="button"
                  key={item}
                  className={`gallery-dot ${current === index ? 'active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`Afficher la photo ${index + 1}`}
                  aria-current={current === index ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
