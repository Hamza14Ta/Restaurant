import type { Language } from '../data/translations';

export function UkFlag({ className = 'lang-flag-svg' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uk-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-diag)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

export function FranceFlag({ className = 'lang-flag-svg' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 3 2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="2" x="0" fill="#002654" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#ED2939" />
    </svg>
  );
}

export function SpainFlag({ className = 'lang-flag-svg' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="500" fill="#AA151B" />
      <rect width="750" height="250" y="125" fill="#F1BF00" />
    </svg>
  );
}

export function MoroccoFlag({ className = 'lang-flag-svg' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="600" fill="#C1272D" />
      <path
        d="M450,162 L487,276 L607,276 L510,346 L547,460 L450,389 L353,460 L390,346 L293,276 L413,276 Z"
        fill="none"
        stroke="#006233"
        strokeWidth="24"
      />
    </svg>
  );
}

export const languageList: {
  code: Language;
  label: string;
  name: string;
  FlagComponent: React.ComponentType<{ className?: string }>;
}[] = [
  { code: 'en', label: 'EN', name: 'English', FlagComponent: UkFlag },
  { code: 'fr', label: 'FR', name: 'Français', FlagComponent: FranceFlag },
  { code: 'es', label: 'ES', name: 'Español', FlagComponent: SpainFlag },
  { code: 'ar', label: 'عربي', name: 'العربية', FlagComponent: MoroccoFlag },
];

export interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLanguage: (lang: Language) => void;
  className?: string;
}

export function LanguageSelector({
  currentLang,
  onSelectLanguage,
  className = '',
}: LanguageSelectorProps) {
  return (
    <div
      className={`lang-selector-group ${className}`}
      role="group"
      aria-label="Select website language"
    >
      {languageList.map(({ code, label, name, FlagComponent }) => {
        const isActive = currentLang === code;
        return (
          <button
            key={code}
            type="button"
            className={`lang-flag-btn ${isActive ? 'lang-flag-btn-active' : ''}`}
            onClick={() => onSelectLanguage(code)}
            aria-pressed={isActive}
            title={name}
            aria-label={`Switch language to ${name}`}
          >
            <span className="lang-flag-badge">
              <FlagComponent />
            </span>
            <span className="lang-code-label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
