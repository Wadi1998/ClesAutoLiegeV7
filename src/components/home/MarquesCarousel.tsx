'use client';

import React from 'react';
import { marques } from '@/lib/data/marques';

export const MarquesCarousel: React.FC = () => {
  // Dupliquer les marques pour un effet de carousel infini
  const duplicatedMarques = [...marques, ...marques];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-light to-white dark:from-blue-dark dark:to-blue-medium overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4 text-blue-dark dark:text-white">
          Toutes Marques Prises en Charge
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Plus de 50 marques automobiles • Expertise toutes gammes
        </p>

        {/* Carousel infini */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {duplicatedMarques.map((marque, index) => (
                <div
                  key={`${marque.id}-${index}`}
                  className="flex-shrink-0 px-6 py-4"
                >
                  <div className="bg-white dark:bg-blue-medium/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[140px] flex items-center justify-center">
                    <span className="text-lg font-semibold text-blue-dark dark:text-white whitespace-nowrap">
                      {marque.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient fade sur les côtés */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-light dark:from-blue-dark to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-blue-medium to-transparent pointer-events-none"></div>
        </div>

        {/* Texte sous le carousel */}
        <p className="text-center mt-12 text-lg text-gray-700 dark:text-gray-300 font-medium">
          Et bien d'autres marques ! <span className="text-orange-primary">Toutes les marques automobiles sont prises en charge.</span>
        </p>

        {/* Badge certifications */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2">
            <span className="text-orange-primary font-semibold">✓ Équipement Professionnel</span>
          </div>
          <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2">
            <span className="text-orange-primary font-semibold">✓ Technicien Certifié</span>
          </div>
          <div className="bg-orange-primary/10 border border-orange-primary rounded-full px-6 py-2">
            <span className="text-orange-primary font-semibold">✓ Véhicules Récents & Anciens</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
