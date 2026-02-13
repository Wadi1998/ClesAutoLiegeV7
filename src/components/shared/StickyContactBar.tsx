'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/lib/hooks/useMediaQuery';

export const StickyContactBar: React.FC = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;

  const phone = process.env.NEXT_PUBLIC_PHONE || '0493447205';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '32493447205';
  const whatsappMessage = encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Bonjour, j'ai besoin d'une intervention pour..."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 p-3 bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-200 dark:border-gray-700 no-print">
      {/* Bouton Téléphone */}
      <a
        href={`tel:${phone}`}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-primary text-white font-semibold rounded-full shadow-lg hover:bg-orange-hover transition-all duration-300 active:scale-95"
        aria-label="Appeler"
      >
        <Phone className="w-5 h-5" />
        <span>Appeler</span>
      </a>

      {/* Bouton WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-whatsapp text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 active:scale-95"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
