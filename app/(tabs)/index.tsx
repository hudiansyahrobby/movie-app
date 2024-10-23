import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Alert, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="mt-10">
      <Badge label="hello" variant="destructive" />
      <Badge label="hello" variant="default" />
      <Badge label="hello" variant="secondary" />
      <Badge label="hello" variant="success" />

      <View className="flex flex-row gap-3">
        <Button label="Button" onPress={() => Alert.alert("Pressed 1")} />
        <Button
          label="Button"
          variant="secondary"
          onPress={() => Alert.alert("Pressed 2")}
        />
        <Button
          label="Button"
          variant="destructive"
          onPress={() => Alert.alert("Pressed 3")}
        />
      </View>
    </View>
  );
}
