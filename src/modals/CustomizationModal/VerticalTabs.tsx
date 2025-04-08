"use client";

import { RefObject, useEffect, useState } from "react";
import { AddOnCategoryType } from "./addOnsData";
import clsx from "clsx";
import { Id } from "@/types";

interface VerticalTabsProps {
  addOns: AddOnCategoryType[];
  categoryRefs: RefObject<Map<Id, HTMLDivElement>>;
}

const VerticalTabs = ({ addOns, categoryRefs }: VerticalTabsProps) => {
  const [activeSectId, setActiveSectId] = useState<Id>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectId(entry.target.getAttribute("data-id") || "");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-50% 0% -50% 0%",
      }
    );

    // Observe each collection
    categoryRefs.current.forEach((collection) => {
      if (collection) observer.observe(collection);
    });

    // Cleanup observer
    return () => {
      observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOns]);

  const handleScrollToCategory = (categoryId: Id) => {
    const element = categoryRefs.current.get(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSectId(categoryId);
    }
  };

  return (
    <div className="overflow-y-auto bg-primary-light/10 hover-scrollbar">
      {addOns.map((addOn) => (
        <button
          key={addOn?.id}
          onClick={() => handleScrollToCategory(addOn.id)}
          className={clsx(
            "block p-2 text-sm font-thin vertical-text",
            activeSectId == addOn.id && "text-primary relative"
          )}
        >
          {addOn?.name}

          {activeSectId == addOn.id && (
            <span className="block size-[6px] rounded-full bg-primary absolute left-1 top-1/2 -translate-y-1/2" />
          )}
        </button>
      ))}
    </div>
  );
};

export default VerticalTabs;
