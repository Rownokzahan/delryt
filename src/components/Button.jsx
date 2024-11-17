"use client";

import clsx from "clsx";

const Button = ({
  children,
  className = "", // for extra styles
  disabled = false,
  variant = "primary",
  size = "medium",
  type = "button",
  onClick = () => {},
}) => {
  // Base button styles for all variants
  const baseStyles =
    "rounded text-center capitalize font-semibold flex items-center justify-center transition-all ease-in-out duration-300";

  // Variant-specific styles (primary, secondary, etc.)
  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    tertiary: "bg-tertiary",
    "primary-outline":
      "border border-primary-light text-primary bg-primary-light/10",
  };

  // Size-specific padding styles
  const sizeStyles = {
    large: "px-10 py-4",
    medium: "px-8 py-3",
    small: "px-[15px] py-[10px]",
  };

  // Combining all the styles using clsx
  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    // Button element with dynamic class names and props
    <button
      onClick={onClick}
      className={classes}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
