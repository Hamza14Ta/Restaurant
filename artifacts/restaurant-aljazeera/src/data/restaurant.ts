export type MenuCategory =
  | 'Signature Rice Dishes'
  | 'Main Courses'
  | 'Mezze & Salads'
  | 'Sides & Accompaniments';

export type MenuItem = {
  name: string;
  category: MenuCategory;
  description: string;
  image?: string;
  alt?: string;
  price?: string;
  available?: boolean;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const restaurant = {
  name: 'Restaurant Aljazeera Alarabia',
  arabicName: 'مطعم الجزيرة العربية',
  logo: '/images/Aljazeera Al Arabia Logo.png',
  cuisine: ['Yemeni cuisine', 'Arabic dishes', 'Middle Eastern food'],
  rating: 4.4,
  reviewCount: 485,
  priceRange: '50–250 MAD per person',
  address: 'Q5GX+88F, Avenue Mohammed V, Tangier 90000, Morocco',
  phone: '+212 6 65 60 11 77',
  phoneHref: 'tel:+212665601177',
  services: ['Dine-in', 'Contactless delivery'],
  driveServiceNote: 'Drive-through / drive service is mentioned in a listing; exact option is unconfirmed.',
  hoursNote: 'A listing says the restaurant closes at midnight. Weekly hours and opening time are not confirmed; please call ahead.',
  external: {
    // Add confirmed owner-managed URLs here. Empty values gracefully fall back to search/contact.
    glovoUrl: '',
    instagramUrl: '',
    facebookUrl: '',
    // Uses the supplied restaurant phone; change if WhatsApp uses another number.
    whatsappUrl: 'https://wa.me/212665601177',
    googleMapsEmbedUrl: '',
    googleMapsReviewsUrl: '',
  },
  mapSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Restaurant Aljazeera Alarabia, Q5GX+88F, Avenue Mohammed V, Tangier 90000, Morocco'),
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Restaurant Aljazeera Alarabia, Q5GX+88F, Avenue Mohammed V, Tangier 90000, Morocco'),
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Restaurant Aljazeera Alarabia, Q5GX+88F, Avenue Mohammed V, Tangier 90000, Morocco'),
  categories: [
    'All',
    'Signature Rice Dishes',
    'Main Courses',
    'Mezze & Salads',
    'Sides & Accompaniments',
  ] as const,
  menu: [
    {
      name: 'Chicken Mandi with Spiced Rice',
      category: 'Signature Rice Dishes',
      description: 'Aromatic rice, chicken and warming spices.',
      image: '/images/mandi-hero.jpg',
      alt: 'Yemeni chicken mandi served over fragrant spiced rice',
    },
    {
      name: 'Chicken Kabsa',
      category: 'Signature Rice Dishes',
      description: 'Traditional Arabian-style chicken and spiced rice.',
      image: '/images/chicken-kabsa.jpg',
      alt: 'Chicken kabsa with spiced rice and toasted almonds',
    },
    {
      name: 'Meat Biryani',
      category: 'Signature Rice Dishes',
      description: 'Fragrant rice with meat and spices.',
      image: '/images/meat-biryani.jpg',
      alt: 'Meat biryani with fragrant long-grain rice and spices',
    },
    {
      name: 'Shawarma',
      category: 'Main Courses',
      description: 'Seasoned meat, Middle Eastern-style.',
      image: '/images/shawarma.jpg',
      alt: 'Middle Eastern-style shawarma served with fresh accompaniments',
    },
    {
      name: 'Krispy Dish',
      category: 'Main Courses',
      description: 'A menu name guests may recognize. Exact ingredients and preparation are unconfirmed.',
    },
    {
      name: 'Tabbouleh',
      category: 'Mezze & Salads',
      description: 'Fresh herb and bulgur salad.',
      image: '/images/mezze.jpg',
      alt: 'Fresh tabbouleh and other Middle Eastern mezze in ceramic bowls',
    },
    {
      name: 'Fattoush',
      category: 'Mezze & Salads',
      description: 'A refreshing Middle Eastern salad.',
      image: '/images/mezze.jpg',
      alt: 'A fresh Middle Eastern salad served with colorful mezze',
    },
    {
      name: 'Cucumber & Yogurt Salad',
      category: 'Mezze & Salads',
      description: 'Cool yogurt with cucumber.',
      image: '/images/mezze.jpg',
      alt: 'Cucumber and yogurt salad among fresh mezze',
    },
    {
      name: 'Tomato & Cucumber Salad',
      category: 'Mezze & Salads',
      description: 'Chopped vegetables, simply served.',
      image: '/images/mezze.jpg',
      alt: 'Chopped tomato and cucumber salad with fresh herbs',
    },
    {
      name: 'Appetizer Platter',
      category: 'Mezze & Salads',
      description: 'A selection to share; platter contents to be confirmed.',
      image: '/images/mezze.jpg',
      alt: 'A selection of fresh mezze presented in small ceramic bowls',
    },
    {
      name: 'Warm Flatbread',
      category: 'Sides & Accompaniments',
      description: 'A warm accompaniment for the table.',
      image: '/images/flatbread-dips.jpg',
      alt: 'Warm flatbread served with yogurt dip',
    },
    {
      name: 'Yogurt Dip',
      category: 'Sides & Accompaniments',
      description: 'A cool dip served alongside flatbread.',
      image: '/images/flatbread-dips.jpg',
      alt: 'A bowl of yogurt dip served with flatbread',
    },
  ] satisfies MenuItem[],
  gallery: [
    { src: '/images/mandi-hero.jpg', alt: 'Yemeni chicken mandi with spiced rice', caption: 'Chicken mandi with spiced rice' },
    { src: '/images/chicken-kabsa.jpg', alt: 'Chicken kabsa with spiced rice and toasted almonds', caption: 'Chicken kabsa' },
    { src: '/images/meat-biryani.jpg', alt: 'Meat biryani with fragrant rice and spices', caption: 'Meat biryani' },
    { src: '/images/shawarma.jpg', alt: 'Middle Eastern-style shawarma on a plate', caption: 'Shawarma' },
    { src: '/images/mezze.jpg', alt: 'Fresh Middle Eastern mezze and salads', caption: 'Fresh mezze & salads' },
    { src: '/images/flatbread-dips.jpg', alt: 'Warm flatbread with yogurt dip', caption: 'Flatbread & dips' },
    { src: '/images/restaurant-interior.jpg', alt: 'Warmly lit restaurant interior with green seating and brass details', caption: 'A welcoming table' },
  ] satisfies GalleryItem[],
  reviewHighlights: [
    'A family of four appreciated the welcoming atmosphere and great service.',
    'Meat biryani, tabbouleh and cucumber-yogurt salad were praised for taste, value and generous portions.',
    'Guests praised the variety and flavor, mentioning pizza, fresh mezze and chicken Caesar salad.',
  ],
  faqs: [
    { question: 'Where is Restaurant Aljazeera Alarabia?', answer: 'Find us at Q5GX+88F, Avenue Mohammed V, Tangier 90000, Morocco. Use the directions link below for a map.' },
    { question: 'What kind of food do you serve?', answer: 'The restaurant is listed for Yemeni cuisine, Arabic dishes and Middle Eastern food. The menu above is a guide; please call to confirm today’s availability.' },
    { question: 'What is the average price?', answer: 'The listed range is 50–250 MAD per person. Dish prices are not published here; please ask the restaurant for current pricing.' },
    { question: 'Is delivery available?', answer: 'Contactless delivery is listed. An online delivery listing mentions Glovo, but a confirmed direct ordering link is not available here. Please call to check current options.' },
    { question: 'Can I order online?', answer: 'A delivery listing mentions Glovo. As no confirmed direct link is available, please contact the restaurant to confirm how to order.' },
    { question: 'How can I contact the restaurant?', answer: 'Call +212 6 65 60 11 77. The call link on this page works on mobile and supported calling apps.' },
    { question: 'What are the opening hours?', answer: 'A listing says the restaurant closes at midnight. Weekly hours and opening time are not confirmed, so please call ahead before visiting.' },
  ],
} as const;

export type RestaurantCategory = (typeof restaurant.categories)[number];
