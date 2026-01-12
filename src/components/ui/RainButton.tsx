import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rainButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-rain-deep text-primary-foreground hover:bg-rain-medium shadow-md hover:shadow-accent hover:-translate-y-0.5",
        accent:
          "bg-rain-accent text-accent-foreground hover:bg-rain-light shadow-accent hover:shadow-glow hover:-translate-y-0.5",
        outline:
          "border-2 border-rain-deep text-rain-deep bg-transparent hover:bg-rain-deep hover:text-primary-foreground",
        ghost:
          "text-rain-deep hover:bg-rain-surface",
        secondary:
          "bg-rain-surface text-rain-deep hover:bg-secondary",
        link:
          "text-rain-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface RainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rainButtonVariants> {
  asChild?: boolean;
}

const RainButton = React.forwardRef<HTMLButtonElement, RainButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(rainButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
RainButton.displayName = "RainButton";

export { RainButton, rainButtonVariants };
