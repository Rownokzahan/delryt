import Modal from "./Modal";

const SearchModal = ({ isModalOpen, closeModal }) => {
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <h1>SearchModal</h1>
    </Modal>
  );
};

export default SearchModal;
