import React, { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";

import { cn } from "@/lib/utils";

type InputContainerProps = React.ComponentPropsWithoutRef<typeof View> & {
  children: React.ReactNode;
};

const InputContainer = forwardRef<
  React.ElementRef<typeof View>,
  InputContainerProps
>(({ children, className, ...props }, ref) => {
  return (
    <View ref={ref} className={cn("relative w-full", className)} {...props}>
      {children}
    </View>
  );
});

InputContainer.displayName = "InputContainer";

type InputIconProps = {
  children: React.ReactNode;
};

const InputIcon = ({ children }: InputIconProps) => {
  return (
    <View className="absolute right-0 top-1/2 text-center w-20 transition-all">
      {children}
    </View>
  );
};
InputIcon.displayName = "InputIcon";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClassName, inputClassName, ...props }, ref) => (
    <View className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <Text className={cn("text-base", labelClassName)}>{label}</Text>
      )}
      <TextInput
        className={cn(
          "border border-input py-2.5 px-4 w-full rounded-lg text-white placeholder:text-foreground",
          inputClassName
        )}
        {...props}
      />
    </View>
  )
);

export { Input, InputContainer, InputIcon };
