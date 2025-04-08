import { RiSearchLine } from "react-icons/ri";
import Modal from "../Modal";

const SearchModal = () => {
  return (
    <Modal modalId={"searchModal"} fullHeightOnSmall={true}>
      {/* Search Input */}
      <div className="px-4 py-6">
        <div className="p-2 ps-3 border rounded-lg shadow-sm flex items-center gap-1">
          <RiSearchLine className="text-xl text-uiBlack/30" />

          <input
            type="text"
            placeholder="What would you like to eat today?"
            className="w-full p-2 outline-hidden text-sm font-medium placeholder:text-uiBlack/30"
          />
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
