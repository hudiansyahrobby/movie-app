import { Image, Text } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from ".";

interface SimpleCardProps {
  className?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  image?: React.ComponentPropsWithoutRef<typeof Image>;
}

function SimpleCard({
  className,
  title,
  description,
  content,
  footer,
  image,
}: SimpleCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        {image && <CardImage {...image} />}
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {content && (
        <CardContent>
          <Text className="text-base text-primary">{content}</Text>
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          <Text className="text-sm text-muted-foreground">{footer}</Text>
        </CardFooter>
      )}
    </Card>
  );
}

export { SimpleCard };
