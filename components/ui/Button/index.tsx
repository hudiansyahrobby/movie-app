import { type VariantProps, cva } from "class-variance-authority";
import { Text, TouchableOpacity } from "react-native";

import { cn } from "@/lib/utils";

/**
 * Defines the button variants using the `cva` utility.
 *
 * The button has the following variants:
 * - `variant`: Determines the button's color and style.
 *   - `default`: Applies the primary background color.
 *   - `secondary`: Applies the secondary background color.
 *   - `destructive`: Applies the destructive background color.
 *   - `ghost`: Applies a slate background color.
 *   - `link`: Applies primary text color with an underline offset.
 *
 * - `size`: Determines the button's size.
 *   - `default`: Sets the height to 10 and padding to 4.
 *   - `sm`: Sets the height to 8 and padding to 2.
 *   - `lg`: Sets the height to 12 and padding to 8.
 *
 * The default variants are:
 * - `variant`: `default`
 * - `size`: `default`
 */
const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        destructive: "bg-destructive",
        ghost: "bg-slate-700",
        link: "text-primary underline-offset-4",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Generates a set of class names for button text variants using the `cva` utility.
 *
 * The button text has the following variants:
 * - `variant`: Determines the button text's color and style.
 *   - `default`: Applies the primary foreground color.
 *   - `secondary`: Applies the secondary foreground color.
 *   - `destructive`: Applies the destructive foreground color.
 *   - `ghost`: Applies the primary foreground color.
 *   - `link`: Applies primary foreground color with an underline.
 *
 * - `size`: Determines the button text's size.
 *   - `default`: Sets the text size to base.
 *   - `sm`: Sets the text size to small.
 *   - `lg`: Sets the text size to extra-large.
 *
 * The default variants are:
 * - `variant`: `default`
 * - `size`: `default`
 */
const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      ghost: "text-primary-foreground",
      link: "text-primary-foreground underline",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export { Button, buttonVariants, buttonTextVariants };
