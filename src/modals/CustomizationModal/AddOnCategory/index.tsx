import { RefObject } from "react";
import { AddOnCategoryType, AddOnItemType } from "../addOnsData";
import AddOnItem from "./AddOnItem";
import { Id } from "@/types";

interface AddOnCategoryProps {
  category: AddOnCategoryType;
  categoryRefs: RefObject<Map<Id, HTMLDivElement>>;
  selectedAddOns: {
    [key: Id]: AddOnItemType[];
  };
  updateSelectedAddOns: (categoryId: Id, addOnItem: AddOnItemType) => void;
}

const AddOnCategory = ({
  category,
  categoryRefs,
  selectedAddOns,
  updateSelectedAddOns,
}: AddOnCategoryProps) => {
  const { id: categoryId, name, maxSelections, items } = category || {};

  const setCatgoryRef = (id: Id, element: HTMLDivElement | null) => {
    if (element) {
      categoryRefs.current.set(id, element);
    } else {
      categoryRefs.current.delete(id);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      ref={(element) => {
        setCatgoryRef(categoryId, element);
      }}
      data-id={categoryId}
      className="space-y-3"
    >
      <div className="px-4 py-2 bg-linear-to-r  from-gray-100 via-uiWhite">
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-uiBlack-light">
          Select upto {maxSelections} options
        </p>
      </div>

      <ul className="px-4 space-y-3">
        {items.map((item) => (
          <AddOnItem
            key={item.id}
            addOnItem={item}
            selectedAddOns={selectedAddOns}
            categoryId={categoryId}
            updateSelectedAddOns={updateSelectedAddOns}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddOnCategory;
