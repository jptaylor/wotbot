import { cn } from "@/utils/tailwind";
import React from "react";

export const FormField = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
));
FormField.displayName = "FormField";
