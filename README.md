<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Cover</title>
  <style>
    :root {
      --bg: #0a0a0a;
      --panel: rgba(255,255,255,0.03);
      --border: rgba(255,255,255,0.10);
      --muted: rgba(255,255,255,0.68);
      --soft: rgba(255,255,255,0.45);
      --navy: #0a1a2f;
      --light-panel: #e5e7eb;
      --text-dark: #111111;
      font-family: Inter, Arial, sans-serif;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; background: #030303; color: white; }
    body { background: var(--bg); }
    a { text-decoration: none; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .hero { background: #000; border-bottom: 1px solid var(--border); }
    .hero-grid { display: grid; gap: 40px; align-items: end; grid-template-columns: 1.1fr 0.9fr; padding: 80px 24px 96px; }
    .eyebrow { margin: 0; text-transform: uppercase; letter-spacing: .45em; color: var(--soft); font-size: 12px; }
    h1 { margin: 12px 0 0; font-size: clamp(48px, 8vw, 88px); line-height: .95; font-weight: 700; letter-spacing: -.03em; }
    h2 { margin: 16px 0 0; font-size: clamp(34px, 4vw, 56px); line-height: 1.05; }
    h3 { margin: 16px 0 0; font-size: 34px; line-height: 1.1; }
    .rule { width: 96px; height: 1px; background: rgba(255,255,255,0.2); margin: 32px 0 0; }
    .lead { margin: 32px 0 0; font-size: 24px; line-height: 1.8; color: rgba(255,255,255,0.82); max-width: 620px; }
    .sublead { margin: 24px 0 0; font-size: 20px; line-height: 1.8; color: var(--muted); max-width: 780px; }
    .sublead.strong { color: rgba(255,255,255,0.92); }
    .button-row { display: flex; gap: 16px; margin-top: 40px; flex-wrap: wrap; }
    .btn { border-radius: 18px; padding: 14px 24px; text-transform: uppercase; letter-spacing: .18em; font-size: 13px; font-weight: 600; display: inline-block; }
    .btn-light { background: white; color: black; }
    .btn-dark { border: 1px solid rgba(255,255,255,0.2); color: white; background: transparent; }
    .card { border: 1px solid var(--border); border-radius: 28px; box-shadow: 0 24px 64px rgba(0,0,0,.3); }
    .foundation { background: var(--navy); padding: 32px; }
    .section-label { margin: 0; text-transform: uppercase; letter-spacing: .22em; color: rgba(255,255,255,.55); font-size: 14px; }
    .section-label.dark { color: rgba(0,0,0,.45); }
    .stack { display: grid; gap: 16px; margin-top: 24px; }
    .foundation-item { padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,.1); font-size: 24px; line-height: 1.6; color: rgba(255,255,255,.9); }
    .foundation-item:last-child { border-bottom: none; padding-bottom: 0; }
    .features { display: grid; gap: 24px; grid-template-columns: repeat(3, 1fr); padding-top: 64px; padding-bottom: 80px; }
    .feature-card { border: 1px solid var(--border); border-radius: 24px; background: var(--panel); padding: 32px; }
    .feature-card h2 { font-size: 32px; margin-top: 16px; }
    .feature-card p:last-child { color: var(--muted); line-height: 1.8; font-size: 18px; }
    .services-band { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: rgba(0,0,0,.4); }
    .services-head { max-width: 760px; padding-top: 64px; }
    .services-grid { display: grid; gap: 24px; grid-template-columns: 1.1fr 0.9fr; padding: 48px 0 80px; }
    .service-primary { background: #05070a; padding: 36px; }
    .service-secondary { background: var(--light-panel); color: var(--text-dark); padding: 36px; }
    .price { font-size: 24px; color: rgba(255,255,255,.85); margin-top: 12px; }
    .price.dark { color: rgba(0,0,0,.8); }
    .mini-grid { display: grid; gap: 16px; grid-template-columns: repeat(2, 1fr); margin-top: 32px; }
    .mini-card { border: 1px solid var(--border); background: var(--panel); border-radius: 18px; padding: 16px 18px; color: rgba(255,255,255,.82); font-size: 18px; line-height: 1.5; }
    .mini-card.light { border-color: rgba(0,0,0,.1); background: rgba(255,255,255,.6); color: rgba(0,0,0,.78); }
    .edge { display: grid; gap: 32px; grid-template-columns: 0.9fr 1.1fr; padding-top: 64px; padding-bottom: 80px; }
    .edge-copy { font-size: 20px; line-height: 1.8; color: var(--muted); max-width: 720px; }
    .founder-section { border-top: 1px solid var(--border); background: #000; }
    .founder-grid { display: grid; gap: 48px; grid-template-columns: 0.9fr 1.1fr; align-items: center; padding-top: 80px; padding-bottom: 96px; }
    .founder-image-wrap { position: relative; width: 100%; max-width: 420px; }
    .founder-image { width: 100%; display: block; border-radius: 32px; border: 1px solid var(--border); object-fit: cover; box-shadow: 0 24px 64px rgba(0,0,0,.5); }
    .image-overlay { position: absolute; inset: 0; border-radius: 32px; background: linear-gradient(to top, rgba(0,0,0,.40), rgba(0,0,0,0)); }
    .founder-name { margin-top: 16px; font-size: clamp(40px, 4.5vw, 58px); }
    .founder-title { margin-top: 12px; color: rgba(255,255,255,.7); font-size: 22px; }
    .founder-copy { margin-top: 24px; font-size: 20px; line-height: 1.8; color: rgba(255,255,255,.65); }
    .founder-copy.strong { color: rgba(255,255,255,.88); }
    .contact-section { border-top: 1px solid var(--border); background: #000; }
    .contact-grid { display: grid; gap: 32px; grid-template-columns: 1.05fr 0.95fr; align-items: end; padding-top: 64px; padding-bottom: 80px; }
    .contact-card { background: var(--panel); padding: 32px; }
    .contact-line { font-size: 20px; line-height: 1.8; color: rgba(255,255,255,.82); margin: 16px 0 0; }
    @media (max-width: 900px) {
      .hero-grid, .features, .services-grid, .edge, .founder-grid, .contact-grid { grid-template-columns: 1fr; }
      .mini-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">Career Strategies</p>
        <h1>Contact Cover</h1>
        <div class="rule"></div>
        <p class="lead">Private advisory for high-stakes career decisions.</p>
        <p class="sublead">Strategic guidance for federal law enforcement, intelligence, and U.S. military careers.</p>
        <p class="sublead strong">Led by a former <strong>Special Agent</strong> and <strong>Intelligence Officer</strong>.</p>
        <div class="button-row">
          <a href="#services" class="btn btn-light">View Services</a>
          <a href="#contact" class="btn btn-dark">Request Consultation</a>
        </div>
      </div>
      <div class="card foundation">
        <p class="section-label">Operational Foundation</p>
        <div class="stack">
          <div class="foundation-item">Local & Federal Law Enforcement</div>
          <div class="foundation-item">Special Agent Careers</div>
          <div class="foundation-item">Intelligence Pathways</div>
          <div class="foundation-item">U.S. Military Pathways</div>
        </div>
      </div>
    </div>
  </section>

  <section class="container features">
    <div class="feature-card">
      <p class="section-label">Mission</p>
      <h2>Private advisory for serious candidates</h2>
      <p>Guidance built for candidates pursuing high-trust, highly selective careers where positioning and judgment matter.</p>
    </div>
    <div class="feature-card">
      <p class="section-label">Differentiator</p>
      <h2>Firsthand perspective</h2>
      <p>Built on operational experience across federal law enforcement, intelligence, and military environments — not recycled career advice.</p>
    </div>
    <div class="feature-card">
      <p class="section-label">Coverage</p>
      <h2>Full-spectrum career pathways</h2>
      <p>Local and federal law enforcement, intelligence pathways, and United States military careers.</p>
    </div>
  </section>

  <section id="services" class="services-band">
    <div class="container">
      <div class="services-head">
        <p class="section-label">Services</p>
        <h2>Focused, high-trust support</h2>
      </div>
      <div class="services-grid">
        <div class="card service-primary">
          <p class="section-label">Primary</p>
          <h3>1:1 Strategy</h3>
          <p class="price">$200/hr | $275 (90 min)</p>
          <div class="mini-grid">
            <div class="mini-card">Resume positioning</div>
            <div class="mini-card">Agency strategy</div>
            <div class="mini-card">Interview preparation</div>
            <div class="mini-card">Background guidance</div>
          </div>
        </div>
        <div class="card service-secondary">
          <p class="section-label dark">Secondary</p>
          <h3>Retainer Advisory</h3>
          <p class="price dark">$2,500/month</p>
          <div class="stack">
            <div class="mini-card light">Ongoing strategy</div>
            <div class="mini-card light">Direct access</div>
            <div class="mini-card light">Full pipeline support</div>
            <div class="mini-card light">3-month minimum</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container edge">
    <div>
      <p class="section-label">Operational Edge</p>
      <h2>Firsthand strategic perspective</h2>
      <p class="edge-copy">Advisory informed by the realities of selective hiring systems, mission-driven institutions, and high-consequence decision points.</p>
    </div>
    <div class="stack">
      <div class="mini-card">Understands what agencies value beyond job postings</div>
      <div class="mini-card">Firsthand experience with hiring pipelines and investigations</div>
      <div class="mini-card">Insight across law enforcement and intelligence pathways</div>
      <div class="mini-card">Guidance built for high-stakes career decisions</div>
    </div>
  </section>

  <section class="founder-section">
    <div class="container founder-grid">
      <div class="founder-image-wrap">
        <img class="founder-image" src="https://raw.githubusercontent.com/ContactCoverFounder/contact-cover/main/public/founder-elite.png" alt="Andres Godoy">
        <div class="image-overlay"></div>
      </div>
      <div>
        <p class="eyebrow">Founder</p>
        <h2 class="founder-name">Andres Godoy</h2>
        <p class="founder-title">Former Special Agent & Intelligence Officer</p>
        <div class="rule"></div>
        <p class="founder-copy strong">Andres Godoy brings a career defined by operational leadership across federal law enforcement and intelligence environments.</p>
        <p class="founder-copy">He has led and supported complex investigations, interagency operations, and strategic initiatives across both domestic and international contexts.</p>
        <p class="founder-copy strong">Contact Cover was built to provide clients with the same level of clarity, positioning, and strategic advantage required to succeed in highly competitive career landscapes.</p>
      </div>
    </div>
  </section>

  <section id="contact" class="contact-section">
    <div class="container contact-grid">
      <div>
        <p class="section-label">Contact</p>
        <h2>Request a private consultation</h2>
        <p class="edge-copy">For candidates seeking clear, experience-based guidance on consequential career decisions.</p>
      </div>
      <div class="card contact-card">
        <p class="section-label">Next Step</p>
        <p class="contact-line">Email: andres@contactcovercs.com</p>
        <p class="contact-line">Website: contactcovercs.com</p>
      </div>
    </div>
  </section>
</body>
</html>
