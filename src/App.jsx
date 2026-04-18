import "./styles.css";

export default function App() {
  const foundation = [
    "Local & Federal Law Enforcement",
    "Special Agent Careers",
    "Intelligence Pathways",
    "U.S. Military Pathways",
  ];

  const strategyBullets = [
    "Resume positioning",
    "Agency strategy",
    "Interview preparation",
    "Background guidance",
  ];

  const retainerBullets = [
    "Ongoing strategy",
    "Direct access",
    "Full pipeline support",
    "3-month minimum",
  ];

  const edgeBullets = [
    "Understands what agencies value beyond job postings",
    "Firsthand experience with hiring pipelines and investigations",
    "Insight across law enforcement and intelligence pathways",
    "Guidance built for high-stakes career decisions",
  ];

  return (
    <div className="site">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Career Strategies</p>
            <h1>Contact Cover</h1>
            <div className="rule" />
            <p className="lead">Private advisory for high-stakes career decisions.</p>
            <p className="sublead">
              Strategic guidance for federal law enforcement, intelligence, and U.S. military careers.
            </p>
            <p className="sublead strong">
              Led by a former <strong>Special Agent</strong> and <strong>Intelligence Officer</strong>.
            </p>
            <div className="button-row">
              <a href="#services" className="btn btn-light">View Services</a>
              <a href="#contact" className="btn btn-dark">Request Consultation</a>
            </div>
          </div>

          <div className="card foundation">
            <p className="section-label">Operational Foundation</p>
            <div className="stack">
              {foundation.map((item) => (
                <div key={item} className="foundation-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container features">
        <div className="feature-card">
          <p className="section-label">Mission</p>
          <h2>Private advisory for serious candidates</h2>
          <p>
            Guidance built for candidates pursuing high-trust, highly selective careers where positioning and judgment matter.
          </p>
        </div>

        <div className="feature-card">
          <p className="section-label">Differentiator</p>
          <h2>Firsthand perspective</h2>
          <p>
            Built on operational experience across federal law enforcement, intelligence, and military environments — not recycled career advice.
          </p>
        </div>

        <div className="feature-card">
          <p className="section-label">Coverage</p>
          <h2>Full-spectrum career pathways</h2>
          <p>
            Local and federal law enforcement, intelligence pathways, and United States military careers.
          </p>
        </div>
      </section>

      <section id="services" className="services-band">
        <div className="container">
          <div className="services-head">
            <p className="section-label">Services</p>
            <h2>Focused, high-trust support</h2>
          </div>

          <div className="services-grid">
            <div className="card service-primary">
              <p className="section-label">Primary</p>
              <h3>1:1 Strategy</h3>
              <p className="price">$200/hr | $275 (90 min)</p>
              <div className="mini-grid">
                {strategyBullets.map((item) => (
                  <div key={item} className="mini-card">{item}</div>
                ))}
              </div>
            </div>

            <div className="card service-secondary">
              <p className="section-label dark">Secondary</p>
              <h3>Retainer Advisory</h3>
              <p className="price dark">$2,500/month</p>
              <div className="stack">
                {retainerBullets.map((item) => (
                  <div key={item} className="mini-card light">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container edge">
        <div>
          <p className="section-label">Operational Edge</p>
          <h2>Firsthand strategic perspective</h2>
          <p className="edge-copy">
            Advisory informed by the realities of selective hiring systems, mission-driven institutions, and high-consequence decision points.
          </p>
        </div>
        <div className="stack">
          {edgeBullets.map((item) => (
            <div key={item} className="mini-card">{item}</div>
          ))}
        </div>
      </section>

      <section className="founder-section">
        <div className="container founder-grid">
          <div className="founder-image-wrap">
            <img src="/founder-elite.png" alt="Andres Godoy" className="founder-image" />
            <div className="image-overlay" />
          </div>

          <div>
            <p className="eyebrow founder-eyebrow">Founder</p>
            <h2 className="founder-name">Andres Godoy</h2>
            <p className="founder-title">Former Special Agent &amp; Intelligence Officer</p>
            <div className="rule founder-rule" />
            <p className="founder-copy strong">
              Andres Godoy brings a career defined by operational leadership across federal law enforcement and intelligence environments.
            </p>
            <p className="founder-copy">
              He has led and supported complex investigations, interagency operations, and strategic initiatives across both domestic and international contexts.
            </p>
            <p className="founder-copy strong">
              Contact Cover was built to provide clients with the same level of clarity, positioning, and strategic advantage required to succeed in highly competitive career landscapes.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div>
            <p className="section-label">Contact</p>
            <h2>Request a private consultation</h2>
            <p className="edge-copy">
              For candidates seeking clear, experience-based guidance on consequential career decisions.
            </p>
          </div>

          <div className="card contact-card">
            <p className="section-label">Next Step</p>
            <p className="contact-line">Email: andres@contactcovercs.com</p>
            <p className="contact-line">Website: contactcovercs.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
