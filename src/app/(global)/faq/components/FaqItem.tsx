import clsx from "clsx";
import { useRef } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

interface FaqItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isExpanded, onClick }: FaqItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const height = contentRef.current?.scrollHeight || 0;

  return (
    <div className="p-4 border rounded-xl">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4"
      >
        <h3 className="text-left">{question}</h3>
        {isExpanded ? (
          <LuMinus className="shrink-0" />
        ) : (
          <LuPlus className="shrink-0" />
        )}
      </button>

      <div
        ref={contentRef}
        className={clsx("overflow-hidden duration-300 transition-[height]")}
        style={{ height: isExpanded ? `${height}px` : "0px" }}
      >
        <p className="pt-2 text-uiBlack-light text-sm">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
