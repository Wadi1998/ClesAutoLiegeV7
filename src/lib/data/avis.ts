export interface Avis {
  id: string;
  name: string;
  initials: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
}

// Avis clients placeholders (en attendant les vrais avis Google)
export const avis: Avis[] = [
  {
    id: '1',
    name: 'Sophie M.',
    initials: 'SM',
    rating: 5,
    comment: 'Intervention rapide et professionnelle ! J\'avais enfermé mes clés dans la voiture un dimanche soir. Il est arrivé en 20 minutes et a ouvert ma portière sans aucun dommage. Je recommande vivement !',
    date: '2024-01-15',
    service: 'Ouverture de portière'
  },
  {
    id: '2',
    name: 'Marc D.',
    initials: 'MD',
    rating: 5,
    comment: 'Excellent service pour la reproduction de ma clé BMW. Beaucoup moins cher que le concessionnaire et fait en 15 minutes chez moi. La clé fonctionne parfaitement. Merci !',
    date: '2024-01-10',
    service: 'Reproduction de clés'
  },
  {
    id: '3',
    name: 'Isabelle L.',
    initials: 'IL',
    rating: 5,
    comment: 'Ma clé s\'était cassée dans la serrure. Il a extrait le morceau cassé et m\'a fait une nouvelle clé sur place. Problème résolu en 30 minutes. Vraiment professionnel et sympathique !',
    date: '2024-01-08',
    service: 'Extraction de clés'
  },
  {
    id: '4',
    name: 'Jean-Pierre V.',
    initials: 'JPV',
    rating: 5,
    comment: 'Dépannage en urgence à 2h du matin, disponible et rapide. Prix honnête et transparent. Un vrai professionnel sur qui on peut compter 24h/24. Je garde son numéro précieusement !',
    date: '2024-01-05',
    service: 'Dépannage urgence'
  },
  {
    id: '5',
    name: 'Catherine B.',
    initials: 'CB',
    rating: 5,
    comment: 'Programmation de ma clé Mercedes impeccable. Je craignais de devoir aller au garage, mais il a tout fait chez moi en quelques minutes. Service au top et très bon rapport qualité-prix !',
    date: '2024-01-02',
    service: 'Programmation clés'
  },
  {
    id: '6',
    name: 'Thomas R.',
    initials: 'TR',
    rating: 5,
    comment: 'Serrure de portière réparée rapidement et efficacement. Il a diagnostiqué le problème par téléphone et est venu avec la bonne pièce. Travail soigné, je suis très satisfait.',
    date: '2023-12-28',
    service: 'Réparation serrures'
  },
  {
    id: '7',
    name: 'Nathalie K.',
    initials: 'NK',
    rating: 5,
    comment: 'Service exceptionnel ! Clés perdues un vendredi soir, il m\'a dépannée en moins d\'une heure. Nouvelle clé faite sur place et programmée. Je recommande sans hésitation !',
    date: '2023-12-22',
    service: 'Dépannage urgence'
  },
  {
    id: '8',
    name: 'François G.',
    initials: 'FG',
    rating: 5,
    comment: 'Très professionnel et sympathique. Intervention rapide pour mon Audi, clé dupliquée parfaitement. Prix correct et transparent. Je ferai appel à lui sans hésiter à l\'avenir.',
    date: '2023-12-18',
    service: 'Reproduction de clés'
  }
];

export const getAverageRating = (): number => {
  const total = avis.reduce((sum, avis) => sum + avis.rating, 0);
  return Number((total / avis.length).toFixed(1));
};

export const getTotalReviews = (): number => {
  return avis.length;
};

export const getRecentAvis = (limit: number = 3): Avis[] => {
  return avis
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getAvisByService = (service: string): Avis[] => {
  return avis.filter(avis => avis.service?.toLowerCase().includes(service.toLowerCase()));
};
