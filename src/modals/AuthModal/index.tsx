import AuthContent from "@/components/AuthContent";
import Modal from "../Modal";

const AuthModal = () => {
  return (
    <Modal
      modalId="authModal"
      fullHeightOnSmall={true}
      containerClasses="rounded-xl p-1 z-50"
    >
      <AuthContent />
    </Modal>
  );
};

export default AuthModal;
