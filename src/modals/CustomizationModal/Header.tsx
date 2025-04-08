import VegNonVegIcon from "@/components/ui/VegNonVegIcon";

interface HeaderProps {
  resetSelectedAddOns: () => void;
}

const Header = ({ resetSelectedAddOns }: HeaderProps) => {
  return (
    <div className="p-4 border-b flex justify-between items-center gap-6">
      <h4 className="truncate">
        <VegNonVegIcon isVeg={false} className="me-1 mb-1" />
        <span className="font-medium">Chicken Kheema & Chapati Lunchbox</span>
      </h4>

      <button
        onClick={resetSelectedAddOns}
        className="py-1 font-medium text-primary text-sm text-nowrap"
      >
        Reset Customization
      </button>
    </div>
  );
};

export default Header;
