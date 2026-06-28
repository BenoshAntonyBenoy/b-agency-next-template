"use client";

import { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {siteContent.faq.items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item ${isOpen ? "faq-open" : ""}`} key={item.question}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
