'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { mascotteBreathing } from '@/lib/utils/animations';

interface MascotteInteractiveProps {
  showBubble?: boolean;
  bubbleDelay?: number;
}

export const MascotteInteractive: React.FC<MascotteInteractiveProps> = ({
  showBubble = true,
  bubbleDelay = 5000,
}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  React.useEffect(() => {
    if (showBubble) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, bubbleDelay);

      const hideTimer = setTimeout(() => {
        setShowMessage(false);
      }, bubbleDelay + 10000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [showBubble, bubbleDelay]);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Easter egg: triple-clic déclenche une animation spéciale
    if (newCount === 3) {
      // Animation confettis
      setClickCount(0);
      // Ouvrir WhatsApp
      const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '32493447205';
      const message = encodeURIComponent("Bonjour, j'ai découvert votre site ! J'ai besoin d'une intervention pour...");
      window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    }
  };

  return (
    <div className="relative">
      {/* Bulle de dialogue */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 whitespace-nowrap"
          >
            <p className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-orange-primary" />
              Besoin d'aide ? Cliquez ici !
            </p>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascotte */}
      <motion.div
        variants={mascotteBreathing}
        initial="initial"
        animate="animate"
        onClick={handleClick}
        className="relative cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src="/mascotte.webp" 
          alt="Mascotte Clef Auto Liège - Expert serrurerie automobile" 
          className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
        />

        {/* Badge "24/7" */}
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg animate-pulse">
          24/7
        </div>
      </motion.div>

      {/* Hint pour easter egg */}
      {clickCount > 0 && clickCount < 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400"
        >
          {clickCount === 1 && "Cliquez encore 2 fois..."}
          {clickCount === 2 && "Encore une fois !"}
        </motion.div>
      )}
    </div>
  );
};
