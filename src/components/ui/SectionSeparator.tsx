import clsx from "clsx";

interface SectionSeparatorProps {
  className?: string;
}

const SectionSeparator = ({ className = "" }: SectionSeparatorProps) => {
  return <div className={clsx("h-0.5 w-full bg-gray-200", className)} />;
};

export default SectionSeparator;
