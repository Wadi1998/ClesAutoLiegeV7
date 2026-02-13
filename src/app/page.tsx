import React from 'react';
import { Hero } from '@/components/home/Hero';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { MarquesCarousel } from '@/components/home/MarquesCarousel';
import { AvisGoogle } from '@/components/home/AvisGoogle';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Gallery } from '@/components/home/Gallery';
import { ZoneIntervention } from '@/components/home/ZoneIntervention';
import { FAQSection } from '@/components/home/FAQSection';
import { CTAFinal } from '@/components/home/CTAFinal';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/utils/seo';
import { globalFAQs } from '@/lib/data/faqs';

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema(globalFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));

  return (
    <>
      {/* Schema Markup SEO */}
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      
      {/* Section 1: Hero - Impact immédiat */}
      <Hero />
      
      {/* Section 2: Services Grid - Présentation des 6 services */}
      <ServicesGrid />
      
      {/* Section 3: Carrousel Marques - 50+ marques */}
      <MarquesCarousel />
      
      {/* Section 4: Avis Google - Social proof */}
      <AvisGoogle />
      
      {/* Section 5: Pourquoi me choisir - Trust signals */}
      <WhyChooseUs />
      
      {/* Section 6: Galerie photos - Portfolio d'interventions */}
      <Gallery />
      
      {/* Section 7: Zone d'intervention - SEO local */}
      <ZoneIntervention />
      
      {/* Section 8: FAQ - Questions fréquentes */}
      <FAQSection />
      
      {/* Section 9: CTA Final - Conversion ultime */}
      <CTAFinal />
    </>
  );
}
