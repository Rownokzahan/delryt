"use client";

import useModalById from "@/hooks/useModalById";
import Modal from "../Modal";
import SearchModalContent from "./SearchModalContent";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SearchModal = () => {
  const { isModalOpen, closeModal } = useModalById("searchModal");
  const pathname = usePathname();

  useEffect(() => {
    if (isModalOpen) {
      closeModal();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Modal
      modalId={"searchModal"}
      fullHeightOnSmall={true}
      containerClasses="px-4 py-6"
    >
      <SearchModalContent />
    </Modal>
  );
};

export default SearchModal;
