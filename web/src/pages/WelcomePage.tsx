import { useState, useEffect, useRef, useCallback } from 'react';
import './WelcomePage.css';

const BizBuchLogo = () => (
  <img src="/logo.svg" alt="BizBuch" width="32" height="31" />
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const SCREENSHOTS = [
  { webp: '/screenshots/Pageshot_2.webp', png: '/screenshots/Pageshot_2.png', alt: 'App Page 2' },
  { webp: '/screenshots/Pageshot_3.webp', png: '/screenshots/Pageshot_3.png', alt: 'App Page 3' },
  { webp: '/screenshots/Pageshot_4.webp', png: '/screenshots/Pageshot_4.png', alt: 'App Page 4' },
  { webp: '/screenshots/Pageshot_5.webp', png: '/screenshots/Pageshot_5.png', alt: 'App Page 5' },
  { webp: '/screenshots/Pageshot_6.webp', png: '/screenshots/Pageshot_6.png', alt: 'App Page 6' },
  { webp: '/screenshots/Pageshot_7.webp', png: '/screenshots/Pageshot_7.png', alt: 'App Page 7' },
  { webp: '/screenshots/Pageshot_8.webp', png: '/screenshots/Pageshot_8.png', alt: 'App Page 8' },
];

const FEATURES = [
  { emoji: '🔓', title: 'Decentralized & Free', desc: 'Unlike centralized platforms, no single authority controls your reach. You own the servers, the rules, and the data.', span2: true },
  { emoji: '☁️', title: 'Self-Hostable', desc: 'Deploy on-prem or cloud. Dockerized backend makes it easy for anyone to run a network.' },
  { emoji: '🏛️', title: 'Community Owned', desc: 'Communities define their own moderation policies and identity.' },
  { emoji: '✨', title: 'User Choice', desc: 'Switch servers based on interest, region, or purpose. You are not locked in.' },
  { emoji: '🎯', title: 'Niche Networks', desc: 'Built for startups, environments, neighborhoods, or internal company networks.' },
];

const ACHIEVEMENTS = [
  { emoji: '🥉', title: 'GenZ-Tech-Thon', desc: 'Bronze Medalist in college-level internal hackathon' },
  { emoji: '🇮🇳', title: 'Smart India Hackathon', desc: 'National Level Finalist among top student teams' },
  { emoji: '🚀', title: 'Production Ready', desc: 'Successfully productionized and scaled post-hackathon' },
  { emoji: '🔄', title: 'Automated Delivery', desc: 'CI/CD pipelines for fast, reliable releases' },
];

const COMMUNITIES = [
  { emoji: '🌱', title: 'Environment', desc: 'Sustainability groups & green initiatives' },
  { emoji: '🎭', title: 'Culture', desc: 'Traditions, arts & community heritage' },
  { emoji: '🚀', title: 'Startups', desc: 'Entrepreneurship & innovation networks' },
  { emoji: '🏢', title: 'Internal', desc: 'Private company or organization networks' },
  { emoji: '🏘️', title: 'Local', desc: 'Neighborhoods & city communities' },
  { emoji: '✈️', title: 'Travel', desc: 'Tourism groups & digital nomads' },
];

const TECH_STACK = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React Native', label: 'React Native' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', alt: 'Django', label: 'Django' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', alt: 'Docker', label: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS', label: 'AWS' },
];

const WelcomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  const scrollCarousel = useCallback((direction: 'left' | 'right') => {
    carouselRef.current?.scrollBy({ left: direction === 'right' ? 320 : -320, behavior: 'smooth' });
  }, []);

  return (
    <div className="welcome-page">
      {/* Ambient Glow */}
      <div className="ambient-glow">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navbar */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <BizBuchLogo />
            <span>BizBuch</span>
          </a>
          <div className="nav-menu">
            <a href="#features">Features</a>
            <a href="#stats">Impact</a>
            <a href="https://github.com/BizBuch/Mobile-Application/releases" className="btn-primary-sm" target="_blank" rel="noopener noreferrer">Download App</a>
          </div>
          <button className="hamburger" aria-label="Toggle Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay${menuOpen ? ' active' : ''}`}>
        <div className="mobile-links">
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#stats" onClick={() => setMenuOpen(false)}>Impact</a>
          <a href="https://github.com/BizBuch/Mobile-Application/releases" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Download App</a>
        </div>
      </div>

      {/* Hero */}
      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="pill-badge">
              <span className="dot" /> Open Source • Self-Hostable
            </div>
            <h1>
              Social Networking <br />
              <span className="gradient-text">Without Monopoly</span>
            </h1>
            <p className="hero-sub">
              Self-hostable • Community-owned • Server-choice enabled.<br />
              BizBuch allows anyone to deploy a server and create independent, specialized community networks.
            </p>
            <div className="hero-actions">
              <a href="/login" className="btn-glow">
                Login
              </a>
              <a href="https://github.com/BizBuch/Mobile-Application" className="btn-glow" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)' }} target="_blank" rel="noopener noreferrer">
                Source Code <GithubIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="card-stack">
              <div className="mock-card card-1"><div className="skeleton-lines" /></div>
              <div className="mock-card card-2"><div className="msg-bubble">Hey! New product launch? 🚀</div></div>
              <div className="mock-card card-3">
                <picture>
                  <source srcSet="/screenshots/Pageshot_3.webp" type="image/webp" />
                  <img src="/screenshots/Pageshot_3.png" alt="App UI" className="ui-img" width="300" height="400" fetchPriority="high" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2>The <span className="text-orange">Key Idea</span></h2>
            <p>Ending the monopoly of centralized social networking.</p>
          </div>
          <div className="bento-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className={`bento-card glow-card${f.span2 ? ' span-2' : ''}`}>
                <div>
                  <div className="icon-box">{f.emoji}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
                {f.span2 && <div className="card-visual visual-chat" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Project <span className="text-orange">Milestones</span></h2>
            <p>Recognition and milestones that define our journey.</p>
          </div>
          <div className="achievements-grid">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="achievement-card glow-card">
                <div className="achievement-icon">{a.emoji}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pageshots */}
      <section className="section showcase">
        <div className="container">
          <div className="section-header">
            <h2>Application <span className="text-orange">Showcase</span></h2>
            <p>A sneak peek into the intuitive interface designed for open community interaction.</p>
          </div>
          <div className="carousel-container">
            <button className="carousel-btn prev-btn" aria-label="Scroll Left" onClick={() => scrollCarousel('left')}>
              <ChevronLeft />
            </button>
            <div className="phone-mockup-wrapper" ref={carouselRef}>
              {SCREENSHOTS.map((s, i) => (
                <div key={i} className="phone-mockup">
                  <div className="notch" />
                  <picture>
                    <source srcSet={s.webp} type="image/webp" />
                    <img src={s.png} alt={s.alt} className="screen-content" loading="lazy" width="280" height="580" />
                  </picture>
                </div>
              ))}
            </div>
            <button className="carousel-btn next-btn" aria-label="Scroll Right" onClick={() => scrollCarousel('right')}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Community Servers */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Community <span className="text-orange">Servers</span></h2>
            <p>Deploy independent networks for any niche or purpose.</p>
          </div>
          <div className="community-grid">
            {COMMUNITIES.map((c) => (
              <div key={c.title} className="achievement-card glow-card">
                <div className="achievement-icon">{c.emoji}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>My <span className="text-orange">Story</span></h2>
            <p>From a hackathon idea to an open-source mission.</p>
          </div>
          <div className="story-grid">
            <div className="story-card">
              <h3>The Prototype Phase</h3>
              <p>BizBuch started as a prototype for the <strong>Smart India Hackathon</strong>, originally designed to connect entrepreneurs with investors and incubators. However, life happened—exams, internships, and a full-time job took priority, and the project was paused for two years.</p>
            </div>
            <div className="story-card">
              <h3>The Revival with AI</h3>
              <p>Returning with 2+ years of industry experience, I saw potential. Leveraging modern AI tools like <strong>Claude</strong> and <strong>ChatGPT</strong>, I began transforming the prototype into a production-grade, scalable full-stack application, learning advanced system architecture along the way.</p>
            </div>
            <div className="story-card span-full highlight-card">
              <h3>Why Open Source?</h3>
              <p>We live in an age where centralized algorithms can destabilize nations (as seen in Sri Lanka and Bangladesh) or promote harmful content. <strong>No single entity should own the world's conversation.</strong></p>
              <p>BizBuch is the answer: a decentralized network where you choose your server, you own your data, and users are not products.</p>
            </div>
            <div className="story-card span-full transparent-card">
              <p><em>"Although we don't have a massive user base yet, this project stands as a testament to what a single developer can build with AI—transforming a vision into a production-ready open source platform."</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section">
        <div className="container">
          <p className="tech-stack-label">Powered by Modern Technologies</p>
          <div className="tech-logos">
            {TECH_STACK.map((t) => (
              <div key={t.alt} className="tech-item">
                <img src={t.src} alt={t.alt} loading="lazy" width="48" height="48" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h4>BizBuch</h4>
            <p>Open-source social networking for everyone.</p>
          </div>
          <div className="footer-col">
            <h5>Project</h5>
            <a href="https://github.com/BizBuch/Mobile-Application" target="_blank" rel="noopener noreferrer">Source Code</a>
            <a href="https://github.com/BizBuch/Mobile-Application/issues" target="_blank" rel="noopener noreferrer">Report Issue</a>
            <a href="https://github.com/BizBuch/Mobile-Application/blob/main/README.md" target="_blank" rel="noopener noreferrer">Documentation</a>
          </div>
          <div className="footer-col">
            <h5>Community</h5>
            <a href="https://github.com/BizBuch/Mobile-Application/discussions" target="_blank" rel="noopener noreferrer">Discussions</a>
            <a href="https://github.com/BizBuch/Mobile-Application/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contribute</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 BizBuch Open Source Project. Licensed under MIT.
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
