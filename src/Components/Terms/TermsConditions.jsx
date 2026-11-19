
import React, { useState } from "react";
import "./TermsConditions.css";

const termsData = [
  {
    title: "1. Introduction",
    content:
      "Welcome to our hotel booking platform. By accessing our website or making a reservation, you agree to these Terms and Conditions. Please read them carefully before using our services."
  },
  {
    title: "2. Booking and Reservations",
    content:
      "All reservations are subject to room availability and confirmation. Guests must provide accurate personal information and booking details. A reservation is confirmed only after the required confirmation process is completed."
  },
  {
    title: "3. Check-in and Check-out",
    content:
      "Guests must present valid identification at check-in. Standard check-in and check-out times are determined by the hotel. Early check-in and late check-out are subject to availability and may incur additional charges."
  },
  {
    title: "4. Payments and Pricing",
    content:
      "Room rates, taxes, and additional charges will be displayed during the booking process where applicable. Guests agree to pay the total amount associated with their reservation using the available payment methods."
  },
  {
    title: "5. Cancellation and Refunds",
    content:
      "Cancellation and refund eligibility depends on the cancellation policy applicable to the reservation. Certain bookings may be non-refundable. Any eligible refund will be processed according to the hotel's policy and the payment provider's timelines."
  },
  {
    title: "6. Guest Responsibilities",
    content:
      "Guests are expected to respect hotel property, staff, and other guests. Any damage to hotel property, unlawful activity, or violation of hotel rules may result in additional charges or termination of the stay, subject to applicable law."
  },
  {
    title: "7. Privacy and Personal Information",
    content:
      "Personal information collected during booking will be handled in accordance with our Privacy Policy and applicable data protection laws. We use relevant information to manage reservations and provide hotel services."
  },
  {
    title: "8. Changes to Terms",
    content:
      "We reserve the right to update these Terms and Conditions when necessary. Updated terms will be published on this page with a revised date. Continued use of our services after changes take effect is subject to applicable law."
  },
  {
    title: "9. Contact Us",
    content:
      "If you have questions about these Terms and Conditions, please contact our support team through the Contact Us page or the customer service details provided on our website."
  }
];

export const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
    <div className="terms-page">
      <div className="terms-header">
        <span className="terms-label">IMPORTANT INFORMATION</span>
        <h1>Terms & Conditions</h1>
        <p>
          Please review our terms to understand the rules and
          guidelines for using our hotel booking services.
        </p>
        <span className="terms-updated">
          Last updated: October 27, 2026
        </span>
      </div>

      <div className="terms-layout">
        <aside className="terms-sidebar">
          <h3>Contents</h3>

          {termsData.map((term, index) => (
            <button
              key={term.title}
              type="button"
              className={
                activeSection === index ? "active" : ""
              }
              onClick={() => {
                setActiveSection(index);
                document.getElementById(`term-${index}`)
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
              }}
            >
              {term.title}
            </button>
          ))}
        </aside>

        <main className="terms-content">
          {termsData.map((term, index) => (
            <section
              className="terms-section"
              id={`term-${index}`}
              key={term.title}
            >
              <h2>{term.title}</h2>
              <p>{term.content}</p>
            </section>
          ))}

          <div className="terms-footer">
            <p>
              Thank you for choosing our hotel booking services.
              We look forward to making your stay comfortable.
            </p>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
