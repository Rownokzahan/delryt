"use client";

import { useState } from "react";
import faqCategories from "./faqCategories";
import FaqCategory from "./components/FaqCategory";

const FaqPage = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<{
    categoryIdx: number;
    questionIdx: number;
  } | null>(null);

  const isQuestionExpanded = (categoryIdx: number, questionIdx: number) => {
    return (
      expandedQuestion?.categoryIdx === categoryIdx &&
      expandedQuestion?.questionIdx === questionIdx
    );
  };

  const toggleExpandedQuestion = (categoryIdx: number, questionIdx: number) => {
    if (isQuestionExpanded(categoryIdx, questionIdx)) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion({ categoryIdx, questionIdx });
    }
  };

  return (
    <main className="ui-container py-6">
      <h2 className="mb-4 text-primary text-3xl">FAQs</h2>

      <div className="space-y-8">
        {faqCategories.map((category, categoryIdx) => (
          <FaqCategory
            key={categoryIdx}
            category={category.category}
            faqs={category.faqs}
            categoryIdx={categoryIdx}
            isQuestionExpanded={isQuestionExpanded}
            toggleExpandedQuestion={toggleExpandedQuestion}
          />
        ))}
      </div>
    </main>
  );
};

export default FaqPage;
