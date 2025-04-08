import clsx from "clsx";

type Variant = "primary" | "secondary" | "skeleton";

interface ProgressBarProps {
  progress: number;
  extraClasses?: string;
  variant?: Variant;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  extraClasses,
  variant = "primary",
}) => {
  const variants: Record<Variant, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    skeleton: "bg-gray-300 animate-pulse",
  };

  return (
    <div
      className={clsx(
        "w-2/3 h-1 my-4 mx-auto rounded-full bg-gray-200",
        extraClasses
      )}
    >
      <div
        className={clsx("h-1 rounded-full duration-500", variants[variant])}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
