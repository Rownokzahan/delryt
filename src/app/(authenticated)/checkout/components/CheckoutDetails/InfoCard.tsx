import { IconType } from "react-icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface InfoCardProps {
  Icon: IconType;
  label: string;
  children: React.ReactNode;
  showArrowButton?: boolean;
  onArrowButtonClick?: () => void;
}

const InfoCard = ({
  Icon,
  label,
  children,
  showArrowButton = true,
  onArrowButtonClick,
}: InfoCardProps) => {
  return (
    <div className="p-3 rounded-lg bg-uiWhite flex justify-between">
      <div className="flex-1 flex items-start gap-2">
        <div className="size-9 rounded-full bg-primary/10 grid place-content-center">
          <Icon className="text-xl text-primary" />
        </div>

        <div className="text-sm">
          <h5 className="font-medium">{label}</h5>
          {children}
        </div>
      </div>

      {showArrowButton && (
        <button onClick={onArrowButtonClick}>
          <MdOutlineArrowForwardIos />
        </button>
      )}
    </div>
  );
};

export default InfoCard;
