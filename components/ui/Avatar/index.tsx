import { forwardRef, useState } from "react";
import { Image, Text, View } from "react-native";

import { cn } from "@/lib/utils";

/**
 * A forwardRef component that renders a customizable Avatar using a View component.
 *
 * @param {Object} props - The properties passed to the Avatar component.
 * @param {string} [props.className] - Additional class names to apply to the Avatar.
 * @param {React.Ref<React.ElementRef<typeof View>>} ref - The reference to the View component.
 * @returns {JSX.Element} The rendered Avatar component.
 */
const Avatar = forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

/**
 * A forwardRef component that renders an image with error handling.
 * If the image fails to load, it will not render anything.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional class names for styling the image.
 * @param {React.Ref} ref - The ref to be forwarded to the Image component.
 * @returns {JSX.Element | null} The rendered Image component or null if there's an error.
 */
const AvatarImage = forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }
  return (
    <Image
      ref={ref}
      onError={() => setHasError(true)}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

/**
 * A fallback component for Avatar that displays a text inside a styled View.
 *
 * @component
 * @param {React.ComponentPropsWithoutRef<typeof View>} props - The props for the View component.
 * @param {string} [props.className] - Additional class names for the View component.
 * @param {string} [props.textClassname] - Additional class names for the Text component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the Text component.
 * @param {React.Ref<React.ElementRef<typeof View>>} ref - The ref to be forwarded to the View component.
 * @returns {JSX.Element} The rendered AvatarFallback component.
 */
const AvatarFallback = forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & { textClassname?: string }
>(({ children, className, textClassname, ...props }, ref) => (
  <View
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  >
    <Text className={cn("text-lg text-primary", textClassname)}>
      {children}
    </Text>
  </View>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
