import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { services } from '@/lib/data/services';
import { PhoneButton } from '@/components/shared/PhoneButton';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 - À propos */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Clef Auto Liège - Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold font-heading">Clef Auto Liège</h3>
                <p className="text-sm text-gray-400">Disponible 24h/24</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Votre expert en serrurerie automobile à Liège. Intervention rapide 24/7 pour tous vos problèmes de clés auto.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponible maintenant</span>
            </div>
          </div>

          {/* Colonne 2 - Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Mes Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-orange-primary transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Me Contacter</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE || '0493447205'}`}
                    className="text-white hover:text-orange-primary transition-colors font-semibold"
                  >
                    {process.env.NEXT_PUBLIC_PHONE_DISPLAY || '04 93 44 72 05'}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Horaires</p>
                  <p className="text-white font-semibold">24h/24, 7j/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Zone</p>
                  <p className="text-white font-semibold">Liège et périphérie</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - CTA */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Besoin d'aide ?</h4>
            <p className="text-gray-300 text-sm mb-4">
              Appelez-moi ou écrivez-moi sur WhatsApp pour une intervention rapide.
            </p>
            <div className="space-y-3">
              <PhoneButton size="md" fullWidth />
              <WhatsAppButton size="md" fullWidth />
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Clef Auto Liège. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
