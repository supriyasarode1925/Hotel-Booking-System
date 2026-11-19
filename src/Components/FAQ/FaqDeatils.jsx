
import React, { useMemo, useState } from "react";
import "./FaqDeatils.css";

const faqData = [
  {
    category: "Booking",
    question: "How can I book a hotel room?",
    answer:
      "Browse our available rooms, select your preferred room, choose your check-in and check-out dates, enter guest details, and confirm your booking."
  },
  {
    category: "Booking",
    question: "Can I modify my reservation?",
    answer:
      "Yes, you can request changes to your reservation through your booking dashboard or by contacting our support team. Changes depend on room availability and booking policies."
  },
  {
    category: "Booking",
    question: "Can I cancel my booking?",
    answer:
      "You can request cancellation through your booking details. Cancellation fees and refund eligibility depend on the cancellation policy associated with your reservation."
  },
  {
    category: "Check-in & Check-out",
    question: "What are the check-in and check-out times?",
    answer:
      "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available on request, subject to availability."
  },
  {
    category: "Check-in & Check-out",
    question: "Which documents are required at check-in?",
    answer:
      "Guests must present valid identification accepted by the property. Additional documentation may be required depending on local regulations and the type of reservation."
  },
  {
    category: "Payments",
    question: "What payment methods do you accept?",
    answer:
      "Available payment methods may include credit cards, debit cards, UPI, and other options supported by the hotel booking system."
  },
  {
    category: "Payments",
    question: "How long does a refund take?",
    answer:
      "Once approved, refunds are processed according to the property's policy and payment provider's timelines. The time taken to receive the funds may vary."
  },
  {
    category: "Rooms & Amenities",
    question: "Are Wi-Fi and breakfast included?",
    answer:
      "Included amenities depend on the room and package you select. Please review the room details before completing your reservation."
  },
  {
    category: "Rooms & Amenities",
    question: "Can I request an extra bed?",
    answer:
      "Extra beds or additional guest arrangements may be available for selected rooms at an additional cost. Contact the hotel before your arrival."
  },
  {
    category: "Rooms & Amenities",
    question: "Are pets allowed in the hotel?",
    answer:
      "Pet policies vary by property and room type. Please contact the hotel directly to confirm its pet policy before booking."
  }
];

const categories = [
  "All Questions",
  "Booking",
  "Check-in & Check-out",
  "Payments",
  "Rooms & Amenities"
];

export const FaqDeatils = () => {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFAQs = useMemo(() => {
    const term = search.trim().toLowerCase();

    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        faq.category === activeCategory;

      const matchesSearch =
        !term ||
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term) ||
        faq.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function changeCategory(category) {
    setActiveCategory(category);
    setOpenIndex(0);
  }

  function changeSearch(value) {
    setSearch(value);
    setOpenIndex(0);
  }

  return (
    <>
        <main className="faq-page">
        <section className="faq-hero">
            <div className="faq-hero-content">
            <span className="faq-eyebrow">
                <span className="faq-eyebrow-dot" />
                YOUR COMFORT, OUR PRIORITY
            </span>

            <h1>
                Frequently Asked
                <br />
                <span>Questions</span>
            </h1>

            <p>
                Find answers to common questions about bookings,
                payments, rooms, and your stay with us.
            </p>

            <div className="faq-search">
                <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                >
                <circle
                    cx="10.8"
                    cy="10.8"
                    r="6.8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="m16 16 4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
                </svg>

                <input
                type="search"
                placeholder="Search your questions..."
                value={search}
                onChange={(e) => changeSearch(e.target.value)}
                aria-label="Search frequently asked questions"
                />

                {search && (
                <button
                    className="faq-clear"
                    type="button"
                    onClick={() => changeSearch("")}
                    aria-label="Clear search"
                >
                    ×
                </button>
                )}
            </div>

            <div className="faq-hero-note">
                <span>✓</span>
                Quick answers for a worry-free stay
            </div>
            </div>

            <div className="faq-hero-art" aria-hidden="true">
            <div className="faq-art-circle faq-art-circle-one" />
            <div className="faq-art-circle faq-art-circle-two" />

            <div className="faq-hotel-card">
                <div className="faq-hotel-sky">
                <span className="faq-art-sun" />
                <div className="faq-hotel-building">
                    <div className="faq-building-roof" />
                    <div className="faq-building-windows">
                    {Array.from({ length: 12 }, (_, i) => (
                        <span key={i} />
                    ))}
                    </div>
                    <div className="faq-building-door" />
                </div>
                <div className="faq-hotel-ground" />
                </div>

                <div className="faq-hotel-caption">
                <span className="faq-caption-icon">✦</span>
                <div>
                    <strong>Your perfect stay</strong>
                    <small>Relax. We've got you covered.</small>
                </div>
                </div>
            </div>

            <div className="faq-floating-card faq-floating-top">
                <span className="faq-floating-icon">✓</span>
                <div>
                <strong>Easy booking</strong>
                <small>Simple & convenient</small>
                </div>
            </div>

            <div className="faq-floating-card faq-floating-bottom">
                <span className="faq-floating-star">★</span>
                <div>
                <strong>We're here for you</strong>
                <small>Every step of your journey</small>
                </div>
            </div>
            </div>
        </section>

        <section className="faq-content">
            <div className="faq-section-heading">
            <span className="faq-section-label">HELP CENTER</span>
            <h2>How can we help you?</h2>
            <p>
                Explore our frequently asked questions by topic.
            </p>
            </div>

            <div
            className="faq-categories"
            aria-label="Filter questions by category"
            >
            {categories.map((category) => (
                <button
                key={category}
                type="button"
                className={`faq-category ${
                    activeCategory === category ? "active" : ""
                }`}
                onClick={() => changeCategory(category)}
                aria-pressed={activeCategory === category}
                >
                {category === "All Questions" && (
                    <span aria-hidden="true">✦ </span>
                )}
                {category}
                </button>
            ))}
            </div>

            <div className="faq-results">
            <div className="faq-results-heading">
                <h3>
                {search ? "Search Results" : "Popular Questions"}
                </h3>
                <span>
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "question" : "questions"}
                </span>
            </div>

            <div className="faq-list">
                {filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                    <article
                    className={`faq-item ${isOpen ? "is-open" : ""}`}
                    key={faq.question}
                    >
                    <button
                        type="button"
                        className="faq-question"
                        onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                        }
                        aria-expanded={isOpen}
                    >
                        <span className="faq-question-text">
                        <span className="faq-question-icon">Q</span>
                        {faq.question}
                        </span>

                        <span className="faq-toggle" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                        </span>
                    </button>

                    {isOpen && (
                        <div className="faq-answer">
                        <div className="faq-answer-content">
                            {faq.answer}
                        </div>
                        </div>
                    )}
                    </article>
                );
                })}
            </div>

            {filteredFAQs.length === 0 && (
                <div className="faq-empty">
                <div className="faq-empty-icon">?</div>
                <h3>No questions found</h3>
                <p>
                    Try another search term or select a different category.
                </p>
                <button
                    type="button"
                    className="faq-reset"
                    onClick={() => {
                    changeSearch("");
                    changeCategory("All Questions");
                    }}
                >
                    View all questions
                </button>
                </div>
            )}
            </div>

            <section className="faq-contact">
            <div className="faq-contact-icon">
                <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                >
                <path
                    d="M4 13v-2a8 8 0 0 1 16 0v2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
                <rect
                    x="3"
                    y="12"
                    width="4"
                    height="7"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />
                <rect
                    x="17"
                    y="12"
                    width="4"
                    height="7"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />
                <path
                    d="M19 19c0 1.5-2 2-4 2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
                </svg>
            </div>

            <div className="faq-contact-text">
                <span>NEED PERSONALIZED HELP?</span>
                <h2>Still have questions?</h2>
                <p>
                Our support team is happy to help you plan a
                comfortable and memorable stay.
                </p>
            </div>

            <a className="faq-contact-button" href="/contact">
                Contact Support <span aria-hidden="true">→</span>
            </a>
            </section>
        </section>
        </main>
    </>
  );
}
