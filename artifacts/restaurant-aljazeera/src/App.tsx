import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu as MenuIcon,
  Navigation,
  Phone,
  Star,
  Truck,
  Utensils,
  X,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { restaurant, type MenuItem } from './data/restaurant';
import { translations, type Language } from './data/translations';
import { LanguageSelector } from './components/LanguageSelector';

const phoneLink = restaurant.phoneHref;
const glovoAvailable = Boolean(restaurant.external.glovoUrl);
const instagramAvailable = Boolean(restaurant.external.instagramUrl);
const facebookAvailable = Boolean(restaurant.external.facebookUrl);
const whatsappAvailable = Boolean(restaurant.external.whatsappUrl);

type CatKey = 'all' | 'rice' | 'mains' | 'mezze' | 'sides';

const categoryKeyMap: Record<string, CatKey> = {
  'Signature Rice Dishes': 'rice',
  'Main Courses': 'mains',
  'Mezze & Salads': 'mezze',
  'Sides & Accompaniments': 'sides',
};

function menuPriceLabel(item: MenuItem, fallbackPrice: string) {
  const price = item.price ?? fallbackPrice;
  return item.available === false ? `${price} · Availability unconfirmed` : price;
}

function BrandMark({ inverse = false, lang = 'en' }: { inverse?: boolean; lang?: Language }) {
  return (
    <a href="#top" className={`brand-mark ${inverse ? 'brand-mark-inverse' : ''}`} aria-label={`${restaurant.name} home`}>
      <img
        src="/images/Aljazeera Al Arabia Logo.png"
        alt={restaurant.name}
        className="brand-logo"
        width={46}
        height={46}
      />
      <span className="brand-copy">
        <strong>{lang === 'ar' ? 'الجزيرة' : 'ALJAZEERA'}</strong>
        <small>{lang === 'ar' ? 'العربية · طنجة' : lang === 'fr' ? 'AL ARABIA · TANGER' : 'AL ARABIA · TANGIER'}</small>
      </span>
    </a>
  );
}

function ActionLink({
  href,
  children,
  variant = 'gold',
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'text';
  target?: string;
  rel?: string;
}) {
  return (
    <a className={`action-link action-${variant}`} href={href} target={target} rel={rel}>
      <span>{children}</span><ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />
    </a>
  );
}

function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aljazeera_lang') as Language;
      if (saved && ['en', 'fr', 'es', 'ar'].includes(saved)) {
        return saved;
      }
    }
    return 'en';
  });

  const t = translations[lang] || translations.en;

  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<CatKey>('all');
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const visibleMenu = restaurant.menu.filter(
    (item) => category === 'all' || categoryKeyMap[item.category] === category,
  );

  const closeMenu = () => setMenuOpen(false);

  const moveGallery = (delta: number) => {
    if (activeImage === null) return;
    setActiveImage((activeImage + delta + restaurant.gallery.length) % restaurant.gallery.length);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.meta.title;
    localStorage.setItem('aljazeera_lang', lang);
  }, [lang, t]);

  useEffect(() => {
    if (activeImage === null) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
      if (event.key === 'ArrowRight') moveGallery(1);
      if (event.key === 'ArrowLeft') moveGallery(-1);
    };
    document.addEventListener('keydown', onKeyDown);
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = priorOverflow;
    };
  }, [activeImage]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      document.documentElement.classList.remove('reveal-ready');
      return undefined;
    }

    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -32px 0px' },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [category, lang]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    alternateName: restaurant.arabicName,
    description: t.meta.description,
    servesCuisine: restaurant.cuisine,
    telephone: restaurant.phone,
    priceRange: restaurant.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Q5GX+88F, Avenue Mohammed V',
      addressLocality: 'Tangier',
      postalCode: '90000',
      addressCountry: 'MA',
    },
  };

  const categoryFilterList: { key: CatKey; label: string }[] = [
    { key: 'all', label: t.menu.categories.all },
    { key: 'rice', label: t.menu.categories.rice },
    { key: 'mains', label: t.menu.categories.mains },
    { key: 'mezze', label: t.menu.categories.mezze },
    { key: 'sides', label: t.menu.categories.sides },
  ];

  return (
    <div className="site-shell" id="top">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <div className="topline">
        <div className="container-wide topline-inner">
          <span>{t.topline.note}</span>
          <a href={phoneLink}>
            <Phone size={13} aria-hidden="true" /> {restaurant.phone}
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container-wide header-inner">
          <BrandMark lang={lang} />

          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#top" onClick={closeMenu}>{t.nav.home}</a>
            <a href="#story" onClick={closeMenu}>{t.nav.story}</a>
            <a href="#menu" onClick={closeMenu}>{t.nav.menu}</a>
            <a href="#gallery" onClick={closeMenu}>{t.nav.gallery}</a>
            <a href="#reviews" onClick={closeMenu}>{t.nav.reviews}</a>
            <a href="#visit" onClick={closeMenu}>{t.nav.contact}</a>

            <div className="mobile-nav-action">
              <ActionLink href={phoneLink}>{t.nav.callRestaurant}</ActionLink>
            </div>
          </nav>

          <div className="header-actions-wrap">
            <LanguageSelector
              currentLang={lang}
              onSelectLanguage={setLang}
              className="header-lang-selector"
            />
            <div className="header-divider" aria-hidden="true" />
            <div className="header-cta">
              <a href={phoneLink} className="header-phone">
                <Phone size={14} aria-hidden="true" /> {t.nav.callUs}
              </a>
              <a href="#services" className="header-order">
                {t.nav.orderNow} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero hero-photo" aria-labelledby="hero-title">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="container-wide hero-content" data-reveal>
            <p className="eyebrow hero-eyebrow">
              <span /> {t.hero.eyebrow}
            </p>
            <h1 className="display" id="hero-title">
              {t.hero.titleLine1}<br />
              {t.hero.titleLine2}<em>{t.hero.titleEm}</em>
            </h1>
            <p className="arabic hero-arabic" lang="ar" dir="rtl">{t.hero.arabicName}</p>
            <p className="hero-copy">{t.hero.copy}</p>
            <p className="hero-rating">
              <Star size={14} fill="currentColor" aria-hidden="true" />
              <strong>{restaurant.rating}/5</strong>
              <span>· {restaurant.reviewCount} {t.hero.ratingSuffix}</span>
            </p>
            <div className="hero-actions">
              <ActionLink href="#menu">{t.hero.exploreMenu}</ActionLink>
              <ActionLink href={restaurant.directionsUrl} variant="outline" target="_blank" rel="noreferrer">
                {t.hero.findUs}
              </ActionLink>
            </div>
            <a href="#highlights" className="hero-scroll">
              <ArrowDown size={15} /> {t.hero.scrollDown}
            </a>
          </div>
          <div className="hero-side-note" aria-hidden="true">
            <span>{t.hero.sideNote}</span>
            <i />
          </div>
          <div className="hero-caption">
            <span>{t.hero.captionStep}</span>
            <span>{t.hero.captionText}</span>
          </div>
        </section>

        <section className="highlights" id="highlights" aria-label="Restaurant highlights">
          <div className="container-wide highlights-inner" data-reveal>
            <div className="rating-highlight">
              <div className="rating-stars" aria-label={`${restaurant.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={14} fill="currentColor" strokeWidth={1} aria-hidden="true" />
                ))}
              </div>
              <div>
                <strong>{restaurant.rating}<span> / 5</span></strong>
                <small>{t.highlights.ratingCount}</small>
              </div>
            </div>
            <div className="highlight-divider" />
            <div className="highlight-item">
              <Utensils size={18} />
              <div>
                <strong>{t.highlights.cuisineTitle}</strong>
                <small>{t.highlights.cuisineSubtitle}</small>
              </div>
            </div>
            <div className="highlight-divider" />
            <div className="highlight-item">
              <Truck size={19} />
              <div>
                <strong>{t.highlights.serviceTitle}</strong>
                <small>{t.highlights.serviceSubtitle}</small>
              </div>
            </div>
            <div className="highlight-divider" />
            <a href={restaurant.directionsUrl} className="highlight-location" target="_blank" rel="noreferrer">
              <MapPin size={18} />
              <span>
                <strong>{t.highlights.locationTitle}</strong>
                <small>{t.highlights.locationSubtitle} <ArrowUpRight size={12} /></small>
              </span>
            </a>
          </div>
        </section>

        <section className="story-section section-pad" id="story">
          <div className="container-wide story-layout">
            <div className="story-photo-wrap" data-reveal>
              <img
                className="story-photo"
                src="/images/restaurant-interior.jpg"
                alt="Warmly lit restaurant interior with green seating and brass details"
              />
              <div className="story-stamp">
                <span className="arabic" lang="ar" dir="rtl">أهلاً وسهلاً</span>
                <small>{t.story.welcomeTag}</small>
              </div>
              <span className="photo-credit-label">{t.story.photoLabel}</span>
            </div>
            <div className="story-copy" data-reveal>
              <p className="eyebrow section-eyebrow">{t.story.eyebrow}</p>
              <h2 className="display">
                {t.story.titlePrefix}<em>{t.story.titleEm}</em>
              </h2>
              <p className="story-lede">{t.story.lede}</p>
              <p>{t.story.paragraph}</p>
              <ul className="story-highlights" aria-label="What to expect">
                {t.story.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="arabic story-arabic" lang="ar" dir="rtl">{t.story.arabicGreeting}</p>
              <ActionLink href="#visit" variant="text">{t.story.planVisit}</ActionLink>
            </div>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="container-wide">
            <div className="menu-heading" data-reveal>
              <div>
                <p className="eyebrow section-eyebrow">{t.menu.eyebrow}</p>
                <h2 className="display">{t.menu.title}</h2>
              </div>
              <p className="menu-intro">{t.menu.intro}</p>
            </div>
            <div className="menu-filters" role="group" aria-label="Filter menu by category" data-reveal>
              {categoryFilterList.map(({ key, label }) => (
                <button
                  type="button"
                  className={`filter-chip ${category === key ? 'filter-active' : ''}`}
                  key={key}
                  aria-pressed={category === key}
                  onClick={() => setCategory(key)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="menu-grid" aria-live="polite">
              {visibleMenu.map((item, index) => {
                const localizedItem = t.menu.items[item.name] || {
                  name: item.name,
                  categoryKey: categoryKeyMap[item.category] || 'mains',
                  description: item.description,
                };
                const catLabel = t.menu.categories[localizedItem.categoryKey] || item.category;

                return (
                  <article className={`menu-card ${index === 0 ? 'menu-card-featured' : ''}`} key={item.name} data-reveal>
                    <div className="menu-image-wrap">
                      {item.image ? (
                        <img src={item.image} alt={item.alt || localizedItem.name} loading="lazy" />
                      ) : (
                        <div className="menu-image-placeholder" aria-label="Image not available for this menu item">
                          <span className="arabic" lang="ar" dir="rtl">الجزيرة</span>
                          <small>{t.menu.askPreparation}</small>
                        </div>
                      )}
                      <span className="menu-category">{catLabel}</span>
                    </div>
                    <div className="menu-card-copy">
                      <h3 className="display">{localizedItem.name}</h3>
                      <p>{localizedItem.description}</p>
                      <div className="menu-card-bottom">
                        <span>{menuPriceLabel(item, t.menu.priceLabel)}</span>
                        <a href={phoneLink} aria-label={`${t.menu.callToAsk} ${localizedItem.name}`}>
                          <Phone size={14} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="menu-note">
              <span className="note-rule" />
              <p>{t.menu.menuNote}</p>
              <ActionLink href={phoneLink} variant="text">{t.menu.askToday}</ActionLink>
            </div>
          </div>
        </section>

        <section className="reviews-section section-pad" id="reviews">
          <div className="container-wide reviews-layout">
            <div className="reviews-lead" data-reveal>
              <p className="eyebrow">{t.reviews.eyebrow}</p>
              <h2 className="display">{t.reviews.title}</h2>
              <p>{t.reviews.subtitle}</p>
              <div className="reviews-score">
                <strong>{restaurant.rating}</strong>
                <span>
                  <span className="rating-stars">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} size={13} fill="currentColor" aria-hidden="true" />
                    ))}
                  </span>
                  <small>{t.reviews.reviewsCount}</small>
                </span>
              </div>
              <ActionLink
                href={restaurant.external.googleMapsReviewsUrl || restaurant.reviewsUrl}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                {t.reviews.readMore}
              </ActionLink>
            </div>
            <div className="review-notes">
              {t.reviews.highlights.map((highlight, index) => (
                <article className="review-note" key={index} data-reveal>
                  <span className="review-index">0{index + 1}</span>
                  <div>
                    <p>{highlight}</p>
                    <small>{t.reviews.badge}</small>
                  </div>
                  <span className="review-mark" aria-hidden="true">“</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="container-wide">
            <div className="gallery-heading" data-reveal>
              <div>
                <p className="eyebrow section-eyebrow">{t.gallery.eyebrow}</p>
                <h2 className="display">{t.gallery.title}</h2>
              </div>
              <p>{t.gallery.subtitle}</p>
            </div>
            <div className="gallery-grid">
              {restaurant.gallery.map((image, index) => {
                const caption = t.gallery.captions[index] || image.caption;
                return (
                  <button
                    type="button"
                    className={`gallery-tile gallery-tile-${index + 1}`}
                    key={image.src}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Open photo: ${caption}`}
                    data-testid={`gallery-image-${index + 1}`}
                    data-reveal
                  >
                    <img src={image.src} alt={caption} loading="lazy" />
                    <span className="gallery-caption">
                      {caption}<ArrowUpRight size={15} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container-wide services-layout">
            <div className="services-intro" data-reveal>
              <p className="eyebrow">{t.services.eyebrow}</p>
              <h2 className="display">{t.services.title}</h2>
              <p>{t.services.intro}</p>
            </div>
            <div className="service-list">
              <article className="service-row" data-reveal>
                <span className="service-icon"><Utensils /></span>
                <div>
                  <h3 className="display">{t.services.dineInTitle}</h3>
                  <p>{t.services.dineInDesc}</p>
                </div>
                <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer" aria-label={t.services.dineInAria}>
                  <ArrowUpRight />
                </a>
              </article>
              <article className="service-row" data-reveal>
                <span className="service-icon"><Truck /></span>
                <div>
                  <h3 className="display">{t.services.deliveryTitle}</h3>
                  <p>{t.services.deliveryDesc}</p>
                </div>
                <a
                  href={glovoAvailable ? restaurant.external.glovoUrl : phoneLink}
                  target={glovoAvailable ? '_blank' : undefined}
                  rel={glovoAvailable ? 'noreferrer' : undefined}
                  aria-label={glovoAvailable ? t.services.deliveryAriaGlovo : t.services.deliveryAriaCall}
                >
                  <ArrowUpRight />
                </a>
              </article>
              <article className="service-row" data-reveal>
                <span className="service-icon"><Phone /></span>
                <div>
                  <h3 className="display">{t.services.takeawayTitle}</h3>
                  <p>{t.services.takeawayDesc}</p>
                </div>
                <a href={phoneLink} aria-label={t.services.takeawayAria}>
                  <ArrowUpRight />
                </a>
              </article>
              <div className="service-callout" data-reveal>
                <span>{glovoAvailable ? t.services.orderOnline : t.services.orderNotListed}</span>
                <p>{glovoAvailable ? t.services.glovoAvailableDesc : t.services.glovoUnconfirmedDesc}</p>
                {glovoAvailable ? (
                  <ActionLink href={restaurant.external.glovoUrl} target="_blank" rel="noreferrer">
                    {t.services.continueToGlovo}
                  </ActionLink>
                ) : (
                  <ActionLink href={phoneLink}>{t.services.callRestaurant}</ActionLink>
                )}
              </div>
              <div className="service-actions" aria-label="Ordering and contact actions" data-reveal>
                <ActionLink href={phoneLink}>{t.services.callToOrder}</ActionLink>
                <ActionLink
                  href={glovoAvailable ? restaurant.external.glovoUrl : phoneLink}
                  target={glovoAvailable ? '_blank' : undefined}
                  rel={glovoAvailable ? 'noreferrer' : undefined}
                  variant="outline"
                >
                  {glovoAvailable ? t.services.orderOnGlovo : t.services.askAboutGlovo}
                </ActionLink>
                <ActionLink href="#visit" variant="text">{t.services.contactUs}</ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="container-wide visit-layout">
            <div className="visit-copy" data-reveal>
              <p className="eyebrow section-eyebrow">{t.visit.eyebrow}</p>
              <h2 className="display">{t.visit.title}</h2>
              <div className="visit-detail">
                <MapPin size={19} />
                <div>
                  <small>{t.visit.addressTitle}</small>
                  <p>{t.visit.addressValue}</p>
                </div>
              </div>
              <div className="visit-detail">
                <Phone size={18} />
                <div>
                  <small>{t.visit.callTitle}</small>
                  <a href={phoneLink}>{restaurant.phone}</a>
                </div>
              </div>
              <div className="visit-detail">
                <Utensils size={18} />
                <div>
                  <small>{t.visit.priceTitle}</small>
                  <p>{t.visit.priceValue}</p>
                </div>
              </div>
              <div className="visit-detail">
                <Clock3 size={19} />
                <div>
                  <small>{t.visit.hoursTitle}</small>
                  <p>{t.visit.hoursValue}</p>
                </div>
              </div>
              <div className="visit-actions">
                <ActionLink href={restaurant.directionsUrl} target="_blank" rel="noreferrer">
                  {t.visit.getDirections}
                </ActionLink>
                <ActionLink href={phoneLink} variant="outline">
                  {t.visit.callToConfirm}
                </ActionLink>
              </div>
              <div className="service-fact">
                <Check size={15} />
                <span>{t.visit.serviceFact}</span>
              </div>
            </div>
            <div className="map-panel" data-reveal>
              {restaurant.external.googleMapsEmbedUrl ? (
                <iframe
                  title={`Map showing ${restaurant.name}`}
                  src={restaurant.external.googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="map-art" aria-label={`Map link for Avenue Mohammed V, Tangier`}>
                  <div className="map-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
                  <div className="map-label map-label-one">{t.visit.mapAvenue}</div>
                  <div className="map-label map-label-two">{t.visit.mapCity}</div>
                  <div className="map-pin">
                    <MapPin size={22} fill="currentColor" />
                    <span>Aljazeera<br />Alarabia</span>
                  </div>
                  <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer" className="map-directions">
                    <Navigation size={15} /> {t.visit.openDirections} <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
              <div className="map-caption">
                <span>Q5GX+88F · Tangier, Morocco</span>
                <a href={restaurant.mapSearchUrl} target="_blank" rel="noreferrer">
                  {t.visit.openMap} <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="container-wide faq-layout">
            <div className="faq-lead" data-reveal>
              <p className="eyebrow section-eyebrow">{t.faq.eyebrow}</p>
              <h2 className="display">
                {t.faq.titleLine1}<br />
                <em>{t.faq.titleEm}</em>
              </h2>
              <p>{t.faq.intro}</p>
              <ActionLink href={phoneLink} variant="text">{t.faq.talkToUs}</ActionLink>
            </div>
            <div className="faq-list" data-reveal>
              {t.faq.items.map((faq, index) => {
                const isOpen = openFaqs.includes(index);
                return (
                  <div className={`faq-item ${isOpen ? 'faq-open' : ''}`} key={faq.question}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={18} />
                      </button>
                    </h3>
                    {isOpen && (
                      <div id={`faq-answer-${index}`} className="faq-answer faq-content">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-pattern" aria-hidden="true" />
          <div className="container-wide closing-content" data-reveal>
            <p className="eyebrow">{t.closing.eyebrow}</p>
            <h2 className="display">
              {t.closing.titleLine1}<br />
              <em>{t.closing.titleEm}</em>
            </h2>
            <p>{t.closing.copy}</p>
            <div className="closing-actions">
              <ActionLink href="#menu">{t.closing.exploreMenu}</ActionLink>
              <ActionLink href={phoneLink} variant="outline">{t.closing.callPhone}</ActionLink>
              <ActionLink href={restaurant.directionsUrl} variant="text" target="_blank" rel="noreferrer">
                {t.closing.getDirections}
              </ActionLink>
            </div>
          </div>
          <span className="closing-arabic arabic" lang="ar" dir="rtl" aria-hidden="true">
            {t.closing.arabicSalutation}
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container-wide footer-main" data-reveal>
          <div className="footer-brand">
            <BrandMark inverse lang={lang} />
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-column">
            <small>{t.footer.exploreTitle}</small>
            <a href="#story">{t.footer.ourStory}</a>
            <a href="#menu">{t.footer.theMenu}</a>
            <a href="#gallery">{t.footer.gallery}</a>
            <a href="#faq">{t.footer.faqs}</a>
          </div>
          <div className="footer-column">
            <small>{t.footer.visitTitle}</small>
            <a href={restaurant.mapSearchUrl} target="_blank" rel="noreferrer">
              {t.footer.googleMaps} <ArrowUpRight size={13} />
            </a>
            <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer">
              {t.footer.getDirections}
            </a>
            <a href={phoneLink}>{t.footer.callRestaurant}</a>
            <p>{restaurant.address}</p>
            <p>{t.footer.dineInFact}</p>
          </div>
          <div className="footer-column">
            <small>{t.footer.followTitle}</small>
            <div className="social-contact-list">
              {instagramAvailable ? (
                <a className="social-contact" href={restaurant.external.instagramUrl} target="_blank" rel="noreferrer" aria-label="Visit Instagram">
                  <FaInstagram aria-hidden="true" />
                  <span>Instagram</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ) : (
                <span className="social-contact social-pending" aria-label="Instagram profile link not configured">
                  <FaInstagram aria-hidden="true" />
                  <span>Instagram</span>
                  <small>Profile link needed</small>
                </span>
              )}
              {facebookAvailable ? (
                <a className="social-contact" href={restaurant.external.facebookUrl} target="_blank" rel="noreferrer" aria-label="Visit Facebook">
                  <FaFacebookF aria-hidden="true" />
                  <span>Facebook</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ) : (
                <span className="social-contact social-pending" aria-label="Facebook profile link not configured">
                  <FaFacebookF aria-hidden="true" />
                  <span>Facebook</span>
                  <small>Profile link needed</small>
                </span>
              )}
              {whatsappAvailable ? (
                <a className="social-contact" href={restaurant.external.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with the restaurant on WhatsApp">
                  <FaWhatsapp aria-hidden="true" />
                  <span>WhatsApp</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ) : (
                <a className="social-contact" href={phoneLink} aria-label="Call the restaurant">
                  <FaWhatsapp aria-hidden="true" />
                  <span>WhatsApp</span>
                  <small>Call {restaurant.phone}</small>
                </a>
              )}
            </div>
            {glovoAvailable ? (
              <a href={restaurant.external.glovoUrl} target="_blank" rel="noreferrer">
                {t.footer.orderViaGlovo} <ArrowUpRight size={13} />
              </a>
            ) : (
              <span>{t.footer.glovoMentioned}</span>
            )}
          </div>
        </div>
        <div className="container-wide footer-bottom">
          <span>© {new Date().getFullYear()} {restaurant.name}. {t.footer.allRightsReserved}</span>
          <span className="arabic" lang="ar" dir="rtl">{restaurant.arabicName}</span>
          <span>{t.footer.madeWithCare}</span>
          <a href="#top">{t.footer.backToTop} <ArrowUpRight size={13} /></a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappAvailable ? restaurant.external.whatsappUrl : phoneLink}
        target={whatsappAvailable ? '_blank' : undefined}
        rel={whatsappAvailable ? 'noreferrer' : undefined}
        aria-label={whatsappAvailable ? t.whatsapp.ariaMessage : t.whatsapp.ariaCall}
        data-testid="link-whatsapp-floating"
      >
        <FaWhatsapp aria-hidden="true" />
        <span>{whatsappAvailable ? t.whatsapp.messageUs : t.whatsapp.callUs}</span>
      </a>

      {activeImage !== null && (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setActiveImage(null)}>
          <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label={t.lightbox.aria} onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" aria-label={t.lightbox.close} onClick={() => setActiveImage(null)}>
              <X />
            </button>
            <button type="button" className="lightbox-arrow lightbox-prev" aria-label={t.lightbox.prev} onClick={() => moveGallery(-1)}>
              <ArrowLeft />
            </button>
            <figure>
              <img src={restaurant.gallery[activeImage].src} alt={t.gallery.captions[activeImage] || restaurant.gallery[activeImage].alt} />
              <figcaption>
                <span>{t.gallery.captions[activeImage] || restaurant.gallery[activeImage].caption}</span>
                <small>{String(activeImage + 1).padStart(2, '0')} / {String(restaurant.gallery.length).padStart(2, '0')}</small>
              </figcaption>
            </figure>
            <button type="button" className="lightbox-arrow lightbox-next" aria-label={t.lightbox.next} onClick={() => moveGallery(1)}>
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
