import { useState } from "react";

const comboItems = [
  {
    id: "745168",
    name: "Chicken Kheema Lasagne",
    price: 350,
    description:
      "Our signature Italian dish fused with desi flavors - delicious lasagna layered with Kheema and oozing with cheese. Desi taste, Italian ways.",
    imageUrl: "https://rp-media.faasos.io/catalog/images/TKDXVNJN2JXN.jpeg",
    isVeg: false,
  },
  {
    id: "745167",
    name: "Amritsari Paneer Tikka Lasagne",
    price: 300,
    description:
      "Enjoy this layered delicacy and drown yourself in the flavors of soft and moist tikka paneer baked to perfection and topped with mozzarella cheese which will make your dil go hadippa.",
    imageUrl: "https://rp-media.faasos.io/catalog/images/DVJ67JDSPGF9.jpeg",
    isVeg: true,
  },
  {
    id: "745169",
    name: "Corn & Pepper Lasagne",
    price: 280,
    description:
      "Treat yourself with American flavors in a lasagna with sweetcorn, olives, jalapenos and melted mozzarella on a layer of a pizza sauce and cheese spread.",
    imageUrl: "https://rp-media.faasos.io/catalog/images/K1P1DSUHIO1X.jpeg",
    isVeg: true,
  },
  {
    id: "745170",
    name: "Dilli ke Chole Lasagne",
    price: 320,
    description:
      "Classic lasagna filled with chatpate chole and layers of chipotle liquid cheese will make your taste buds do the Patiala tango.",
    imageUrl: "https://rp-media.faasos.io/catalog/images/IOUOOR4O4HYW.jpeg",
    isVeg: true,
  },
  {
    id: "745171",
    name: "Meaty Meatball Lasagne",
    price: 400,
    description:
      "(100% Safely Cooked Chicken) Satisfy your meat cravings with this double dose of chicken meatball! Made even more delicious with our marinara sauce and chipotle cheese exuding out of every layer.",
    imageUrl: "https://rp-media.faasos.io/catalog/images/UM1XJEPSUJED.jpeg",
    isVeg: false,
  },
];

const useComboSelection = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const [selectedItems, setSelectedItems] = useState({
    item1: null,
    item2: null,
  }); // Track selected items

  const handleSelectItem = (item) => {
    if (item && currentStep === 1) {
      setSelectedItems((prev) => ({ ...prev, item1: item }));
    } else if (item && currentStep === 2) {
      setSelectedItems((prev) => ({ ...prev, item2: item }));
    }
  };

  const handleCurrentStep = (step) => {
    if (step === 1 || (step === 2 && selectedItems?.item1 !== null)) {
      setCurrentStep(step);
      return;
    }
  };

  return {
    comboItems,
    currentStep,
    handleCurrentStep,
    selectedItems,
    handleSelectItem,
  };
};

export default useComboSelection;
