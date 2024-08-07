import { cn } from "@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const iconVariants = cva("transition-colors duration-300", {
  variants: {
    variant: {
      default:
        "text-gray-600 bg-gray-100 group-hover:text-gray-950 group-hover:bg-gray-300",
      primary:
        "text-primary-600 bg-primary-100 group-hover:text-primary-950 group-hover:bg-primary-300",
    },
    size: {
      default: "w-7 h-7 p-1 rounded-sm",
      sm: "h-9 rounded-xs px-3",
      lg: "w-12 h-12 p-3 rounded",
      xl: "",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

export interface IconProps extends VariantProps<typeof iconVariants> {
  children: any;
  className?: string;
  rounded?: boolean;
}

export const Icon = ({
  children,
  size,
  variant,
  className,
  rounded = false,
}: IconProps) => {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    className: cn(
      iconVariants({
        size,
        variant,
        className: cn(className, rounded && "rounded-full"),
      })
    ),
  });
};
