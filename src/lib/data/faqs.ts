export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// FAQ Globale (Page d'accueil)
export const globalFAQs: FAQ[] = [
  {
    id: 'g1',
    question: 'Vous intervenez vraiment 24h/24 ?',
    answer: 'Oui, absolument ! Je suis disponible jour et nuit, 7 jours sur 7, weekends et jours fériés inclus. Les urgences de serrurerie automobile ne respectent pas les horaires de bureau, c\'est pourquoi je reste joignable à toute heure pour vous dépanner rapidement.',
    category: 'general'
  },
  {
    id: 'g2',
    question: 'Combien de temps pour arriver ?',
    answer: 'En moyenne, j\'arrive en moins de 30 minutes dans la région de Liège et ses environs immédiats. Le temps exact dépend de votre localisation et du trafic, mais je fais toujours mon maximum pour intervenir le plus rapidement possible.',
    category: 'general'
  },
  {
    id: 'g3',
    question: 'Quelles marques de voitures prenez-vous en charge ?',
    answer: 'Je prends en charge toutes les marques automobiles : Audi, BMW, Mercedes, Volkswagen, Renault, Peugeot, Citroën, Ford, Opel, Tesla, et bien d\'autres. Mon équipement professionnel me permet de travailler sur tous types de véhicules, des plus classiques aux plus récents.',
    category: 'general'
  },
  {
    id: 'g4',
    question: 'Comment se passe le paiement ?',
    answer: 'Le paiement se fait après l\'intervention, une fois que vous êtes satisfait du service. J\'accepte le cash et le Bancontact. Je vous donne le prix exact par téléphone avant mon intervention, pas de surprise ni de frais cachés.',
    category: 'payment'
  },
  {
    id: 'g5',
    question: 'Offrez-vous une garantie sur vos interventions ?',
    answer: 'Oui, toutes mes interventions sont garanties satisfaction. Si vous rencontrez le moindre problème avec une clé que j\'ai fabriquée ou une réparation que j\'ai effectuée, je reviens gratuitement pour corriger la situation. Votre tranquillité d\'esprit est ma priorité.',
    category: 'general'
  },
  {
    id: 'g6',
    question: 'Puis-je avoir un devis par téléphone ?',
    answer: 'Absolument ! Appelez-moi et décrivez votre situation : marque du véhicule, type de problème, votre localisation. Je vous donne immédiatement un devis clair et transparent par téléphone, sans engagement de votre part.',
    category: 'payment'
  },
  {
    id: 'g7',
    question: 'Que faire si ma clé est cassée dans la serrure ?',
    answer: 'Surtout, ne forcez pas et n\'essayez pas de retirer le morceau avec des pinces ! Cela risque d\'endommager définitivement la serrure. Appelez-moi immédiatement, j\'ai l\'équipement spécialisé pour extraire les clés cassées sans abîmer votre véhicule.',
    category: 'emergency'
  },
  {
    id: 'g8',
    question: 'Travaillez-vous avec les assurances ?',
    answer: 'Oui, je peux établir une facture détaillée pour votre compagnie d\'assurance si votre contrat couvre ce type de dépannage. N\'hésitez pas à me le signaler lors de notre premier contact, je vous fournirai tous les documents nécessaires.',
    category: 'payment'
  }
];

// FAQ par service
export const serviceFAQs: { [key: string]: FAQ[] } = {
  'reproduction-cles': [
    {
      id: 'rc1',
      question: 'Combien coûte une duplication de clé ?',
      answer: 'Le prix varie selon le type de clé (classique, transpondeur, télécommande) et la marque du véhicule. Appelez-moi en me précisant votre modèle de voiture, je vous donnerai un tarif exact immédiatement. Mes prix sont généralement 30 à 50% moins chers que chez les concessionnaires.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc2',
      question: 'Pouvez-vous dupliquer une clé transpondeur ?',
      answer: 'Oui, parfaitement ! J\'ai tout l\'équipement nécessaire pour dupliquer et programmer les clés à transpondeur (clés avec puce électronique). Je peux créer une copie fonctionnelle même pour les véhicules récents avec système de démarrage électronique.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc3',
      question: 'Faut-il apporter le véhicule ?',
      answer: 'Non, ce n\'est pas nécessaire ! Je me déplace directement chez vous ou sur votre lieu de travail avec tout mon matériel. Je fabrique et programme la clé sur place. C\'est beaucoup plus pratique pour vous.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc4',
      question: 'Combien de temps pour faire une clé ?',
      answer: 'Une fois sur place, je fabrique votre clé en 10 à 20 minutes selon le type. Les clés classiques sont très rapides, les clés à transpondeur nécessitent quelques minutes de programmation supplémentaires. Dans tous les cas, vous repartez avec une clé fonctionnelle le jour même.',
      category: 'reproduction-cles'
    },
    {
      id: 'rc5',
      question: 'Gardez-vous une copie de ma clé ?',
      answer: 'Absolument pas. Je ne garde aucune copie ni aucun code de vos clés. Votre sécurité et votre confidentialité sont primordiales. Une fois la clé fabriquée et remise, je n\'ai aucune trace de votre code.',
      category: 'reproduction-cles'
    }
  ],
  'ouverture-portiere': [
    {
      id: 'op1',
      question: 'Allez-vous abîmer ma voiture ?',
      answer: 'Non, jamais ! J\'utilise exclusivement des techniques professionnelles non destructives. Mon équipement spécialisé me permet d\'ouvrir votre véhicule sans aucune rayure, sans casser de vitre ni endommager les joints. Votre voiture reste en parfait état.',
      category: 'ouverture-portiere'
    },
    {
      id: 'op2',
      question: 'Combien de temps pour ouvrir une portière ?',
      answer: 'Une fois sur place, l\'ouverture prend généralement entre 5 et 15 minutes selon le modèle du véhicule et le type de serrure. Certains véhicules récents avec systèmes antivol sophistiqués peuvent prendre un peu plus de temps, mais je vous tiens informé.',
      category: 'ouverture-portiere'
    },
    {
      id: 'op3',
      question: 'Que faire si mes clés sont dans le coffre ?',
      answer: 'Pas de problème ! Je peux également ouvrir le coffre de votre véhicule avec mes techniques professionnelles. L\'accès au coffre est parfois même plus simple que l\'ouverture d\'une portière. Appelez-moi, j\'ai la solution.',
      category: 'ouverture-portiere'
    },
    {
      id: 'op4',
      question: 'Intervenez-vous pour tous types de véhicules ?',
      answer: 'Oui, j\'interviens sur tous types de véhicules : voitures particulières, utilitaires, camionnettes, SUV, véhicules de luxe, etc. Quelle que soit la marque ou le modèle, j\'ai l\'expérience et l\'équipement pour ouvrir votre véhicule en toute sécurité.',
      category: 'ouverture-portiere'
    }
  ],
  'depannage-urgence': [
    {
      id: 'du1',
      question: 'Quelle est votre zone d\'intervention en urgence ?',
      answer: 'J\'interviens dans toute la région de Liège : Liège centre, Herstal, Seraing, Ans, Flémalle, Grâce-Hollogne, Chaudfontaine, et toute la périphérie. Pour les urgences, je peux également me déplacer un peu plus loin selon les situations.',
      category: 'depannage-urgence'
    },
    {
      id: 'du2',
      question: 'Avez-vous tout le matériel sur place ?',
      answer: 'Oui, mon véhicule d\'intervention est équipé de tout le matériel professionnel nécessaire : outils d\'ouverture, machines à clés, équipement de programmation, pièces de rechange courantes. Je peux résoudre la plupart des problèmes directement sur place.',
      category: 'depannage-urgence'
    },
    {
      id: 'du3',
      question: 'Y a-t-il un supplément pour les interventions de nuit ?',
      answer: 'Pour les interventions entre 20h et 7h, un léger supplément s\'applique pour couvrir la disponibilité 24/7. Mais je vous annonce clairement le tarif au téléphone avant de me déplacer, pas de surprise. En cas d\'urgence, chaque minute compte !',
      category: 'depannage-urgence'
    },
    {
      id: 'du4',
      question: 'Puis-je payer après l\'intervention ?',
      answer: 'Oui, le paiement se fait toujours après l\'intervention, une fois que tout est résolu et que vous êtes satisfait. J\'accepte le cash et le Bancontact. En urgence, votre priorité est de récupérer l\'accès à votre véhicule, on règle les détails après.',
      category: 'depannage-urgence'
    }
  ],
  'reparation-serrures': [
    {
      id: 'rs1',
      question: 'Comment savoir si ma serrure est réparable ?',
      answer: 'Décrivez-moi les symptômes par téléphone : la serrure se bloque, fait du bruit, ne ferme plus correctement ? Je pourrai vous dire si c\'est réparable ou s\'il faut remplacer le mécanisme. Dans la majorité des cas, une réparation est possible et plus économique.',
      category: 'reparation-serrures'
    },
    {
      id: 'rs2',
      question: 'Utilisez-vous des pièces d\'origine ?',
      answer: 'J\'utilise des pièces de qualité équivalente ou supérieure aux pièces d\'origine. Selon les cas et votre budget, je peux également me procurer des pièces constructeur. Mon objectif est de vous garantir une réparation durable au meilleur rapport qualité-prix.',
      category: 'reparation-serrures'
    },
    {
      id: 'rs3',
      question: 'Combien de temps dure une réparation ?',
      answer: 'Une réparation de serrure prend généralement entre 30 minutes et 1 heure selon la complexité. Les cas simples (lubrifcation, ajustement) sont très rapides. Les remplacements de mécanisme complet peuvent prendre un peu plus de temps mais restent réalisables le jour même.',
      category: 'reparation-serrures'
    }
  ],
  'programmation-cles': [
    {
      id: 'pc1',
      question: 'Quelles marques de clés programmez-vous ?',
      answer: 'Je programme les clés électroniques de toutes les marques : Volkswagen, Audi, BMW, Mercedes, Renault, Peugeot, Citroën, Ford, Opel, Toyota, Nissan, etc. Mon équipement de diagnostic professionnel est compatible avec pratiquement tous les véhicules modernes.',
      category: 'programmation-cles'
    },
    {
      id: 'pc2',
      question: 'Dois-je aller chez le concessionnaire ?',
      answer: 'Non, plus besoin ! Je peux programmer votre clé directement chez vous, c\'est beaucoup plus rapide et économique. Les concessionnaires facturent souvent 2 à 3 fois plus cher et vous obligent à prendre rendez-vous et laisser votre véhicule.',
      category: 'programmation-cles'
    },
    {
      id: 'pc3',
      question: 'La programmation est-elle définitive ?',
      answer: 'Oui, une fois la clé programmée, elle fonctionne de manière permanente avec votre véhicule. La programmation ne s\'efface pas et ne nécessite pas de "recharge". Votre clé reste fonctionnelle tant que la pile de la télécommande est bonne.',
      category: 'programmation-cles'
    }
  ],
  'extraction-cles': [
    {
      id: 'ec1',
      question: 'Ma serrure sera-t-elle endommagée ?',
      answer: 'Non, j\'utilise des outils d\'extraction spécialisés qui permettent de retirer le morceau de clé sans abîmer le mécanisme de la serrure. C\'est précisément pour éviter les dommages qu\'il est important de faire appel à un professionnel plutôt que de forcer avec des outils inadaptés.',
      category: 'extraction-cles'
    },
    {
      id: 'ec2',
      question: 'Que faire si ma clé est cassée dans le contacteur ?',
      answer: 'Ne touchez à rien et ne tentez pas de démarrer ! Appelez-moi immédiatement. J\'ai les outils spécifiques pour extraire la clé du contacteur sans endommager le mécanisme de démarrage. Forcer pourrait causer des dégâts importants et coûteux.',
      category: 'extraction-cles'
    },
    {
      id: 'ec3',
      question: 'Pouvez-vous la remplacer immédiatement ?',
      answer: 'Oui ! Une fois la clé cassée extraite, je peux vous fabriquer une nouvelle clé sur place immédiatement. Vous n\'avez pas besoin de faire remorquer votre véhicule ni d\'attendre plusieurs jours. Je résous tout le problème en une seule intervention.',
      category: 'extraction-cles'
    }
  ]
};

export const getFAQsByCategory = (category: string): FAQ[] => {
  return serviceFAQs[category] || [];
};

export const getAllFAQs = (): FAQ[] => {
  const allServiceFAQs = Object.values(serviceFAQs).flat();
  return [...globalFAQs, ...allServiceFAQs];
};
