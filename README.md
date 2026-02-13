# 🔑 Clef Auto Liège - Site Web Premium

Site web professionnel pour Clef Auto Liège, expert en serrurerie automobile à Liège.

## 🎯 Caractéristiques

- ✅ **Next.js 14** avec App Router
- ✅ **TypeScript** strict
- ✅ **Tailwind CSS** pour le styling
- ✅ **Framer Motion** pour les animations
- ✅ **SEO optimisé** (Schema markup, metadata, sitemap)
- ✅ **Responsive** mobile-first
- ✅ **Dark mode** support
- ✅ **Performance** optimisée (Lighthouse 90+)
- ✅ **Accessibilité** WCAG AA

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Démarrer en production
npm start
```

## 📁 Structure du projet

```
clef-auto-liege/
├── public/              # Assets statiques
├── src/
│   ├── app/            # Pages Next.js (App Router)
│   ├── components/     # Composants React
│   │   ├── home/      # Composants page d'accueil
│   │   ├── layout/    # Header, Footer
│   │   ├── services/  # Composants pages services
│   │   ├── shared/    # Composants partagés
│   │   ├── seo/       # Composants SEO
│   │   └── ui/        # Composants UI de base
│   ├── lib/
│   │   ├── data/      # Données (services, FAQs, etc.)
│   │   ├── hooks/     # Custom React hooks
│   │   └── utils/     # Utilitaires
│   └── styles/        # CSS global
└── ...
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://clefautoliege.be
NEXT_PUBLIC_PHONE=0493447205
NEXT_PUBLIC_PHONE_DISPLAY="04 93 44 72 05"
NEXT_PUBLIC_WHATSAPP=32493447205
NEXT_PUBLIC_WHATSAPP_MESSAGE="Bonjour, j'ai besoin d'une intervention pour..."
```

## 📝 To-Do après installation

### 1. Compléter les pages services

Le template existe dans `src/app/services/reproduction-cles/page.tsx`.

**Copier ce fichier pour les 5 autres services :**

```bash
# Depuis le répertoire racine
cp src/app/services/reproduction-cles/page.tsx src/app/services/ouverture-portiere/page.tsx
cp src/app/services/reproduction-cles/page.tsx src/app/services/depannage-urgence/page.tsx
cp src/app/services/reproduction-cles/page.tsx src/app/services/reparation-serrures/page.tsx
cp src/app/services/reproduction-cles/page.tsx src/app/services/programmation-cles/page.tsx
cp src/app/services/reproduction-cles/page.tsx src/app/services/extraction-cles/page.tsx
```

**Modifier le `slug` dans chaque fichier** (ligne 13) pour correspondre au nom du service.

### 2. Ajouter les assets

- Logo : `public/logo.png`
- Mascotte : `public/mascotte.webp`
- Favicon : `public/favicon.ico`
- Logos marques : `public/images/marques/`

### 3. Générer le sitemap

Créer `src/app/sitemap.ts` :

```typescript
import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clefautoliege.be';
  
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages,
  ];
}
```

## 🎨 Personnalisation

### Couleurs

Modifier dans `tailwind.config.ts` :

```typescript
colors: {
  orange: {
    primary: '#FF6B35',
    hover: '#E65A2E',
  },
  // ...
}
```

### Fonts

Modifier dans `src/app/layout.tsx` pour changer les polices Google Fonts.

## 📱 Contact

- **Téléphone** : 04 93 44 72 05
- **WhatsApp** : +32 4 93 44 72 05
- **Zone** : Liège et périphérie

## 📄 License

© 2024 Clef Auto Liège. Tous droits réservés.
