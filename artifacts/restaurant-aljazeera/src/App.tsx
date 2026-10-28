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

const phoneLink = restaurant.phoneHref;
const glovoAvailable = Boolean(restaurant.external.glovoUrl);
const instagramAvailable = Boolean(restaurant.external.instagramUrl);
const facebookAvailable = Boolean(restaurant.external.facebookUrl);
const whatsappAvailable = Boolean(restaurant.external.whatsappUrl);

function menuPriceLabel(item: MenuItem) {
  const price = item.price ?? 'Price available at restaurant';
  return item.available === false ? `${price} · Availability unconfirmed` : price;
}

function BrandMark({ inverse = false }: { inverse?: boolean }) {
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
        <strong>ALJAZEERA</strong>
        <small>AL ARABIA · TANGIER</small>
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const visibleMenu = restaurant.menu.filter((item) => category === 'All' || item.category === category);

  const closeMenu = () => setMenuOpen(false);
  const moveGallery = (delta: number) => {
    if (activeImage === null) return;
    setActiveImage((activeImage + delta + restaurant.gallery.length) % restaurant.gallery.length);
  };

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
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -32px 0px' },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [category]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    alternateName: restaurant.arabicName,
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

  return (
    <div className="site-shell" id="top">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <div className="topline">
        <div className="container-wide topline-inner">
          <span>Yemeni cuisine · Arabic hospitality · Tangier</span>
          <a href={phoneLink}><Phone size={13} aria-hidden="true" /> {restaurant.phone}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container-wide header-inner">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#top" onClick={closeMenu}>Home</a>
            <a href="#story" onClick={closeMenu}>Our story</a>
            <a href="#menu" onClick={closeMenu}>Menu</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#reviews" onClick={closeMenu}>Reviews</a>
            <a href="#visit" onClick={closeMenu}>Contact</a>
            <div className="mobile-nav-action">
              <ActionLink href={phoneLink}>Call the restaurant</ActionLink>
            </div>
          </nav>
          <div className="header-cta">
            <a href={phoneLink} className="header-phone"><Phone size={14} aria-hidden="true" /> Call us</a>
            <a href="#services" className="header-order">Order now <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
          <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero hero-photo" aria-labelledby="hero-title">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="container-wide hero-content" data-reveal>
            <p className="eyebrow hero-eyebrow"><span /> Authentic Yemeni &amp; Arabian cuisine</p>
            <h1 className="display" id="hero-title">A Taste of Arabia,<br />in the Heart of <em>Tangier.</em></h1>
            <p className="arabic hero-arabic" lang="ar" dir="rtl">{restaurant.arabicName}</p>
            <p className="hero-copy">Discover the warmth of Arabian hospitality through aromatic rice dishes, traditional spices, generous plates, and flavors made to bring people together.</p>
            <p className="hero-rating"><Star size={14} fill="currentColor" aria-hidden="true" /><strong>{restaurant.rating}/5</strong><span>· {restaurant.reviewCount} Google reviews</span></p>
            <div className="hero-actions">
              <ActionLink href="#menu">Explore our menu</ActionLink>
              <ActionLink href={restaurant.directionsUrl} variant="outline" target="_blank" rel="noreferrer">Find us in Tangier</ActionLink>
            </div>
            <a href="#highlights" className="hero-scroll"><ArrowDown size={15} /> Scroll to discover</a>
          </div>
          <div className="hero-side-note" aria-hidden="true"><span>Hospitality, served generously</span><i /></div>
          <div className="hero-caption"><span>01 / 04</span><span>From the Arabian table</span></div>
        </section>

        <section className="highlights" id="highlights" aria-label="Restaurant highlights">
          <div className="container-wide highlights-inner" data-reveal>
            <div className="rating-highlight">
              <div className="rating-stars" aria-label={`${restaurant.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" strokeWidth={1} aria-hidden="true" />)}
              </div>
              <div><strong>{restaurant.rating}<span> / 5</span></strong><small>Google rating · {restaurant.reviewCount} reviews</small></div>
            </div>
            <div className="highlight-divider" />
            <div className="highlight-item"><Utensils size={18} /><div><strong>Yemeni & Arabic</strong><small>Food made for sharing</small></div></div>
            <div className="highlight-divider" />
            <div className="highlight-item"><Truck size={19} /><div><strong>Come in or stay in</strong><small>Dine-in · contactless delivery</small></div></div>
            <div className="highlight-divider" />
            <a href={restaurant.directionsUrl} className="highlight-location" target="_blank" rel="noreferrer"><MapPin size={18} /><span><strong>In the heart of Tangier</strong><small>Avenue Mohammed V <ArrowUpRight size={12} /></small></span></a>
          </div>
        </section>

        <section className="story-section section-pad" id="story">
          <div className="container-wide story-layout">
            <div className="story-photo-wrap" data-reveal>
              <img className="story-photo" src="/images/restaurant-interior.jpg" alt="Warmly lit restaurant interior with green seating and brass details" />
              <div className="story-stamp"><span className="arabic" lang="ar" dir="rtl">أهلاً وسهلاً</span><small>WELCOME · أهلاً</small></div>
              <span className="photo-credit-label">A place to come together</span>
            </div>
            <div className="story-copy" data-reveal>
              <p className="eyebrow section-eyebrow">A table with room for you</p>
              <h2 className="display">Hospitality Rooted in <em>Arabian Tradition</em></h2>
              <p className="story-lede">At Aljazeera Alarabia, the welcome is simple: come as you are, find your place, and share a meal.</p>
              <p>Our table brings Yemeni cuisine and familiar Arabic dishes to Tangier. From a fragrant rice dish at the centre to fresh salads and small plates beside it, there is room to make the meal your own.</p>
              <ul className="story-highlights" aria-label="What to expect">
                <li>Rich Arabian Flavors</li>
                <li>Generous Plates</li>
                <li>Warm Hospitality</li>
              </ul>
              <p className="arabic story-arabic" lang="ar" dir="rtl">أهلاً وسهلاً بكم</p>
              <ActionLink href="#visit" variant="text">Plan a visit</ActionLink>
            </div>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="container-wide">
            <div className="menu-heading" data-reveal>
              <div>
                <p className="eyebrow section-eyebrow">From our table</p>
                <h2 className="display">Discover Our Menu</h2>
              </div>
              <p className="menu-intro">From aromatic rice specialties to fresh mezze and comforting favorites.</p>
            </div>
            <div className="menu-filters" role="group" aria-label="Filter menu by category" data-reveal>
              {restaurant.categories.map((item) => (
                <button type="button" className={`filter-chip ${category === item ? 'filter-active' : ''}`} key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="menu-grid" aria-live="polite">
              {visibleMenu.map((item, index) => (
                <article className={`menu-card ${index === 0 ? 'menu-card-featured' : ''}`} key={item.name} data-reveal>
                  <div className="menu-image-wrap">
                    {item.image ? (
                      <img src={item.image} alt={item.alt} loading="lazy" />
                    ) : (
                      <div className="menu-image-placeholder" aria-label="Image not available for this menu item">
                        <span className="arabic" lang="ar" dir="rtl">الجزيرة</span><small>Ask us about today’s preparation</small>
                      </div>
                    )}
                    <span className="menu-category">{item.category}</span>
                  </div>
                  <div className="menu-card-copy">
                    <h3 className="display">{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="menu-card-bottom"><span>{menuPriceLabel(item)}</span><a href={phoneLink} aria-label={`Call to ask about ${item.name}`}><Phone size={14} /></a></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="menu-note"><span className="note-rule" /><p>For current availability, ingredients, and pricing, please contact the restaurant directly.</p><ActionLink href={phoneLink} variant="text">Ask About Today’s Menu</ActionLink></div>
          </div>
        </section>

        <section className="reviews-section section-pad" id="reviews">
          <div className="container-wide reviews-layout">
            <div className="reviews-lead" data-reveal>
              <p className="eyebrow">Good words travel</p>
              <h2 className="display">What Our Guests Say</h2>
              <p>Paraphrased guest highlights — not direct quotations.</p>
              <div className="reviews-score"><strong>{restaurant.rating}</strong><span><span className="rating-stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" aria-hidden="true" />)}</span><small>Google · {restaurant.reviewCount} reviews</small></span></div>
              <ActionLink href={restaurant.external.googleMapsReviewsUrl || restaurant.reviewsUrl} variant="outline" target="_blank" rel="noreferrer">Read More Reviews on Google</ActionLink>
            </div>
            <div className="review-notes">
              {restaurant.reviewHighlights.map((highlight, index) => (
                <article className="review-note" key={highlight} data-reveal>
                  <span className="review-index">0{index + 1}</span>
                  <div><p>{highlight}</p><small>PARAPHRASED GUEST HIGHLIGHT</small></div>
                  <span className="review-mark" aria-hidden="true">“</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="container-wide">
            <div className="gallery-heading" data-reveal>
            <div><p className="eyebrow section-eyebrow">A little look around</p><h2 className="display">A Feast for the Senses</h2></div>
              <p>Food and atmosphere, imagined for your next visit.</p>
            </div>
            <div className="gallery-grid">
              {restaurant.gallery.map((image, index) => (
                <button type="button" className={`gallery-tile gallery-tile-${index + 1}`} key={image.src} onClick={() => setActiveImage(index)} aria-label={`Open photo: ${image.caption}`} data-testid={`gallery-image-${index + 1}`} data-reveal>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span className="gallery-caption">{image.caption}<ArrowUpRight size={15} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container-wide services-layout">
            <div className="services-intro" data-reveal>
              <p className="eyebrow">The way you like it</p>
              <h2 className="display">Your Table, Your Way</h2>
              <p>Join us in person or get in touch to ask about enjoying your meal at home.</p>
            </div>
            <div className="service-list">
              <article className="service-row" data-reveal>
                <span className="service-icon"><Utensils /></span>
                <div><h3 className="display">Dine in</h3><p>Settle in and enjoy a meal at the restaurant.</p></div>
                <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer" aria-label="Get directions for dine-in"><ArrowUpRight /></a>
              </article>
              <article className="service-row" data-reveal>
                <span className="service-icon"><Truck /></span>
                <div><h3 className="display">Delivery</h3><p>Contactless delivery is listed. Ask us about current availability and ordering.</p></div>
                <a href={glovoAvailable ? restaurant.external.glovoUrl : phoneLink} target={glovoAvailable ? '_blank' : undefined} rel={glovoAvailable ? 'noreferrer' : undefined} aria-label={glovoAvailable ? 'Order through Glovo' : 'Call about delivery'}><ArrowUpRight /></a>
              </article>
              <article className="service-row" data-reveal>
                <span className="service-icon"><Phone /></span>
                <div><h3 className="display">Takeaway & drive service</h3><p>Contact us to ask what’s available. {restaurant.driveServiceNote}</p></div>
                <a href={phoneLink} aria-label="Call about takeaway"><ArrowUpRight /></a>
              </article>
              <div className="service-callout" data-reveal>
                <span>{glovoAvailable ? 'Order online' : 'Order details not listed'}</span>
                <p>{glovoAvailable ? 'Continue to the restaurant’s confirmed Glovo listing.' : 'A delivery listing mentions Glovo. Call us to confirm the current ordering link.'}</p>
                {glovoAvailable ? <ActionLink href={restaurant.external.glovoUrl} target="_blank" rel="noreferrer">Continue to Glovo</ActionLink> : <ActionLink href={phoneLink}>Call the restaurant</ActionLink>}
              </div>
              <div className="service-actions" aria-label="Ordering and contact actions" data-reveal>
                <ActionLink href={phoneLink}>Call to Order</ActionLink>
                <ActionLink href={glovoAvailable ? restaurant.external.glovoUrl : phoneLink} target={glovoAvailable ? '_blank' : undefined} rel={glovoAvailable ? 'noreferrer' : undefined} variant="outline">{glovoAvailable ? 'Order on Glovo' : 'Ask About Glovo'}</ActionLink>
                <ActionLink href="#visit" variant="text">Contact Us</ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="container-wide visit-layout">
            <div className="visit-copy" data-reveal>
              <p className="eyebrow section-eyebrow">Come find us</p>
              <h2 className="display">Visit Us in Tangier</h2>
              <div className="visit-detail"><MapPin size={19} /><div><small>OUR ADDRESS</small><p>{restaurant.address}</p></div></div>
              <div className="visit-detail"><Phone size={18} /><div><small>CALL AHEAD</small><a href={phoneLink}>{restaurant.phone}</a></div></div>
              <div className="visit-detail"><Utensils size={18} /><div><small>AVERAGE PRICE</small><p>{restaurant.priceRange}</p></div></div>
              <div className="visit-detail"><Clock3 size={19} /><div><small>HOURS NOTE</small><p>{restaurant.hoursNote}</p></div></div>
              <div className="visit-actions">
                <ActionLink href={restaurant.directionsUrl} target="_blank" rel="noreferrer">Get directions</ActionLink>
                <ActionLink href={phoneLink} variant="outline">Call to confirm</ActionLink>
              </div>
              <div className="service-fact"><Check size={15} /><span>Dine-in and contactless delivery are listed.</span></div>
            </div>
            <div className="map-panel" data-reveal>
              {restaurant.external.googleMapsEmbedUrl ? (
                <iframe title={`Map showing ${restaurant.name}`} src={restaurant.external.googleMapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              ) : (
                <div className="map-art" aria-label="Map link for Avenue Mohammed V, Tangier">
                  <div className="map-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
                  <div className="map-label map-label-one">AVENUE MOHAMMED V</div>
                  <div className="map-label map-label-two">TANGER</div>
                  <div className="map-pin"><MapPin size={22} fill="currentColor" /><span>Aljazeera<br />Alarabia</span></div>
                  <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer" className="map-directions"><Navigation size={15} /> Open directions <ArrowUpRight size={14} /></a>
                </div>
              )}
              <div className="map-caption"><span>Q5GX+88F · Tangier, Morocco</span><a href={restaurant.mapSearchUrl} target="_blank" rel="noreferrer">Open map <ArrowUpRight size={13} /></a></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="container-wide faq-layout">
            <div className="faq-lead" data-reveal>
              <p className="eyebrow section-eyebrow">A few useful things</p>
              <h2 className="display">Before you<br /><em>make your way.</em></h2>
              <p>Still have a question? Give us a call and we’ll help you plan.</p>
              <ActionLink href={phoneLink} variant="text">Talk to us</ActionLink>
            </div>
            <div className="faq-list">
              {restaurant.faqs.map((faq, index) => (
                <div className={`faq-item ${activeFaq === index ? 'faq-open' : ''}`} key={faq.question} data-reveal>
                  <h3>
                    <button type="button" aria-expanded={activeFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setActiveFaq(index)}>
                      <span>{faq.question}</span><ChevronDown size={18} />
                    </button>
                  </h3>
                  {activeFaq === index && <div id={`faq-answer-${index}`} className="faq-answer faq-content"><p>{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-pattern" aria-hidden="true" />
          <div className="container-wide closing-content" data-reveal>
            <p className="eyebrow">Your place is at the table</p>
              <h2 className="display">Good Food. Great Company.<br /><em>Arabian Hospitality.</em></h2>
              <p>Make your next meal in Tangier a flavorful experience.</p>
            <div className="closing-actions">
                <ActionLink href="#menu">Explore the Menu</ActionLink>
                <ActionLink href={phoneLink} variant="outline">Call {restaurant.phone}</ActionLink>
                <ActionLink href={restaurant.directionsUrl} variant="text" target="_blank" rel="noreferrer">Get Directions</ActionLink>
            </div>
          </div>
          <span className="closing-arabic arabic" lang="ar" dir="rtl" aria-hidden="true">أهلاً وسهلاً</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container-wide footer-main" data-reveal>
          <div className="footer-brand"><BrandMark inverse /><p>A generous table of Yemeni cuisine and Arabic dishes in Tangier.</p></div>
          <div className="footer-column"><small>EXPLORE</small><a href="#story">Our story</a><a href="#menu">The menu</a><a href="#gallery">Gallery</a><a href="#faq">FAQs</a></div>
          <div className="footer-column"><small>VISIT</small><a href={restaurant.mapSearchUrl} target="_blank" rel="noreferrer">Google Maps <ArrowUpRight size={13} /></a><a href={restaurant.directionsUrl} target="_blank" rel="noreferrer">Get directions</a><a href={phoneLink}>Call the restaurant</a><p>{restaurant.address}</p><p>Dine-in and contactless delivery listed.</p></div>
          <div className="footer-column"><small>FOLLOW & ORDER</small>
            <div className="social-contact-list">
              {instagramAvailable ? (
                <a className="social-contact" href={restaurant.external.instagramUrl} target="_blank" rel="noreferrer" aria-label="Visit Instagram">
                  <FaInstagram aria-hidden="true" /><span>Instagram</span><ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ) : (
                <span className="social-contact social-pending" aria-label="Instagram profile link not configured">
                  <FaInstagram aria-hidden="true" /><span>Instagram</span><small>Profile link needed</small>
                </span>
              )}
              {facebookAvailable ? (
                <a className="social-contact" href={restaurant.external.facebookUrl} target="_blank" rel="noreferrer" aria-label="Visit Facebook">
                  <FaFacebookF aria-hidden="true" /><span>Facebook</span><ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ) : (
                <span className="social-contact social-pending" aria-label="Facebook profile link not configured">
                  <FaFacebookF aria-hidden="true" /><span>Facebook</span><small>Profile link needed</small>
                </span>
              )}
              {whatsappAvailable ? (
                <a className="social-contact" href={restaurant.external.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with the restaurant on WhatsApp">
                  <FaWhatsapp aria-hidden="true" /><span>WhatsApp</span><ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ) : (
                <a className="social-contact" href={phoneLink} aria-label="Call the restaurant">
                  <FaWhatsapp aria-hidden="true" /><span>WhatsApp</span><small>Call {restaurant.phone}</small>
                </a>
              )}
            </div>
            {glovoAvailable ? <a href={restaurant.external.glovoUrl} target="_blank" rel="noreferrer">Order via Glovo <ArrowUpRight size={13} /></a> : <span>Glovo listing mentioned; link not confirmed</span>}
          </div>
        </div>
        <div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</span><span className="arabic" lang="ar" dir="rtl">{restaurant.arabicName}</span><span>Made with care in Tangier</span><a href="#top">Back to top <ArrowUpRight size={13} /></a></div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappAvailable ? restaurant.external.whatsappUrl : phoneLink}
        target={whatsappAvailable ? '_blank' : undefined}
        rel={whatsappAvailable ? 'noreferrer' : undefined}
        aria-label={whatsappAvailable ? 'Message Restaurant Aljazeera Alarabia on WhatsApp' : `Call ${restaurant.name}`}
        data-testid="link-whatsapp-floating"
      >
        <FaWhatsapp aria-hidden="true" />
        <span>{whatsappAvailable ? 'Message us' : 'Call us'}</span>
      </a>

      {activeImage !== null && (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setActiveImage(null)}>
          <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Photo gallery" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" aria-label="Close gallery" onClick={() => setActiveImage(null)}><X /></button>
            <button type="button" className="lightbox-arrow lightbox-prev" aria-label="Previous image" onClick={() => moveGallery(-1)}><ArrowLeft /></button>
            <figure>
              <img src={restaurant.gallery[activeImage].src} alt={restaurant.gallery[activeImage].alt} />
              <figcaption><span>{restaurant.gallery[activeImage].caption}</span><small>{String(activeImage + 1).padStart(2, '0')} / {String(restaurant.gallery.length).padStart(2, '0')}</small></figcaption>
            </figure>
            <button type="button" className="lightbox-arrow lightbox-next" aria-label="Next image" onClick={() => moveGallery(1)}><ArrowRight /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
