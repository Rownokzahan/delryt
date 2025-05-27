import FaqItem from "./FaqItem";

interface FaqCategoryProps {
  category: string;
  faqs: { question: string; answer: string }[];
  categoryIdx: number;
  isQuestionExpanded: (categoryIdx: number, questionIdx: number) => boolean;
  toggleExpandedQuestion: (categoryIdx: number, questionIdx: number) => void;
}

const FaqCategory = ({
  category,
  faqs,
  categoryIdx,
  isQuestionExpanded,
  toggleExpandedQuestion,
}: FaqCategoryProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium uppercase">{category}</h3>

      <div className="space-y-3">
        {faqs.map((faq, questionIdx: number) => (
          <FaqItem
            key={questionIdx}
            question={faq.question}
            answer={faq.answer}
            isExpanded={isQuestionExpanded(categoryIdx, questionIdx)}
            onClick={() => toggleExpandedQuestion(categoryIdx, questionIdx)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqCategory;
