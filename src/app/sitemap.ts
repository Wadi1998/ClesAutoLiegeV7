import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { communes } from '@/lib/data/communes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be';
  
  // Pages services dynamiques
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Pages communes dynamiques (SEO local)
  const communePages = communes.map((commune) => ({
    url: `${baseUrl}/communes/${commune.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    // Page d'accueil
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // Pages services
    ...servicePages,
    // Pages communes (SEO local)
    ...communePages,
  ];
}
