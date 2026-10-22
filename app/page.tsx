import type { ReactNode } from "react";
import FaqAccordion from "@/components/FaqAccordion";
import Logo from "@/components/Logo";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/data/siteContent";

function IconButton({ children, href = siteContent.cta.href }: { children: ReactNode; href?: string }) {
  return (
    <a href={href} className="cta-button">
      <span className="button-icon">✦</span>
      <span>{children}</span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, align = "left" }: { eyebrow?: string; title: string; align?: "left" | "center" }) {
  return (
    <Reveal className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="hero-shell" id="top">
      <div className="hero-card">
        <div className="hero-grid" />
        <div className="hero-planet" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <header className="navbar">
          <Logo compact />
          <nav aria-label="Main navigation">
            {siteContent.nav.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <IconButton>{siteContent.cta.chat}</IconButton>
        </header>

        <div className="hero-content">
          <Reveal>
            <div className="pill-row">
              <span className="pill dark-pill">{siteContent.hero.eyebrow.split(" // ")[0]}</span>
              <span className="pill">{siteContent.hero.eyebrow.split(" // ")[1]}</span>
            </div>
          </Reveal>

          <Reveal delay={90} className="hero-title-wrap">
            <h1>{siteContent.hero.title}</h1>
          </Reveal>

          <Reveal delay={170} className="hero-copy">
            <p>{siteContent.hero.description}</p>
            <IconButton>{siteContent.cta.chat}</IconButton>
          </Reveal>
        </div>

        <span className="giant-word">{siteContent.hero.giantWord}</span>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="trusted section-tight">
      <Reveal className="trusted-label">Sample brand placeholders</Reveal>
      <Marquee>
        {siteContent.trustedBy.map((name) => (
          <span className="logo-chip" key={name}>
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function ServiceVisual({ theme }: { theme: string }) {
  if (theme === "dark") {
    return (
      <div className="browser-mock">
        <div className="browser-top"><span /><span /><span /></div>
        <div className="browser-body">
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-short" />
          <div className="image-loader">⌘</div>
        </div>
      </div>
    );
  }

  if (theme === "dark-map") {
    return (
      <div className="map-visual">
        {["18%", "32%", "48%", "62%", "76%"].map((left, i) => (
          <span key={left} className="map-dot" style={{ left, top: `${25 + (i % 3) * 20}%` }} />
        ))}
      </div>
    );
  }

  if (theme === "search") {
    return (
      <div className="search-visual">
        <div className="search-bar"><b>G</b> Best tools for business operations</div>
        <div className="result-card"><b>Acme.io</b><span>All in one outbound platform</span></div>
      </div>
    );
  }

  if (theme === "circuit") {
    return <div className="circuit-visual"><span /></div>;
  }

  return (
    <div className="progress-visual">
      <span className="donut" />
      <div className="notification-card">Revision completed</div>
    </div>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <SectionTitle title={siteContent.services.title} />
      <div className="bento-grid">
        {siteContent.services.cards.map((card, index) => (
          <Reveal
            key={card.title}
            delay={index * 80}
            className={`bento-card bento-${index + 1} ${card.theme.includes("dark") ? "bento-dark" : ""}`}
          >
            <div className="card-glare" />
            <ServiceVisual theme={card.theme} />
            <div className="bento-copy">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {index === 0 && <IconButton href="#pricing">{siteContent.cta.secondary}</IconButton>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Builder() {
  return (
    <section className="section builder" id="products">
      <Reveal className="builder-head" delay={40}>
        <div className="pill-row center">
          <span className="pill dark-pill">{siteContent.builder.badge}</span>
          <span className="pill">Non-interactive UI mockup</span>
        </div>
        <h2>{siteContent.builder.title}</h2>
      </Reveal>
      <Reveal delay={140} className="prompt-box">
        <div className="prompt-top">Illustrative builder interface</div>
        <div className="prompt-body">
          <span>{siteContent.builder.prompt}</span>
          <button aria-label="Builder preview only — generation unavailable" disabled>↑</button>
        </div>
      </Reveal>
      <Reveal delay={240} className="powered-by">
        <span>Illustrative provider labels — no integrations</span>
        <div>
          {siteContent.builder.poweredBy.map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="work">
      <span className="watermark">{siteContent.projects.title}</span>
      <SectionTitle title={siteContent.projects.title} />
      <div className="project-grid">
        {siteContent.projects.items.map((project, index) => (
          <Reveal key={project.title} delay={index * 80} className={`project-card project-${project.layout}`}>
            <div className="project-art">
              <div className="project-inner-card" />
              <div className="project-float project-float-one" />
              <div className="project-float project-float-two" />
            </div>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.type}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="title-action-row">
        <SectionTitle title={siteContent.testimonials.title} />
        <IconButton>{siteContent.cta.chat}</IconButton>
      </div>
      <Marquee>
        {siteContent.testimonials.items.map((item) => (
          <article className="testimonial-card" key={`${item.company}-${item.name}`}>
            <div className="testimonial-company">Fictional example · {item.company}</div>
            <p>&quot;{item.quote}&quot;</p>
            <div className="person-row">
              <span className="avatar">{item.name.charAt(0)}</span>
              <span><b>{item.name}</b><small>{item.role}</small></span>
            </div>
          </article>
        ))}
      </Marquee>
    </section>
  );
}

function Scale() {
  return (
    <section className="section scale-section">
      <SectionTitle title={siteContent.scale.title} />
      <div className="scale-grid">
        <Reveal className="team-panel">
          <div className="face-grid">
            {Array.from({ length: 9 }).map((_, index) => (
              <span className={`face face-${index}`} key={index}>{index % 3 === 0 ? "●" : ""}</span>
            ))}
          </div>
          <h3>Example team panel</h3>
          <IconButton>{siteContent.cta.chat}</IconButton>
        </Reveal>
        <Reveal delay={90} className="scale-copy-card">
          <p>{siteContent.scale.intro}</p>
          <div className="stats-row">
            {siteContent.scale.stats.map((stat) => (
              <div key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={180} className="tech-panel">
          <h3>Illustrative technology stack</h3>
          <div className="tech-row">
            {siteContent.scale.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="section comparison-section">
      <SectionTitle title={siteContent.comparison.title} />
      <Reveal className="comparison-table">
        <div className="comparison-head comparison-row">
          <span />
          <b>{siteContent.brand.name}</b>
          <b>Traditional Providers</b>
        </div>
        {siteContent.comparison.rows.map((row) => (
          <div className="comparison-row" key={row.label}>
            <span>{row.label}</span>
            <strong className="good">✓ {row.us}</strong>
            <strong className="bad">! {row.them}</strong>
          </div>
        ))}
        <div className="comparison-actions comparison-row">
          <span>Design concept only</span>
          <IconButton>{siteContent.cta.primary}</IconButton>
          <button className="disabled-button" disabled>Bookings unavailable</button>
        </div>
      </Reveal>
      <div className="benefit-grid">
        {siteContent.comparison.benefits.map((benefit, index) => (
          <Reveal delay={index * 80} className="benefit-card" key={benefit.title}>
            <span className="benefit-icon">♧</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="title-action-row">
        <SectionTitle title={siteContent.pricing.title} />
        <p className="pricing-note">{siteContent.pricing.note}</p>
      </div>
      <div className="pricing-grid">
        {siteContent.pricing.plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 100} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
            <div className="plan-top">
              <span>{plan.name}</span>
              <b>{plan.badge}</b>
            </div>
            <h3>{plan.title}</h3>
            <p>{plan.subtitle}</p>
            <div className="price-line">{plan.price}</div>
            <IconButton>{siteContent.cta.primary}</IconButton>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="founder-section">
      <div className="founder-inner section">
        <SectionTitle title={siteContent.founder.title} />
        <div className="founder-grid">
          <Reveal className="founder-photo">
            <span className="founder-badge">{siteContent.brand.logoLetter}</span>
          </Reveal>
          <Reveal delay={120} className="founder-copy">
            <p><b>Hi, I’m {siteContent.founder.name}.</b> {siteContent.founder.text}</p>
            <div className="founder-tags">
              {siteContent.founder.highlights.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <Reveal className="faq-card">
        <h2>{siteContent.faq.title}</h2>
        <p>{siteContent.brand.tagline}</p>
        <IconButton>{siteContent.cta.chat}</IconButton>
      </Reveal>
      <Reveal delay={100}>
        <FaqAccordion />
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-cta">
        <h2>{siteContent.footer.headline}</h2>
        <a href="#top" className="arrow-button" aria-label="Back to top">→</a>
        <span className="footer-watermark">{siteContent.brand.name}</span>
      </div>
      <div className="footer-bottom">
        <div>
          <Logo compact />
          <p>{siteContent.brand.tagline}</p>
          <IconButton href={siteContent.cta.href}>{siteContent.cta.primary}</IconButton>
        </div>
        <div className="footer-links">
          {siteContent.footer.columns.map((column) => (
            <div key={column.heading}>
              <h4>{column.heading}</h4>
              {column.links.map((link) => (
                <a href={link === "Source" ? siteContent.cta.href : `#${link.toLowerCase()}`} key={link}>{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <aside style={{ padding: "16px 24px", background: "#fff4ce", color: "#302700", fontSize: "14px", lineHeight: 1.6 }} aria-label="Demo information">
        <strong>Portfolio design demo.</strong> Brands, testimonials, project mockups, prices and business metrics are illustrative.
        No client relationships, live builder product, booking service or paid plans are represented.
        {" "}<a href={siteContent.cta.href}>View project source</a>.
      </aside>
      <Hero />
      <TrustedBy />
      <Services />
      <Builder />
      <Projects />
      <Testimonials />
      <Scale />
      <Comparison />
      <Pricing />
      <Founder />
      <FAQ />
      <Footer />
    </main>
  );
}
