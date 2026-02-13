'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, categories, GalleryImage } from '@/lib/data/gallery';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === 'tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (lightboxIndex < filteredImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
      setSelectedImage(filteredImages[lightboxIndex + 1]);
    }
  };

  const prevImage = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
      setSelectedImage(filteredImages[lightboxIndex - 1]);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2 mb-6">
            <Camera className="w-5 h-5 text-orange-primary" />
            <span className="text-orange-primary font-semibold">Portfolio</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-blue-dark dark:text-white">
            Mes Interventions en Photos
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez quelques exemples de mes interventions dans la région de Liège. 
            Chaque photo témoigne de mon professionnalisme et de la qualité de mon travail.
          </p>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-orange-primary text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-primary/10 hover:text-orange-primary'
                }`}
              >
                {cat.label} <span className="text-sm opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille d'images */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(image)}
                className="group relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Placeholder visuel */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {image.placeholder.split(':')[0]}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {image.placeholder.split(':')[1]}
                  </p>
                </div>

                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-orange-primary" />
                    <span className="text-orange-primary text-sm font-semibold">
                      Voir en grand
                    </span>
                  </div>
                </div>

                {/* Badge catégorie */}
                <div className="absolute top-4 right-4 bg-orange-primary text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {categories.find(c => c.value === image.category)?.label}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note sur les vraies photos */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 max-w-2xl">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <strong className="text-blue-600 dark:text-blue-400">📸 Photos à venir :</strong> 
              {' '}Les images affichées sont des placeholders. Des photos réelles de mes interventions 
              seront ajoutées prochainement pour vous montrer concrètement la qualité de mon travail.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Bouton précédent */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Bouton suivant */}
            {lightboxIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Contenu lightbox */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
            >
              {/* Image (placeholder) */}
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center p-12">
                <div className="text-8xl mb-6">
                  {selectedImage.placeholder.split(':')[0]}
                </div>
                <p className="text-white text-lg text-center">
                  {selectedImage.placeholder.split(':')[1]}
                </p>
              </div>

              {/* Informations */}
              <div className="p-6 bg-gray-800">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <span className="bg-orange-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {categories.find(c => c.value === selectedImage.category)?.label}
                  </span>
                </div>
                <p className="text-gray-300 text-lg">{selectedImage.description}</p>
                <div className="mt-4 text-sm text-gray-400">
                  Photo {lightboxIndex + 1} sur {filteredImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
