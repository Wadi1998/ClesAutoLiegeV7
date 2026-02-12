import React from 'react';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { StructuredData } from '@/components/seo/StructuredData';
import { Accordion } from '@/components/ui/Accordion';
import { PhoneButton } from '@/components/shared/PhoneButton';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { getServiceBySlug } from '@/lib/data/services';
import { getFAQsByCategory } from '@/lib/data/faqs';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateMetadata } from '@/lib/utils/seo';

const slug = 'reproduction-cles';

export const metadata = generateMetadata({
  title: `Reproduction de Clés Automobile à Liège | Clef Auto Liège`,
  description: `Service de reproduction de clés auto à Liège. Duplication de clés transpondeur, télécommandes. Intervention rapide 24/7. ☎️ 04 93 44 72 05`,
  keywords: ['reproduction clé voiture Liège', 'dupliquer clé auto', 'clé transpondeur', 'copie clé télécommande'],
});

export default function ServicePage() {
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const faqs = getFAQsByCategory(slug);
  const serviceSchema = generateServiceSchema(service.title, service.shortDescription, `/services/${slug}`);
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.question, answer: f.answer })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: service.title, url: `/services/${slug}` }
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Accueil', href: '/' },
            { label: 'Services', href: '/#services' },
            { label: service.title, href: `/services/${slug}` }
          ]} />

          <div className="mt-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              {service.title} à Liège
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {service.shortDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {service.fullDescription.map((para, i) => (
                <p key={i} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{para}</p>
              ))}

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold font-heading mb-6">Comment ça se passe ?</h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-12 h-12 bg-orange-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-6">Questions Fréquentes</h2>
                  <Accordion items={faqs} />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-4">Besoin de ce service ?</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Appelez-moi pour un devis gratuit et une intervention rapide.
                  </p>
                  <div className="space-y-3">
                    <PhoneButton size="md" fullWidth animate />
                    <WhatsAppButton size="md" fullWidth />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
