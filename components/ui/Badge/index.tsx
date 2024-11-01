import { type VariantProps, cva } from "class-variance-authority";
import { Text, View } from "react-native";

import { cn } from "@/lib/utils";

/**
 * A utility function to generate class names for badge components using the `cva` library.
 *
 * The `badgeVariants` function applies a set of default styles for badges, including flexbox layout,
 * padding, text size, and font weight. It also supports different variants for the badge's background color.
 *
 * Variants:
 * - `default`: Applies the default background color.
 * - `secondary`: Applies the secondary background color.
 * - `destructive`: Applies the destructive background color.
 * - `light`: Applies a light background color with reduced opacity and white text.
 * - `success`: Applies a green background color, with a darker shade in dark mode.
 *
 * Default Variant:
 * - `default`: The default variant is applied if no specific variant is provided.
 */
const badgeVariants = cva(
  "flex flex-row items-center rounded-full px-2 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-background",
        secondary: "bg-secondary",
        destructive: "bg-destructive",
        light: "bg-gray-900 opacity-70 text-white",
        success: "bg-green-500 dark:bg-green-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Generates class names for badge text variants using the `cva` utility.
 *
 * The `badgeTextVariants` function applies a set of default styles for badge text, including font weight,
 * text alignment, and text size. It also supports different variants for the badge text color.
 *
 * Variants:
 * - `default`: Applies the primary foreground text color.
 * - `secondary`: Applies the secondary foreground text color.
 * - `destructive`: Applies the destructive foreground text color.
 * - `light`: Applies white text color.
 * - `success`: Applies a green text color.
 *
 * Default Variant:
 * - `default`: The default variant is applied if no specific variant is provided.
 */
const badgeTextVariants = cva("font-medium text-center text-sm", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      light: "text-white",
      success: "text-green-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof badgeVariants> {
  label: React.ReactNode;
  labelClasses?: string;
}
function Badge({
  label,
  labelClasses,
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant }), className)} {...props}>
      <Text className={cn(badgeTextVariants({ variant }), labelClasses)}>
        {label}
      </Text>
    </View>
  );
}

export { Badge, badgeVariants };
