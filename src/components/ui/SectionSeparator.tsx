import clsx from "clsx";

interface SectionSeparatorProps {
  className?: string;
}

const SectionSeparator = ({ className = "" }: SectionSeparatorProps) => {
  return <div className={clsx("h-[2px] w-full bg-gray-200", className)} />;
};

export default SectionSeparator;
