import { RiSearchLine } from "react-icons/ri";
import Modal from "./Modal";

const SearchModal = ({ isModalOpen, closeModal }) => {
  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      disableScroll={true} // Disable scrolling when modal is open
    >
      {/* Search Input */}
      <div className="px-4 pb-6">
        <div className="p-2 ps-3 border rounded-lg shadow flex items-center gap-1">
          <RiSearchLine className="text-xl text-ui-gray-light" />

          <input
            type="text"
            placeholder="What would you like to eat today?"
            className="w-full p-2 outline-none text-sm font-bold placeholder:text-ui-gray-light placeholder:font-normal"
          />
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
