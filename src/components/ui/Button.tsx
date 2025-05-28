"use client";

import clsx from "clsx";
import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "dark"
    | "primary-outline"
    | "secondary-outline";
  size?: "large" | "medium" | "small";
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Click event handler
  href?: string;
}

const Button = ({
  children,
  className = "", // for extra classes
  disabled = false,
  variant = "primary",
  size = "medium",
  type = "button",
  onClick = () => {},
  href = "",
}: ButtonProps) => {
  // Base button styles
  const baseStyles = clsx(
    "rounded-sm",
    "text-center capitalize",
    "flex items-center justify-center",
    "disabled:bg-neutral-300 disabled:text-uiWhite disabled:border-neutral-300",
    "transition-all ease-in-out duration-300"
  );

  // Variant-specific styles
  const variantStyles: Record<
    Exclude<ButtonProps["variant"], undefined>,
    string
  > = {
    primary: "bg-primary text-uiWhite",
    secondary: "bg-secondary text-uiWhite",
    tertiary: "bg-tertiary text-uiBlack",
    dark: "bg-uiBlack text-uiWhite",
    "primary-outline": "border border-primary text-primary bg-white",
    "secondary-outline": "text-secondary bg-white",
  };

  const sizeStyles: Record<Exclude<ButtonProps["size"], undefined>, string> = {
    large: "px-10 py-4 font-medium",
    medium: "px-8 py-3 font-medium",
    small: "px-[15px] py-[10px] text-sm font-medium",
  };

  // Combine all styles
  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // If href is provided, render a link
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
