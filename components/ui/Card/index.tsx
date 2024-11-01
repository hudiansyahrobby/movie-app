import { Image, Text, View } from "react-native";

import { cn } from "@/lib/utils";

function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn("rounded-xl border", className)} {...props} />;
}

function CardHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn(className)} {...props} />;
}

function CardTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) {
  return (
    <Text
      className={cn(
        "text-lg font-semibold tracking-tight text-primary",
        className
      )}
      {...props}
    />
  );
}

function CardImage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Image>) {
  return (
    <Image
      className={cn("w-48 h-72 rounded-lg", className)}
      resizeMode="cover"
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) {
  return (
    <Text
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn("p-4 pt-0", className)} {...props} />;
}

function CardFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn(className, "flex flex-row items-center p-4 pt-0")}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardImage,
  CardContent,
  CardFooter,
};
