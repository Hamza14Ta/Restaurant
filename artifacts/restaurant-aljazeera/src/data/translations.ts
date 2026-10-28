export type Language = 'en' | 'fr' | 'es' | 'ar';

export interface TranslationData {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  topline: {
    note: string;
    callUs: string;
  };
  nav: {
    home: string;
    story: string;
    menu: string;
    gallery: string;
    reviews: string;
    contact: string;
    callRestaurant: string;
    callUs: string;
    orderNow: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    arabicName: string;
    copy: string;
    ratingSuffix: string;
    exploreMenu: string;
    findUs: string;
    scrollDown: string;
    sideNote: string;
    captionStep: string;
    captionText: string;
  };
  highlights: {
    ratingCount: string;
    cuisineTitle: string;
    cuisineSubtitle: string;
    serviceTitle: string;
    serviceSubtitle: string;
    locationTitle: string;
    locationSubtitle: string;
  };
  story: {
    eyebrow: string;
    titlePrefix: string;
    titleEm: string;
    welcomeTag: string;
    photoLabel: string;
    lede: string;
    paragraph: string;
    highlights: [string, string, string];
    arabicGreeting: string;
    planVisit: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: {
      all: string;
      rice: string;
      mains: string;
      mezze: string;
      sides: string;
    };
    items: Record<
      string,
      {
        name: string;
        categoryKey: 'rice' | 'mains' | 'mezze' | 'sides';
        description: string;
      }
    >;
    priceLabel: string;
    menuNote: string;
    askToday: string;
    askPreparation: string;
    callToAsk: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readMore: string;
    reviewsCount: string;
    badge: string;
    highlights: string[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    captions: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    dineInTitle: string;
    dineInDesc: string;
    dineInAria: string;
    deliveryTitle: string;
    deliveryDesc: string;
    deliveryAriaGlovo: string;
    deliveryAriaCall: string;
    takeawayTitle: string;
    takeawayDesc: string;
    takeawayAria: string;
    orderOnline: string;
    orderNotListed: string;
    glovoAvailableDesc: string;
    glovoUnconfirmedDesc: string;
    continueToGlovo: string;
    callRestaurant: string;
    callToOrder: string;
    orderOnGlovo: string;
    askAboutGlovo: string;
    contactUs: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    addressTitle: string;
    addressValue: string;
    callTitle: string;
    priceTitle: string;
    priceValue: string;
    hoursTitle: string;
    hoursValue: string;
    getDirections: string;
    callToConfirm: string;
    serviceFact: string;
    mapAvenue: string;
    mapCity: string;
    openDirections: string;
    openMap: string;
  };
  faq: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    intro: string;
    talkToUs: string;
    items: { question: string; answer: string }[];
  };
  closing: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    copy: string;
    exploreMenu: string;
    callPhone: string;
    getDirections: string;
    arabicSalutation: string;
  };
  footer: {
    tagline: string;
    exploreTitle: string;
    visitTitle: string;
    followTitle: string;
    ourStory: string;
    theMenu: string;
    gallery: string;
    faqs: string;
    googleMaps: string;
    getDirections: string;
    callRestaurant: string;
    dineInFact: string;
    orderViaGlovo: string;
    glovoMentioned: string;
    allRightsReserved: string;
    madeWithCare: string;
    backToTop: string;
  };
  whatsapp: {
    messageUs: string;
    callUs: string;
    ariaMessage: string;
    ariaCall: string;
  };
  lightbox: {
    aria: string;
    close: string;
    prev: string;
    next: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    meta: {
      title: 'Restaurant Aljazeera Alarabia | Yemeni Cuisine in Tangier',
      description:
        'Discover Yemeni cuisine and Arabic dishes at Restaurant Aljazeera Alarabia in Tangier. Explore the menu, check practical visit information, and call ahead.',
      ogDescription:
        'A generous table of Yemeni cuisine and Arabic dishes on Avenue Mohammed V, Tangier. Explore the menu and plan your visit.',
    },
    topline: {
      note: 'Yemeni cuisine · Arabic hospitality · Tangier',
      callUs: '+212 6 65 60 11 77',
    },
    nav: {
      home: 'Home',
      story: 'Our story',
      menu: 'Menu',
      gallery: 'Gallery',
      reviews: 'Reviews',
      contact: 'Contact',
      callRestaurant: 'Call the restaurant',
      callUs: 'Call us',
      orderNow: 'Order now',
    },
    hero: {
      eyebrow: 'Authentic Yemeni & Arabian cuisine',
      titleLine1: 'A Taste of Arabia,',
      titleLine2: 'in the Heart of ',
      titleEm: 'Tangier.',
      arabicName: 'مطعم الجزيرة العربية',
      copy: 'Discover the warmth of Arabian hospitality through aromatic rice dishes, traditional spices, generous plates, and flavors made to bring people together.',
      ratingSuffix: 'Google reviews',
      exploreMenu: 'Explore our menu',
      findUs: 'Find us in Tangier',
      scrollDown: 'Scroll to discover',
      sideNote: 'Hospitality, served generously',
      captionStep: '01 / 04',
      captionText: 'From the Arabian table',
    },
    highlights: {
      ratingCount: 'Google rating · 485 reviews',
      cuisineTitle: 'Yemeni & Arabic',
      cuisineSubtitle: 'Food made for sharing',
      serviceTitle: 'Come in or stay in',
      serviceSubtitle: 'Dine-in · contactless delivery',
      locationTitle: 'In the heart of Tangier',
      locationSubtitle: 'Avenue Mohammed V',
    },
    story: {
      eyebrow: 'A table with room for you',
      titlePrefix: 'Hospitality Rooted in ',
      titleEm: 'Arabian Tradition',
      welcomeTag: 'WELCOME · أهلاً',
      photoLabel: 'A place to come together',
      lede: 'At Aljazeera Alarabia, the welcome is simple: come as you are, find your place, and share a meal.',
      paragraph:
        'Our table brings Yemeni cuisine and familiar Arabic dishes to Tangier. From a fragrant rice dish at the centre to fresh salads and small plates beside it, there is room to make the meal your own.',
      highlights: ['Rich Arabian Flavors', 'Generous Plates', 'Warm Hospitality'],
      arabicGreeting: 'أهلاً وسهلاً بكم',
      planVisit: 'Plan a visit',
    },
    menu: {
      eyebrow: 'From our table',
      title: 'Discover Our Menu',
      intro: 'From aromatic rice specialties to fresh mezze and comforting favorites.',
      categories: {
        all: 'All',
        rice: 'Signature Rice Dishes',
        mains: 'Main Courses',
        mezze: 'Mezze & Salads',
        sides: 'Sides & Accompaniments',
      },
      items: {
        'Chicken Mandi with Spiced Rice': {
          name: 'Chicken Mandi with Spiced Rice',
          categoryKey: 'rice',
          description: 'Aromatic rice, chicken and warming spices.',
        },
        'Chicken Kabsa': {
          name: 'Chicken Kabsa',
          categoryKey: 'rice',
          description: 'Traditional Arabian-style chicken and spiced rice.',
        },
        'Meat Biryani': {
          name: 'Meat Biryani',
          categoryKey: 'rice',
          description: 'Fragrant rice with meat and spices.',
        },
        Shawarma: {
          name: 'Shawarma',
          categoryKey: 'mains',
          description: 'Seasoned meat, Middle Eastern-style.',
        },
        'Krispy Dish': {
          name: 'Krispy Dish',
          categoryKey: 'mains',
          description: 'A menu name guests may recognize. Exact ingredients and preparation are unconfirmed.',
        },
        Tabbouleh: {
          name: 'Tabbouleh',
          categoryKey: 'mezze',
          description: 'Fresh herb and bulgur salad.',
        },
        Fattoush: {
          name: 'Fattoush',
          categoryKey: 'mezze',
          description: 'A refreshing Middle Eastern salad.',
        },
        'Cucumber & Yogurt Salad': {
          name: 'Cucumber & Yogurt Salad',
          categoryKey: 'mezze',
          description: 'Cool yogurt with cucumber.',
        },
        'Tomato & Cucumber Salad': {
          name: 'Tomato & Cucumber Salad',
          categoryKey: 'mezze',
          description: 'Chopped vegetables, simply served.',
        },
        'Appetizer Platter': {
          name: 'Appetizer Platter',
          categoryKey: 'mezze',
          description: 'A selection to share; platter contents to be confirmed.',
        },
        'Warm Flatbread': {
          name: 'Warm Flatbread',
          categoryKey: 'sides',
          description: 'A warm accompaniment for the table.',
        },
        'Yogurt Dip': {
          name: 'Yogurt Dip',
          categoryKey: 'sides',
          description: 'A cool dip served alongside flatbread.',
        },
      },
      priceLabel: 'Price available at restaurant',
      menuNote: 'For current availability, ingredients, and pricing, please contact the restaurant directly.',
      askToday: 'Ask About Today’s Menu',
      askPreparation: 'Ask us about today’s preparation',
      callToAsk: 'Call to ask about',
    },
    reviews: {
      eyebrow: 'Good words travel',
      title: 'What Our Guests Say',
      subtitle: 'Paraphrased guest highlights — not direct quotations.',
      readMore: 'Read More Reviews on Google',
      reviewsCount: 'Google · 485 reviews',
      badge: 'PARAPHRASED GUEST HIGHLIGHT',
      highlights: [
        'A family of four appreciated the welcoming atmosphere and great service.',
        'Meat biryani, tabbouleh and cucumber-yogurt salad were praised for taste, value and generous portions.',
        'Guests praised the variety and flavor, mentioning pizza, fresh mezze and chicken Caesar salad.',
      ],
    },
    gallery: {
      eyebrow: 'A little look around',
      title: 'A Feast for the Senses',
      subtitle: 'Food and atmosphere, imagined for your next visit.',
      captions: [
        'Chicken mandi with spiced rice',
        'Chicken kabsa',
        'Meat biryani',
        'Shawarma',
        'Fresh mezze & salads',
        'Flatbread & dips',
        'A welcoming table',
      ],
    },
    services: {
      eyebrow: 'The way you like it',
      title: 'Your Table, Your Way',
      intro: 'Join us in person or get in touch to ask about enjoying your meal at home.',
      dineInTitle: 'Dine in',
      dineInDesc: 'Settle in and enjoy a meal at the restaurant.',
      dineInAria: 'Get directions for dine-in',
      deliveryTitle: 'Delivery',
      deliveryDesc: 'Contactless delivery is listed. Ask us about current availability and ordering.',
      deliveryAriaGlovo: 'Order through Glovo',
      deliveryAriaCall: 'Call about delivery',
      takeawayTitle: 'Takeaway & drive service',
      takeawayDesc: 'Contact us to ask what’s available. Drive-through / drive service is mentioned in a listing; exact option is unconfirmed.',
      takeawayAria: 'Call about takeaway',
      orderOnline: 'Order online',
      orderNotListed: 'Order details not listed',
      glovoAvailableDesc: 'Continue to the restaurant’s confirmed Glovo listing.',
      glovoUnconfirmedDesc: 'A delivery listing mentions Glovo. Call us to confirm the current ordering link.',
      continueToGlovo: 'Continue to Glovo',
      callRestaurant: 'Call the restaurant',
      callToOrder: 'Call to Order',
      orderOnGlovo: 'Order on Glovo',
      askAboutGlovo: 'Ask About Glovo',
      contactUs: 'Contact Us',
    },
    visit: {
      eyebrow: 'Come find us',
      title: 'Visit Us in Tangier',
      addressTitle: 'OUR ADDRESS',
      addressValue: 'Q5GX+88F, Avenue Mohammed V, Tangier 90000, Morocco',
      callTitle: 'CALL AHEAD',
      priceTitle: 'AVERAGE PRICE',
      priceValue: '50–250 MAD per person',
      hoursTitle: 'HOURS NOTE',
      hoursValue: 'A listing says the restaurant closes at midnight. Weekly hours and opening time are not confirmed; please call ahead.',
      getDirections: 'Get directions',
      callToConfirm: 'Call to confirm',
      serviceFact: 'Dine-in and contactless delivery are listed.',
      mapAvenue: 'AVENUE MOHAMMED V',
      mapCity: 'TANGER',
      openDirections: 'Open directions',
      openMap: 'Open map',
    },
    faq: {
      eyebrow: 'A few useful things',
      titleLine1: 'Before you',
      titleEm: 'make your way.',
      intro: 'Still have a question? Give us a call and we’ll help you plan.',
      talkToUs: 'Talk to us',
      items: [
        {
          question: 'Where is Restaurant Aljazeera Alarabia?',
          answer: 'Find us at Q5GX+88F, Avenue Mohammed V, Tangier 90000, Morocco. Use the directions link below for a map.',
        },
        {
          question: 'What kind of food do you serve?',
          answer: 'The restaurant is listed for Yemeni cuisine, Arabic dishes and Middle Eastern food. The menu above is a guide; please call to confirm today’s availability.',
        },
        {
          question: 'What is the average price?',
          answer: 'The listed range is 50–250 MAD per person. Dish prices are not published here; please ask the restaurant for current pricing.',
        },
        {
          question: 'Is delivery available?',
          answer: 'Contactless delivery is listed. An online delivery listing mentions Glovo, but a confirmed direct ordering link is not available here. Please call to check current options.',
        },
        {
          question: 'Can I order online?',
          answer: 'A delivery listing mentions Glovo. As no confirmed direct link is available, please contact the restaurant to confirm how to order.',
        },
        {
          question: 'How can I contact the restaurant?',
          answer: 'Call +212 6 65 60 11 77. The call link on this page works on mobile and supported calling apps.',
        },
        {
          question: 'What are the opening hours?',
          answer: 'A listing says the restaurant closes at midnight. Weekly hours and opening time are not confirmed, so please call ahead before visiting.',
        },
      ],
    },
    closing: {
      eyebrow: 'Your place is at the table',
      titleLine1: 'Good Food. Great Company.',
      titleEm: 'Arabian Hospitality.',
      copy: 'Make your next meal in Tangier a flavorful experience.',
      exploreMenu: 'Explore the Menu',
      callPhone: 'Call +212 6 65 60 11 77',
      getDirections: 'Get Directions',
      arabicSalutation: 'أهلاً وسهلاً',
    },
    footer: {
      tagline: 'A generous table of Yemeni cuisine and Arabic dishes in Tangier.',
      exploreTitle: 'EXPLORE',
      visitTitle: 'VISIT',
      followTitle: 'FOLLOW & ORDER',
      ourStory: 'Our story',
      theMenu: 'The menu',
      gallery: 'Gallery',
      faqs: 'FAQs',
      googleMaps: 'Google Maps',
      getDirections: 'Get directions',
      callRestaurant: 'Call the restaurant',
      dineInFact: 'Dine-in and contactless delivery listed.',
      orderViaGlovo: 'Order via Glovo',
      glovoMentioned: 'Glovo listing mentioned; link not confirmed',
      allRightsReserved: 'All rights reserved.',
      madeWithCare: 'Made with care in Tangier',
      backToTop: 'Back to top',
    },
    whatsapp: {
      messageUs: 'Message us',
      callUs: 'Call us',
      ariaMessage: 'Message Restaurant Aljazeera Alarabia on WhatsApp',
      ariaCall: 'Call Restaurant Aljazeera Alarabia',
    },
    lightbox: {
      aria: 'Photo gallery',
      close: 'Close gallery',
      prev: 'Previous image',
      next: 'Next image',
    },
  },

  fr: {
    meta: {
      title: 'Restaurant Aljazeera Alarabia | Cuisine Yéménite à Tanger',
      description:
        'Découvrez la cuisine yéménite et les délices arabes au Restaurant Aljazeera Alarabia à Tanger. Explorez le menu, trouvez nos coordonnées et réservez.',
      ogDescription:
        'Une table généreuse de cuisine yéménite et de plats arabes sur l’Avenue Mohammed V à Tanger. Découvrez notre menu.',
    },
    topline: {
      note: 'Cuisine yéménite · Hospitalité arabe · Tanger',
      callUs: '+212 6 65 60 11 77',
    },
    nav: {
      home: 'Accueil',
      story: 'Notre histoire',
      menu: 'Menu',
      gallery: 'Galerie',
      reviews: 'Avis',
      contact: 'Contact',
      callRestaurant: 'Appeler le restaurant',
      callUs: 'Appelez-nous',
      orderNow: 'Commander',
    },
    hero: {
      eyebrow: 'Authentique cuisine yéménite & arabe',
      titleLine1: 'Une saveur d’Arabie,',
      titleLine2: 'au cœur de ',
      titleEm: 'Tanger.',
      arabicName: 'مطعم الجزيرة العربية',
      copy: 'Découvrez la chaleur de l’hospitalité arabe à travers des plats de riz parfumés, des épices traditionnelles, des assiettes généreuses et des saveurs conçues pour réunir.',
      ratingSuffix: 'avis Google',
      exploreMenu: 'Découvrir le menu',
      findUs: 'Nous trouver à Tanger',
      scrollDown: 'Défiler pour découvrir',
      sideNote: 'L’hospitalité servie avec générosité',
      captionStep: '01 / 04',
      captionText: 'De la table arabe',
    },
    highlights: {
      ratingCount: 'Note Google · 485 avis',
      cuisineTitle: 'Yéménite & Arabe',
      cuisineSubtitle: 'Des plats faits pour le partage',
      serviceTitle: 'Sur place ou chez vous',
      serviceSubtitle: 'Sur place · livraison sans contact',
      locationTitle: 'Au cœur de Tanger',
      locationSubtitle: 'Avenue Mohammed V',
    },
    story: {
      eyebrow: 'Une table qui vous attend',
      titlePrefix: 'Une hospitalité ancrée dans la ',
      titleEm: 'tradition arabe',
      welcomeTag: 'BIENVENUE · أهلاً',
      photoLabel: 'Un lieu de rencontre convivial',
      lede: 'À Aljazeera Alarabia, l’accueil est simple : venez comme vous êtes, prenez place et partagez un repas.',
      paragraph:
        'Notre table apporte la cuisine yéménite et les saveurs arabes traditionnelles à Tanger. Du plat de riz parfumé au centre aux salades fraîches et mezzés qui l’accompagnent, chaque repas devient un moment privilégié.',
      highlights: ['Saveurs arabes authentiques', 'Assiettes généreuses', 'Hospitalité chaleureuse'],
      arabicGreeting: 'أهلاً وسهلاً بكم',
      planVisit: 'Planifier une visite',
    },
    menu: {
      eyebrow: 'De notre table',
      title: 'Découvrez Notre Menu',
      intro: 'Des spécialités de riz aromatique aux mezzés frais et plats traditionnels réconfortants.',
      categories: {
        all: 'Tout',
        rice: 'Spécialités de Riz',
        mains: 'Plats Principaux',
        mezze: 'Mezzés & Salades',
        sides: 'Accompagnements',
      },
      items: {
        'Chicken Mandi with Spiced Rice': {
          name: 'Mandi de Poulet au Riz Épicé',
          categoryKey: 'rice',
          description: 'Riz aromatique, poulet fondant et épices yéménites douces.',
        },
        'Chicken Kabsa': {
          name: 'Kabsa de Poulet',
          categoryKey: 'rice',
          description: 'Poulet traditionnel à la façon arabe et riz parfumé aux amandes.',
        },
        'Meat Biryani': {
          name: 'Biryani de Viande',
          categoryKey: 'rice',
          description: 'Riz basmati parfumé avec morceaux de viande tendre et épices.',
        },
        Shawarma: {
          name: 'Shawarma',
          categoryKey: 'mains',
          description: 'Viande marinée et rôtie selon la tradition du Moyen-Orient.',
        },
        'Krispy Dish': {
          name: 'Plat Croustillant Krispy',
          categoryKey: 'mains',
          description: 'Une spécialité croustillante et savoureuse appréciée de nos clients.',
        },
        Tabbouleh: {
          name: 'Taboulé',
          categoryKey: 'mezze',
          description: 'Salade fraîche de persil, tomates, menthe et boulgour.',
        },
        Fattoush: {
          name: 'Fattouche',
          categoryKey: 'mezze',
          description: 'Salade croquante orientale au pain pita grillé et sumac.',
        },
        'Cucumber & Yogurt Salad': {
          name: 'Salade de Concombre au Yaourt',
          categoryKey: 'mezze',
          description: 'Yaourt crémeux et frais au concombre croquant et menthe.',
        },
        'Tomato & Cucumber Salad': {
          name: 'Salade Tomates & Concombres',
          categoryKey: 'mezze',
          description: 'Légumes frais coupés et assaisonnés d’huile d’olive et citron.',
        },
        'Appetizer Platter': {
          name: 'Assortiment de Mezzés',
          categoryKey: 'mezze',
          description: 'Une sélection de mezzés chauds et froids à partager.',
        },
        'Warm Flatbread': {
          name: 'Pain Plat Chaud',
          categoryKey: 'sides',
          description: 'Pain traditionnel arabe servi chaud pour accompagner votre table.',
        },
        'Yogurt Dip': {
          name: 'Sauce Yaourt',
          categoryKey: 'sides',
          description: 'Sauce fraîche et onctueuse servie avec le pain chaud.',
        },
      },
      priceLabel: 'Prix disponible au restaurant',
      menuNote: 'Pour connaître la disponibilité, les ingrédients et les prix actuels, contactez directement le restaurant.',
      askToday: 'Renseignez-vous sur le menu du jour',
      askPreparation: 'Demandez-nous la préparation du jour',
      callToAsk: 'Appeler pour se renseigner sur',
    },
    reviews: {
      eyebrow: 'La renommée voyage',
      title: 'Ce Que Disent Nos Clients',
      subtitle: 'Retours et impressions authentiques partagés par nos visiteurs.',
      readMore: 'Lire plus d’avis sur Google',
      reviewsCount: 'Google · 485 avis',
      badge: 'AVIS CLIENT SYNTHÉTISÉ',
      highlights: [
        'Une famille de quatre personnes a particulièrement apprécié l’ambiance chaleureuse et l’excellent service.',
        'Le biryani de viande, le taboulé et la salade de concombre ont été loués pour leur goût, leur prix et leurs portions généreuses.',
        'Les clients ont souligné la variété, les saveurs authentiques, les mezzés frais et la salade César au poulet.',
      ],
    },
    gallery: {
      eyebrow: 'Un coup d’œil chez nous',
      title: 'Un Festin pour les Sens',
      subtitle: 'Saveurs et ambiance pour inspirer votre prochaine visite.',
      captions: [
        'Mandi de poulet au riz épicé',
        'Kabsa de poulet',
        'Biryani de viande',
        'Shawarma',
        'Mezzés frais & salades',
        'Pains plats et sauces',
        'Une table accueillante',
      ],
    },
    services: {
      eyebrow: 'Comme vous l’aimez',
      title: 'Votre Table, À Votre Façon',
      intro: 'Rejoignez-nous sur place ou contactez-nous pour déguster votre repas à la maison.',
      dineInTitle: 'Sur place',
      dineInDesc: 'Installez-vous confortablement et savourez votre repas au restaurant.',
      dineInAria: 'Obtenir l’itinéraire pour venir sur place',
      deliveryTitle: 'Livraison',
      deliveryDesc: 'Livraison sans contact disponible. Renseignez-vous sur les options de commande actuelles.',
      deliveryAriaGlovo: 'Commander via Glovo',
      deliveryAriaCall: 'Appeler pour la livraison',
      takeawayTitle: 'À emporter & service au volant',
      takeawayDesc: 'Contactez-nous pour savoir ce qui est disponible. Service rapide sur demande.',
      takeawayAria: 'Appeler pour commander à emporter',
      orderOnline: 'Commander en ligne',
      orderNotListed: 'Détails de commande non listés',
      glovoAvailableDesc: 'Accédez à la page officielle de commande sur Glovo.',
      glovoUnconfirmedDesc: 'Présence mentionnée sur Glovo. Appelez-nous pour confirmer le lien de commande.',
      continueToGlovo: 'Continuer sur Glovo',
      callRestaurant: 'Appeler le restaurant',
      callToOrder: 'Appeler pour commander',
      orderOnGlovo: 'Commander sur Glovo',
      askAboutGlovo: 'Se renseigner sur Glovo',
      contactUs: 'Contactez-nous',
    },
    visit: {
      eyebrow: 'Venez nous trouver',
      title: 'Visitez-nous à Tanger',
      addressTitle: 'NOTRE ADRESSE',
      addressValue: 'Q5GX+88F, Avenue Mohammed V, Tanger 90000, Maroc',
      callTitle: 'APPELEZ À L’AVANCE',
      priceTitle: 'FOURCHETTE DE PRIX',
      priceValue: '50–250 MAD par personne',
      hoursTitle: 'NOTE SUR LES HORAIRES',
      hoursValue: 'Le restaurant ferme généralement à minuit. Pour confirmer les horaires exacts aujourd’hui, veuillez appeler avant de venir.',
      getDirections: 'Obtenir l’itinéraire',
      callToConfirm: 'Appeler pour confirmer',
      serviceFact: 'Service sur place et livraison sans contact disponibles.',
      mapAvenue: 'AVENUE MOHAMMED V',
      mapCity: 'TANGER',
      openDirections: 'Ouvrir l’itinéraire',
      openMap: 'Ouvrir la carte',
    },
    faq: {
      eyebrow: 'Informations utiles',
      titleLine1: 'Avant de',
      titleEm: 'nous rejoindre.',
      intro: 'Vous avez encore une question ? Appelez-nous et nous vous aiderons avec plaisir.',
      talkToUs: 'Contactez-nous',
      items: [
        {
          question: 'Où se trouve le Restaurant Aljazeera Alarabia ?',
          answer: 'Retrouvez-nous au Q5GX+88F, Avenue Mohammed V, Tanger 90000, Maroc. Utilisez le lien d’itinéraire ci-dessous pour voir la carte.',
        },
        {
          question: 'Quel type de cuisine servez-vous ?',
          answer: 'Le restaurant propose de la cuisine yéménite, des plats arabes et orientaux traditionnels. Le menu ci-dessus est indicatif ; appelez-nous pour connaître les plats du jour.',
        },
        {
          question: 'Quel est le prix moyen ?',
          answer: 'La fourchette indiquée est de 50 à 250 MAD par personne. Les prix des plats sont disponibles directement sur place.',
        },
        {
          question: 'La livraison est-elle disponible ?',
          answer: 'La livraison sans contact est proposée. Le restaurant est mentionné sur Glovo ; appelez-nous pour vérifier les options disponibles aujourd’hui.',
        },
        {
          question: 'Puis-je commander en ligne ?',
          answer: 'Une option de livraison mentionne Glovo. Pour passer commande directement, nous vous invitons à contacter le restaurant par téléphone.',
        },
        {
          question: 'Comment contacter le restaurant ?',
          answer: 'Appelez le +212 6 65 60 11 77. Le bouton d’appel sur cette page fonctionne directement depuis votre smartphone.',
        },
        {
          question: 'Quels sont les horaires d’ouverture ?',
          answer: 'Le restaurant ferme généralement à minuit. Pour confirmer l’heure d’ouverture aujourd’hui, nous vous recommandons d’appeler avant votre venue.',
        },
      ],
    },
    closing: {
      eyebrow: 'Votre place est à notre table',
      titleLine1: 'Bonne cuisine. Chaleureuse compagnie.',
      titleEm: 'Hospitalité arabe.',
      copy: 'Faites de votre prochain repas à Tanger une expérience riche en saveurs.',
      exploreMenu: 'Explorer le menu',
      callPhone: 'Appeler le +212 6 65 60 11 77',
      getDirections: 'Obtenir l’itinéraire',
      arabicSalutation: 'أهلاً وسهلاً',
    },
    footer: {
      tagline: 'Une table généreuse de cuisine yéménite et de spécialités arabes à Tanger.',
      exploreTitle: 'EXPLORER',
      visitTitle: 'VISITE',
      followTitle: 'SUIVRE & COMMANDER',
      ourStory: 'Notre histoire',
      theMenu: 'Le menu',
      gallery: 'Galerie',
      faqs: 'FAQs',
      googleMaps: 'Google Maps',
      getDirections: 'Obtenir l’itinéraire',
      callRestaurant: 'Appeler le restaurant',
      dineInFact: 'Repas sur place et livraison sans contact listés.',
      orderViaGlovo: 'Commander via Glovo',
      glovoMentioned: 'Présence Glovo mentionnée ; lien non confirmé',
      allRightsReserved: 'Tous droits réservés.',
      madeWithCare: 'Fait avec soin à Tanger',
      backToTop: 'Haut de page',
    },
    whatsapp: {
      messageUs: 'Écrivez-nous',
      callUs: 'Appelez-nous',
      ariaMessage: 'Envoyer un message à Aljazeera Alarabia sur WhatsApp',
      ariaCall: 'Appeler le restaurant Aljazeera Alarabia',
    },
    lightbox: {
      aria: 'Galerie photos',
      close: 'Fermer la galerie',
      prev: 'Image précédente',
      next: 'Image suivante',
    },
  },

  es: {
    meta: {
      title: 'Restaurante Aljazeera Alarabia | Cocina Yemení en Tánger',
      description:
        'Descubra la auténtica cocina yemení y platos árabes en el Restaurante Aljazeera Alarabia en Tánger. Explore la carta y reserve su mesa.',
      ogDescription:
        'Una generosa mesa de cocina yemení y especialidades árabes en la Avenida Mohammed V, Tánger. Conozca nuestro menú.',
    },
    topline: {
      note: 'Cocina yemení · Hospitalidad árabe · Tánger',
      callUs: '+212 6 65 60 11 77',
    },
    nav: {
      home: 'Inicio',
      story: 'Nuestra historia',
      menu: 'Menú',
      gallery: 'Galería',
      reviews: 'Reseñas',
      contact: 'Contacto',
      callRestaurant: 'Llamar al restaurante',
      callUs: 'Llámanos',
      orderNow: 'Pedir ahora',
    },
    hero: {
      eyebrow: 'Auténtica cocina yemení y árabe',
      titleLine1: 'El sabor de Arabia,',
      titleLine2: 'en el corazón de ',
      titleEm: 'Tánger.',
      arabicName: 'مطعم الجزيرة العربية',
      copy: 'Descubra la calidez de la hospitalidad árabe a través de aromáticos platos de arroz, especias tradicionales, generosas raciones y sabores creados para compartir.',
      ratingSuffix: 'reseñas en Google',
      exploreMenu: 'Explorar nuestro menú',
      findUs: 'Encuéntranos en Tánger',
      scrollDown: 'Desplázate para descubrir',
      sideNote: 'Hospitalidad servida con generosidad',
      captionStep: '01 / 04',
      captionText: 'De la mesa árabe',
    },
    highlights: {
      ratingCount: 'Calificación Google · 485 reseñas',
      cuisineTitle: 'Yemení y Árabe',
      cuisineSubtitle: 'Comida hecha para compartir',
      serviceTitle: 'En el local o en casa',
      serviceSubtitle: 'Consumir en el local · entrega sin contacto',
      locationTitle: 'En el corazón de Tánger',
      locationSubtitle: 'Avenida Mohammed V',
    },
    story: {
      eyebrow: 'Una mesa reservada para ti',
      titlePrefix: 'Hospitalidad arraigada en la ',
      titleEm: 'tradición árabe',
      welcomeTag: 'BIENVENIDO · أهلاً',
      photoLabel: 'Un lugar para reunirse',
      lede: 'En Aljazeera Alarabia, la bienvenida es sencilla: ven como eres, siéntate a la mesa y comparte una comida.',
      paragraph:
        'Nuestra mesa trae la cocina yemení y los platos árabes tradicionales a Tánger. Desde un fragante plato de arroz en el centro hasta ensaladas frescas y pequeños platos acompañantes, cada comida se convierte en un recuerdo inolvidable.',
      highlights: ['Ricos sabores árabes', 'Platos generosos', 'Cálida hospitalidad'],
      arabicGreeting: 'أهلاً وسهلاً بكم',
      planVisit: 'Planificar una visita',
    },
    menu: {
      eyebrow: 'De nuestra mesa',
      title: 'Descubre Nuestro Menú',
      intro: 'Desde especialidades de arroz aromático hasta mezze frescos y platos reconfortantes.',
      categories: {
        all: 'Todo',
        rice: 'Platos Especiales de Arroz',
        mains: 'Platos Principales',
        mezze: 'Mezze y Ensaladas',
        sides: 'Guarniciones y Acompañamientos',
      },
      items: {
        'Chicken Mandi with Spiced Rice': {
          name: 'Mandi de Pollo con Arroz Especiado',
          categoryKey: 'rice',
          description: 'Arroz aromático con pollo tierno y especias tradicionales reconfortantes.',
        },
        'Chicken Kabsa': {
          name: 'Kabsa de Pollo',
          categoryKey: 'rice',
          description: 'Pollo tradicional al estilo árabe servido sobre arroz especiado y almendras.',
        },
        'Meat Biryani': {
          name: 'Biryani de Carne',
          categoryKey: 'rice',
          description: 'Arroz basmati fragante con tiernos trozos de carne y especias orientales.',
        },
        Shawarma: {
          name: 'Shawarma',
          categoryKey: 'mains',
          description: 'Carne sazonada y asada al auténtico estilo de Oriente Medio.',
        },
        'Krispy Dish': {
          name: 'Plato Crujiente Krispy',
          categoryKey: 'mains',
          description: 'Una especialidad crujiente y sabrosa muy apreciada por nuestros comensales.',
        },
        Tabbouleh: {
          name: 'Tabulé',
          categoryKey: 'mezze',
          description: 'Fresca ensalada de perejil picado, tomates, menta y trigo bulgur.',
        },
        Fattoush: {
          name: 'Fatuch',
          categoryKey: 'mezze',
          description: 'Crujiente ensalada oriental con pan árabe tostado y toque de zumaque.',
        },
        'Cucumber & Yogurt Salad': {
          name: 'Ensalada de Pepino y Yogur',
          categoryKey: 'mezze',
          description: 'Refrescante yogur cremoso con pepino crujiente y menta.',
        },
        'Tomato & Cucumber Salad': {
          name: 'Ensalada de Tomate y Pepino',
          categoryKey: 'mezze',
          description: 'Verduras frescas cortadas y aderezadas con aceite de oliva y limón.',
        },
        'Appetizer Platter': {
          name: 'Plato de Degustación de Mezze',
          categoryKey: 'mezze',
          description: 'Una cuidada selección de aperitivos fríos y calientes para compartir.',
        },
        'Warm Flatbread': {
          name: 'Pan Plano Caliente',
          categoryKey: 'sides',
          description: 'Pan árabe tradicional recién horneado para acompañar la mesa.',
        },
        'Yogurt Dip': {
          name: 'Salsa de Yogur',
          categoryKey: 'sides',
          description: 'Salsa suave y fresca que acompaña perfectamente el pan caliente.',
        },
      },
      priceLabel: 'Precio disponible en el restaurante',
      menuNote: 'Para consultar disponibilidad, ingredientes y precios actuales, contacte directamente con el restaurante.',
      askToday: 'Preguntar por el menú de hoy',
      askPreparation: 'Consúltenos sobre la preparación de hoy',
      callToAsk: 'Llamar para preguntar sobre',
    },
    reviews: {
      eyebrow: 'Las buenas palabras viajan',
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Comentarios y experiencias auténticas compartidas por nuestros comensales.',
      readMore: 'Leer más reseñas en Google',
      reviewsCount: 'Google · 485 reseñas',
      badge: 'TESTIMONIO DE CLIENTE',
      highlights: [
        'Una familia de cuatro personas destacó el ambiente acogedor y el excelente servicio.',
        'El biryani de carne, el tabulé y la ensalada de pepino con yogur fueron elogiados por su sabor, precio y abundantes raciones.',
        'Los clientes elogiaron la variedad y el sabor, mencionando la pizza, los mezze frescos y la ensalada César con pollo.',
      ],
    },
    gallery: {
      eyebrow: 'Un vistazo a nuestro espacio',
      title: 'Un Festín para los Sentidos',
      subtitle: 'Comida y ambiente, pensados para inspirar su próxima visita.',
      captions: [
        'Mandi de pollo con arroz especiado',
        'Kabsa de pollo',
        'Biryani de carne',
        'Shawarma',
        'Mezze frescos y ensaladas',
        'Pan plano y salsas',
        'Una mesa acogedora',
      ],
    },
    services: {
      eyebrow: 'A tu manera',
      title: 'Tu Mesa, A Tu Manera',
      intro: 'Visítanos en persona o contáctanos para disfrutar de tu comida en casa.',
      dineInTitle: 'Consumir en el local',
      dineInDesc: 'Acomódate y disfruta de una comida completa en el restaurante.',
      dineInAria: 'Cómo llegar para comer en el restaurante',
      deliveryTitle: 'Entrega a domicilio',
      deliveryDesc: 'Entrega sin contacto disponible. Consúltenos sobre opciones y disponibilidad hoy.',
      deliveryAriaGlovo: 'Pedir a través de Glovo',
      deliveryAriaCall: 'Llamar para entrega a domicilio',
      takeawayTitle: 'Para llevar y servicio al coche',
      takeawayDesc: 'Contáctanos para conocer las opciones disponibles y preparar tu pedido.',
      takeawayAria: 'Llamar para pedir comida para llevar',
      orderOnline: 'Pedir online',
      orderNotListed: 'Opciones de pedido online no listadas',
      glovoAvailableDesc: 'Continúa al perfil oficial del restaurante en Glovo.',
      glovoUnconfirmedDesc: 'Mención de presencia en Glovo. Llámanos para confirmar el enlace de pedido.',
      continueToGlovo: 'Ir a Glovo',
      callRestaurant: 'Llamar al restaurante',
      callToOrder: 'Llamar para pedir',
      orderOnGlovo: 'Pedir en Glovo',
      askAboutGlovo: 'Consultar sobre Glovo',
      contactUs: 'Contáctanos',
    },
    visit: {
      eyebrow: 'Ven a visitarnos',
      title: 'Visítanos en Tánger',
      addressTitle: 'NUESTRA DIRECCIÓN',
      addressValue: 'Q5GX+88F, Avenue Mohammed V, Tánger 90000, Marruecos',
      callTitle: 'LLAMA ANTES DE VENIR',
      priceTitle: 'RANGO DE PRECIO MEDIO',
      priceValue: '50–250 MAD por persona',
      hoursTitle: 'HORARIOS DE APERTURA',
      hoursValue: 'El restaurante suele cerrar a medianoche. Para confirmar los horarios de hoy, le recomendamos llamar antes de visitarnos.',
      getDirections: 'Cómo llegar',
      callToConfirm: 'Llamar para confirmar',
      serviceFact: 'Consumo en el local y entrega sin contacto disponibles.',
      mapAvenue: 'AVENUE MOHAMMED V',
      mapCity: 'TANGER',
      openDirections: 'Abrir indicaciones',
      openMap: 'Abrir mapa',
    },
    faq: {
      eyebrow: 'Información de interés',
      titleLine1: 'Antes de',
      titleEm: 'visitarnos.',
      intro: '¿Tienes alguna duda? Llámanos y te atenderemos con mucho gusto.',
      talkToUs: 'Habla con nosotros',
      items: [
        {
          question: '¿Dónde está el Restaurante Aljazeera Alarabia?',
          answer: 'Encuéntranos en Q5GX+88F, Avenue Mohammed V, Tánger 90000, Marruecos. Usa el enlace de indicaciones para ver el mapa.',
        },
        {
          question: '¿Qué tipo de comida sirven?',
          answer: 'El restaurante se especializa en cocina yemení, platos árabes y gastronomía tradicional de Oriente Medio. El menú es una guía; llame para confirmar los platos del día.',
        },
        {
          question: '¿Cuál es el precio medio?',
          answer: 'El rango orientativo es de 50 a 250 MAD por persona. Los precios exactos se facilitan directamente en el restaurante.',
        },
        {
          question: '¿Tienen entrega a domicilio?',
          answer: 'Disponemos de entrega sin contacto. Se menciona servicio a través de Glovo; llámenos para confirmar las opciones activas.',
        },
        {
          question: '¿Se puede pedir por internet?',
          answer: 'Puede consultar la disponibilidad en Glovo o ponerse en contacto telefónico con nosotros para preparar su pedido rápidamente.',
        },
        {
          question: '¿Cómo puedo contactar con el restaurante?',
          answer: 'Llame al +212 6 65 60 11 77. El botón de llamada funciona de inmediato desde cualquier teléfono móvil.',
        },
        {
          question: '¿Cuáles son los horarios de apertura?',
          answer: 'El restaurante suele cerrar a medianoche. Para asegurar el horario de apertura del día, sugerimos llamar antes de venir.',
        },
      ],
    },
    closing: {
      eyebrow: 'Tu sitio está en nuestra mesa',
      titleLine1: 'Buena comida. Gran compañía.',
      titleEm: 'Hospitalidad árabe.',
      copy: 'Haz de tu próxima comida en Tánger una experiencia llena de sabor.',
      exploreMenu: 'Explorar el menú',
      callPhone: 'Llamar al +212 6 65 60 11 77',
      getDirections: 'Cómo llegar',
      arabicSalutation: 'أهلاً وسهلاً',
    },
    footer: {
      tagline: 'Una generosa mesa de cocina yemení y especialidades árabes en Tánger.',
      exploreTitle: 'EXPLORAR',
      visitTitle: 'VISITA',
      followTitle: 'SEGUIR Y PEDIR',
      ourStory: 'Nuestra historia',
      theMenu: 'El menú',
      gallery: 'Galería',
      faqs: 'Preguntas frecuentes',
      googleMaps: 'Google Maps',
      getDirections: 'Cómo llegar',
      callRestaurant: 'Llamar al restaurante',
      dineInFact: 'Servicio en el local y entrega sin contacto disponibles.',
      orderViaGlovo: 'Pedir por Glovo',
      glovoMentioned: 'Mención en Glovo; enlace pendiente de confirmar',
      allRightsReserved: 'Todos los derechos reservados.',
      madeWithCare: 'Hecho con dedicación en Tánger',
      backToTop: 'Volver arriba',
    },
    whatsapp: {
      messageUs: 'Escríbenos',
      callUs: 'Llámanos',
      ariaMessage: 'Enviar mensaje al Restaurante Aljazeera Alarabia por WhatsApp',
      ariaCall: 'Llamar al Restaurante Aljazeera Alarabia',
    },
    lightbox: {
      aria: 'Galería de fotos',
      close: 'Cerrar galería',
      prev: 'Foto anterior',
      next: 'Foto siguiente',
    },
  },

  ar: {
    meta: {
      title: 'مطعم الجزيرة العربية | المطبخ اليمني الأصيل في طنجة',
      description:
        'استمتع بأشهى مأكولات المطبخ اليمني والأطباق العربية الأصيلة في مطعم الجزيرة العربية بطنجة. تصفح المنيو، وتعرف على موقعنا واتصل بنا.',
      ogDescription:
        'مائدة يمنية وعربية فاخرة في شارع محمد الخامس، طنجة. استكشف قائمة الطعام وخطط لزيارتك.',
    },
    topline: {
      note: 'مأكولات يمنية · ضيافة عربية · طنجة',
      callUs: '+212 6 65 60 11 77',
    },
    nav: {
      home: 'الرئيسية',
      story: 'قصتنا',
      menu: 'قائمة الطعام',
      gallery: 'الصور',
      reviews: 'آراء الزوار',
      contact: 'اتصل بنا',
      callRestaurant: 'الاتصال بالمطعم',
      callUs: 'اتصل بنا',
      orderNow: 'اطلب الآن',
    },
    hero: {
      eyebrow: 'أصالة المطبخ اليمني والعربي',
      titleLine1: 'نكهة الجزيرة العربية،',
      titleLine2: 'في قلب ',
      titleEm: 'طنجة.',
      arabicName: 'مطعم الجزيرة العربية',
      copy: 'اكتشف دفء الضيافة العربية الأصيلة من خلال أطباق الأرز العطرة الفاخرة، التوابل التقليدية، والأطباق الكريمة المعدّة لتجمع الأحباب.',
      ratingSuffix: 'تقييم على Google',
      exploreMenu: 'استكشف قائمتنا',
      findUs: 'موقعنا في طنجة',
      scrollDown: 'مرّر للاكتشاف',
      sideNote: 'ضيافة تُقدَّم بكل كرم وسخاء',
      captionStep: '01 / 04',
      captionText: 'من المائدة العربية',
    },
    highlights: {
      ratingCount: 'تقييم Google · 485 تقييماً',
      cuisineTitle: 'يمني وعربي',
      cuisineSubtitle: 'أطباق صُممت للمشاركة',
      serviceTitle: 'في المطعم أو في بيتك',
      serviceSubtitle: 'تناول بالداخل · توصيل بدون تلامس',
      locationTitle: 'في قلب مدينة طنجة',
      locationSubtitle: 'شارع محمد الخامس',
    },
    story: {
      eyebrow: 'مائدة تتسع للجميع',
      titlePrefix: 'ضيافة متجذرة في ',
      titleEm: 'التقاليد العربية الأصيلة',
      welcomeTag: 'أهلاً وسهلاً · مرحبا',
      photoLabel: 'مكان يجمع العائلة والأحباب',
      lede: 'في مطعم الجزيرة العربية، ترحيبنا نابع من القلب: تفضل كما أنت، خذ مكانك، وشاركنا أطيب الوجبات.',
      paragraph:
        'تجمع مائدتنا روائع المطبخ اليمني والأطباق العربية المحبوبة في عروس الشمال طنجة. من أطباق الأرز المتبلة بالبهارات الفاخرة في المنتصف، إلى أطباق السلطات الطازجة والمقبلات الشهية، لتستمتع بوجبة استثنائية تناسب ذوقك.',
      highlights: ['نكهات عربية غنية وأصيلة', 'أطباق وفيرة وكريمة', 'ضيافة وترحيب دافئ'],
      arabicGreeting: 'أهلاً وسهلاً بكم في داركم',
      planVisit: 'خطط لزيارتنا',
    },
    menu: {
      eyebrow: 'من مائدتنا',
      title: 'استكشف قائمة الطعام',
      intro: 'من أطباق الأرز العطرة الفاخرة إلى المقبلات الشامية الطازجة والوجبات المميزة.',
      categories: {
        all: 'الكل',
        rice: 'أطباق الأرز الخاصة',
        mains: 'الأطباق الرئيسية',
        mezze: 'المقبلات والسلطات',
        sides: 'المقبلات الجانبية والخبز',
      },
      items: {
        'Chicken Mandi with Spiced Rice': {
          name: 'مندي دجاج مع أرز متبل',
          categoryKey: 'rice',
          description: 'أرز عطري مدخن مع دجاج طري وتوابل يمنية زكية.',
        },
        'Chicken Kabsa': {
          name: 'كبسة دجاج',
          categoryKey: 'rice',
          description: 'دجاج محضر على الطريقة العربية التقليدية مع أرز حار ولوز محمص.',
        },
        'Meat Biryani': {
          name: 'برياني لحم',
          categoryKey: 'rice',
          description: 'أرز بسمتي فاخر مع قطع اللحم الطرية والبهارات الهندية والشرقية الغنية.',
        },
        Shawarma: {
          name: 'شاورما عربية',
          categoryKey: 'mains',
          description: 'لحم متبل ومحمص على الطريقة الشامية مع تتبيلة أصيلة.',
        },
        'Krispy Dish': {
          name: 'طبق كريسبي المقرمش',
          categoryKey: 'mains',
          description: 'طبق الدجاج المقرمش اللذيذ المحبوب لدى الكبار والصغار.',
        },
        Tabbouleh: {
          name: 'تبولة لبنانية',
          categoryKey: 'mezze',
          description: 'بقدونس طازج مفروم مع الطماطم والبرغل وزيت الزيتون البكر.',
        },
        Fattoush: {
          name: 'فتوش',
          categoryKey: 'mezze',
          description: 'سلطة خضار طازجة ومقرمشة مع الخبز المحمص ودبس الرمان.',
        },
        'Cucumber & Yogurt Salad': {
          name: 'سلطة خيار بالزبادي',
          categoryKey: 'mezze',
          description: 'زبادي بارد ومنعش مع قطع الخيار والنعناع المجفف.',
        },
        'Tomato & Cucumber Salad': {
          name: 'سلطة طماطم وخيار',
          categoryKey: 'mezze',
          description: 'خضروات طازجة متبلة ببساطة بزيت الزيتون والليمون.',
        },
        'Appetizer Platter': {
          name: 'طبق مقبلات مشكلة',
          categoryKey: 'mezze',
          description: 'تشكيلة مميزة من أشهى المقبلات للمشاركة على المائدة.',
        },
        'Warm Flatbread': {
          name: 'خبز عربي ساخن',
          categoryKey: 'sides',
          description: 'خبز طازج وساخن يخرج من الفرن ليرافق أطباقك.',
        },
        'Yogurt Dip': {
          name: 'غموس الزبادي',
          categoryKey: 'sides',
          description: 'صلصة زبادي متبلة بنعومة لغمس الخبز الساخن.',
        },
      },
      priceLabel: 'الأسعار متاحة في المطعم',
      menuNote: 'لمعرفة التوفر الحالي والمكونات والأسعار بدقة، يُرجى التواصل مباشرة مع المطعم.',
      askToday: 'اسأل عن أطباق اليوم الخاصة',
      askPreparation: 'اسألنا عن إعداد اليوم الطازج',
      callToAsk: 'اتصل للاستفسار عن',
    },
    reviews: {
      eyebrow: 'السمعة الطيبة عنواننا',
      title: 'ماذا يقول ضيوفنا',
      subtitle: 'ملخص لتجارب وانطباعات حقيقية شاركها رواد المطعم.',
      readMore: 'قراءة المزيد من التقييمات على Google',
      reviewsCount: 'Google · 485 تقييماً',
      badge: 'انطباع موثق من زائر',
      highlights: [
        'عائلة مكونة من 4 أفراد أثنت على كرم الضيافة والأجواء العائلية المريحة والخدمة السريعة.',
        'نال برياني اللحم، التبولة، وسلطة الخيار بالزبادي إشادة واسعة لحسن المذاق والكميات الوفيرة والقيمة الممتازة.',
        'أشاد الضيوف بتنوع النكهات وغنى الأطباق، مشيدين بالبيتزا والمقبلات الطازجة وسلطة السيزر بالدجاج.',
      ],
    },
    gallery: {
      eyebrow: 'جولة بصرية',
      title: 'وليمة تأسر الحواس',
      subtitle: 'أطباق شهية وأجواء مميزة بانتظار تشريفكم لنا.',
      captions: [
        'مندي دجاج مع أرز متبل',
        'كبسة دجاج شهية',
        'برياني لحم فاخر',
        'شاورما عربية',
        'مقبلات وسلطات طازجة',
        'خبز ساخن ومقبلات جانبية',
        'مائدة ترحيبية دافئة',
      ],
    },
    services: {
      eyebrow: 'بالطريقة التي تناسبك',
      title: 'مائدتك، على ذوقك',
      intro: 'شرفنا بزيارتك في المطعم أو اطلب وجبتك المفضلة لتصلك أينما كنت.',
      dineInTitle: 'تناول الطعام بالمطعم',
      dineInDesc: 'استرخِ واستمتع بتجربة طعام دافئة ومريحة داخل صالة المطعم.',
      dineInAria: 'الحصول على الاتجاهات للوصول للمطعم',
      deliveryTitle: 'خدمة التوصيل',
      deliveryDesc: 'توصيل متاح وبدون تلامس. اتصل بنا لمعرفة أسرع خيارات التوصيل حالياً.',
      deliveryAriaGlovo: 'الطلب عبر غلوفو',
      deliveryAriaCall: 'الاتصال بشأن التوصيل',
      takeawayTitle: 'طلبات السفري واستلام السيارة',
      takeawayDesc: 'تواصل معنا مسبقاً لتجهيز وجبتك ساخنة للاستلام السريع.',
      takeawayAria: 'الاتصال لطلب وجبة سفري',
      orderOnline: 'الطلب عبر الإنترنت',
      orderNotListed: 'معلومات الطلب المباشر',
      glovoAvailableDesc: 'المتابعة مباشرة إلى صفحة المطعم على تطبيق غلوفو.',
      glovoUnconfirmedDesc: 'المطعم متوفر على تطبيق غلوفو. اتصل بنا لتأكيد رابط الطلب الحالي.',
      continueToGlovo: 'المتابعة إلى غلوفو',
      callRestaurant: 'الاتصال بالمطعم',
      callToOrder: 'اتصل للطلب فوراً',
      orderOnGlovo: 'اطلب عبر غلوفو',
      askAboutGlovo: 'استفسر عن غلوفو',
      contactUs: 'تواصل معنا',
    },
    visit: {
      eyebrow: 'يسعدنا لقاؤكم',
      title: 'تفضل بزيارتنا في طنجة',
      addressTitle: 'العنوان',
      addressValue: 'شارع محمد الخامس، طنجة 90000، المغرب (رمز: Q5GX+88F)',
      callTitle: 'الاتصال المسبق',
      priceTitle: 'متوسط الأسعار',
      priceValue: '50–250 درهم للشخص',
      hoursTitle: 'أوقات العمل',
      hoursValue: 'يستقبل المطعم زواره يومياً حتى منتصف الليل. للتأكد من مواعيد اليوم بدقة، يُرجى الاتصال بنا مسبقاً.',
      getDirections: 'مسار الطريق والاتجاهات',
      callToConfirm: 'اتصل للتأكيد',
      serviceFact: 'تناول الطعام بالداخل والتوصيل متوفران.',
      mapAvenue: 'شارع محمد الخامس',
      mapCity: 'طنجة',
      openDirections: 'فتح مسار الطريق',
      openMap: 'عرض الخريطة',
    },
    faq: {
      eyebrow: 'معلومات تهمك',
      titleLine1: 'قبل أن',
      titleEm: 'تصل إلينا.',
      intro: 'هل لديك أي سؤال؟ اتصل بنا وسنسعد بتقديم كل المساعدة.',
      talkToUs: 'تحدث معنا',
      items: [
        {
          question: 'أين يقع مطعم الجزيرة العربية؟',
          answer: 'تجدوننا في شارع محمد الخامس، طنجة 90000، المغرب (رمز الموقع: Q5GX+88F). استخدم رابط الاتجاهات لعرض موقعنا على الخريطة.',
        },
        {
          question: 'ما نوع المأكولات التي يقدمها المطعم؟',
          answer: 'يقدم المطعم مأكولات يمنية أصيلة، أطباقاً عربية تقليدية، ومأكولات شرقية متنوعة. القائمة دليل عام ويسعدنا اتصالكم لتأكيد وجبات اليوم.',
        },
        {
          question: 'ما هو متوسط الأسعار؟',
          answer: 'يتراوح النطاق بين 50 و250 درهم مغربي للشخص الواحد، والأسعار التفصيلية متوفرة عند الطلب في المطعم.',
        },
        {
          question: 'هل تتوفر خدمة التوصيل؟',
          answer: 'نعم، تتوفر خدمة التوصيل بدون تلامس والطلب عبر تطبيق غلوفو. تفضل بالاتصال بنا لمعرفة الخيارات المتاحة لمنطقتك.',
        },
        {
          question: 'هل يمكنني الطلب عبر الإنترنت؟',
          answer: 'يمكنك إيجادنا على تطبيق غلوفو، أو الاتصال بنا هاتفياً لترتيب وتجهيز طلبك بكل سهولة.',
        },
        {
          question: 'كيف يمكنني التواصل مع المطعم؟',
          answer: 'اتصل بنا مباشرة على الرقم: 1177 60 65 6 212+ أو راسلنا عبر واتساب. أزرار الاتصال في الموقع تعمل فوراً.',
        },
        {
          question: 'ما هي مواعيد العمل؟',
          answer: 'يغلق المطعم أبوابه عادة عند منتصف الليل. لتأكيد موعد الافتتاح وساعات العمل لليوم الحالي، يُرجى الاتصال بنا مسبقاً.',
        },
      ],
    },
    closing: {
      eyebrow: 'مكانك محجوز على مائدتنا',
      titleLine1: 'طعام طيب. صحبة رائعة.',
      titleEm: 'ضيافة عربية أصيلة.',
      copy: 'اجعل وجبتك القادمة في طنجة تجربة لا تُنسى عامرة بألذ النكهات.',
      exploreMenu: 'استكشف القائمة',
      callPhone: 'اتصل بنا: 77 11 60 65 6 212+',
      getDirections: 'مسار الطريق',
      arabicSalutation: 'أهلاً وسهلاً',
    },
    footer: {
      tagline: 'مائدة كريمة غنية بأشهى المأكولات اليمنية والأطباق العربية في طنجة.',
      exploreTitle: 'استكشف',
      visitTitle: 'زيارتنا',
      followTitle: 'تابعنا واطلب',
      ourStory: 'قصتنا',
      theMenu: 'القائمة',
      gallery: 'الصور',
      faqs: 'الأسئلة الشائعة',
      googleMaps: 'خرائط Google',
      getDirections: 'مسار الطريق',
      callRestaurant: 'الاتصال بالمطعم',
      dineInFact: 'تناول بالداخل وتوصيل بدون تلامس متاح.',
      orderViaGlovo: 'الطلب عبر غلوفو',
      glovoMentioned: 'المطعم متوفر على غلوفو',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      madeWithCare: 'صُنِع بكل إتقان في طنجة',
      backToTop: 'العودة للأعلى',
    },
    whatsapp: {
      messageUs: 'تواصل معنا',
      callUs: 'اتصل بنا',
      ariaMessage: 'مراسلة مطعم الجزيرة العربية على واتساب',
      ariaCall: 'الاتصال بمطعم الجزيرة العربية',
    },
    lightbox: {
      aria: 'معرض الصور',
      close: 'إغلاق المعرض',
      prev: 'الصورة السابقة',
      next: 'الصورة التالية',
    },
  },
};
