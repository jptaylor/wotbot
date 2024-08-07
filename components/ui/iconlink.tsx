import React from "react";

import { cn } from "@/utils/tailwind";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { Icon } from "./icon";

const iconLinkVariants = cva(
  "group flex flex-row items-center rounded transition-colors duration-300 font-semibold",
  {
    variants: {
      variant: {
        default:
          "text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900",
        primary:
          "text-primary-600 bg-primary-100 hover:bg-primary-200 hover:text-primary-900",
      },
      size: {
        default: "p-2 gap-2 rounded-md",
        sm: "gap-1",
        lg: "gap-2",
        xl: "gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface IconLinkProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLAnchorElement>>,
    VariantProps<typeof iconLinkVariants> {
  icon: React.ElementType;
  href: string;
  className?: string;
}

export const IconLink = ({
  children,
  icon,
  href,
  className,
  ...props
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        iconLinkVariants({
          ...props,
          className,
        })
      )}
      {...props}
    >
      <Icon {...props}>{React.createElement(icon)}</Icon>
      {children}
    </Link>
  );
};
