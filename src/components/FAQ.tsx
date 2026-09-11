"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you only do Instagram?",
    answer:
      "Instagram is our primary social platform right now. Campaign and advertising support can be included where appropriate.",
  },
  {
    question: "Do you create the content?",
    answer:
      "Yes. Content creation is part of our packages. You provide the relevant business information and assets we need.",
  },
  {
    question: "Do I need to give you Instagram access?",
    answer:
      "For Instagram management, the required permissions/access need to be arranged. If we're only creating the content, we can work without managing the account.",
  },
  {
    question: "Do you guarantee followers or sales?",
    answer:
      "No. We'd rather tell you the truth than put “10X” on a landing page in a giant font.",
  },
  {
    question: "Is ad spend included?",
    answer:
      "No. Advertising management and ad spend are separate.",
  },
  {
    question: "Can you do shoots?",
    answer:
      "Yes. On-ground shoots are available separately and are quoted based on the requirement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section section-light" id="faq">
      <div className="section-shell">
        <div className="faq-heading">
          <div className="section-eyebrow">FAQ</div>

          <h2>THE QUESTIONS PEOPLE ACTUALLY ASK.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}