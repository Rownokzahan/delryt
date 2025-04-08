import Button from "@/components/ui/Button";
import CollectionNameList from "./CollectionNameList";
import { PiForkKnifeFill } from "react-icons/pi";
import MenuModal from "@/modals/MenuModal";
import useModalById from "@/hooks/useModalById";
import { ComboCollection, Id } from "@/types";
import { RefObject, useEffect, useState } from "react";
import clsx from "clsx";

interface ProductsSidebarProps {
  collections: ComboCollection[];
  collectionRefs: RefObject<Map<Id, HTMLDivElement>>;
  topOffset: number;
  containerClass?: string;
}

const ProductsSidebar = ({
  collections,
  collectionRefs,
  topOffset,
  containerClass = "",
}: ProductsSidebarProps) => {
  const { openModal: openMenuModal, closeModal: closeMenuModal } =
    useModalById("menuModal");
  const [activeCollectionId, setActiveCollectionId] = useState<Id>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCollectionId(entry.target.getAttribute("data-id") || "");
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    // Observe each collection
    collectionRefs.current.forEach((collection) => {
      if (collection) observer.observe(collection);
    });

    // Cleanup observer
    return () => {
      observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collections]);

  const scrollToCollection = (collectionId: Id) => {
    const element = collectionRefs.current.get(collectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCollectionId(collectionId);
    }
  };

  const handleScrollAndCloseMenu = (collectionId: Id) => {
    scrollToCollection(collectionId);
    closeMenuModal();
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-[30%] lg:w-1/4 min-h-96 relative">
        <div
          className={clsx("sticky", containerClass)}
          style={{ top: `${topOffset}px` }}
        >
          <CollectionNameList
            collections={collections}
            scrollToCollection={scrollToCollection}
            activeCollectionId={activeCollectionId}
          />
        </div>
      </div>

      {/* Floating Menu Button */}
      <div className="fixed md:hidden z-20 -translate-x-1/2 left-1/2 bottom-20">
        <Button onClick={openMenuModal} variant="dark">
          <span className="size-5 me-2 border border-uiWhite rounded-full flex justify-center items-center">
            <PiForkKnifeFill className="text-sm" />
          </span>
          <span>Menu</span>
        </Button>
      </div>

      {/* Menu Modal */}
      <MenuModal>
        <CollectionNameList
          collections={collections}
          scrollToCollection={handleScrollAndCloseMenu}
          activeCollectionId={activeCollectionId}
        />
      </MenuModal>
    </>
  );
};

export default ProductsSidebar;
