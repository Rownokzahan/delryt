import Modal from "../Modal";

interface MenuModalProps {
  children: React.ReactNode;
}

const MenuModal = ({ children }: MenuModalProps) => {
  return (
    <Modal modalId="menuModal" fullHeightOnSmall={false}>
      {children}
    </Modal>
  );
};

export default MenuModal;
