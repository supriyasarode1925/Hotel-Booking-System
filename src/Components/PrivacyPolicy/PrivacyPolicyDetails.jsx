
import React, { useState } from "react";
import { PrivacyPolicyData } from "../../App/PrivacyPolicyData";
import "./PrivacyPolicyDetails.css";

const icons = [
  "👤", "▤", "🛡️", "▣", "💳", "⚙️",
  "⇄", "🔒", "✓", "◷", "♧", "↻",
];

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");

export const PrivacyPolicyDetails = () => {
  const [showAll, setShowAll] = useState(false);

  const updatedDate = "October 26, 2026";
  const visibleSections = showAll
    ? PrivacyPolicyData
    : PrivacyPolicyData.slice(0, 4);

  return (
    <>
    <div className="pp-page">
      {/* Hero */}
      <header className="pp-hero">
        <div className="pp-hero-inner">
          <span className="pp-eyebrow">
            <span>✓</span> YOUR PRIVACY MATTERS
          </span>

          <h1>Privacy Policy</h1>

          <p>
            Your trust is important to us. Learn how we collect,
            use, and protect your personal information when you
            book your stay with us.
          </p>

          <div className="pp-date">
            <span>▣</span> Last Updated: {updatedDate}
          </div>
        </div>
      </header>

      {/* Policy layout */}
      <div className="pp-layout">
        <aside className="pp-sidebar">
          <h3>On This Page</h3>

          <nav aria-label="Privacy policy sections">
            {PrivacyPolicyData.map((section, index) => (
              <a
                key={section.title}
                href={`#${slugify(section.title)}`}
              >
                <span className="pp-nav-number">
                  {index + 1}
                </span>
                <span>{section.title}</span>
              </a>
            ))}

            <a href="#pp-contact">
              <span className="pp-nav-number">13</span>
              <span>Contact Us</span>
            </a>
          </nav>
        </aside>

        <main className="pp-main">
          <div className="pp-policy-card">
            {visibleSections.map((section, index) => (
              <section
                className="pp-section"
                id={slugify(section.title)}
                key={section.title}
              >
                <div className={`pp-section-icon pp-icon-${index % 6}`}>
                  {icons[index % icons.length]}
                </div>

                <div className="pp-section-body">
                  <h2>
                    <span className="pp-section-number">
                      {index + 1}.
                    </span>
                    {section.title}
                  </h2>

                  {section.content?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {section.list && (
                    <ul>
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {PrivacyPolicyData.length > 4 && (
              <button
                className="pp-view-more"
                onClick={() => setShowAll((current) => !current)}
                aria-expanded={showAll}
              >
                {showAll ? "Show Less" : "View All Sections"}
                <span className={showAll ? "pp-arrow-up" : ""}>
                  ↓
                </span>
              </button>
            )}
          </div>

          {/* Contact card */}
          <section className="pp-contact-card" id="pp-contact">
            <div className="pp-contact-art" aria-hidden="true">
              <div className="pp-shield">✓</div>
              <span className="pp-spark pp-spark-one">✦</span>
              <span className="pp-spark pp-spark-two">✧</span>
            </div>

            <div className="pp-contact-content">
              <span className="pp-contact-label">WE'RE HERE TO HELP</span>
              <h2>Contact Us</h2>

              <p>
                Have questions about your privacy or personal
                information? Our team is here to help.
              </p>

              <a href="mailto:privacy@example.com">
                <span>✉</span>
                <strong>Email:</strong> supriyasarode1925@gmail.com
              </a>

              <div className="pp-website">
                <span>◎</span>
                <strong>Website:</strong> Hotel Booking System
              </div>

            </div>
          </section>
        </main>
      </div>


    </div>
    </>
  );
}
