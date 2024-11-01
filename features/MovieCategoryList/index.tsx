import { Badge } from "@/components/ui/Badge";
import React from "react";
import { ScrollView, Text, View } from "react-native";

interface MovieCategoryListProps {}

const MovieCategoryList: React.FC<MovieCategoryListProps> = ({}) => {
  return (
    <View className="flex gap-4">
      <View className="flex justify-between flex-row items-center">
        <Text className="text-white">Categories</Text>
        <Text className="text-white">View All</Text>
      </View>
      <ScrollView horizontal contentContainerClassName="gap-2">
        <Badge variant="secondary" label="Action" />
        <Badge variant="secondary" label="Comedy" />
        <Badge variant="secondary" label="Romance" />
        <Badge variant="secondary" label="Romance" />
        <Badge variant="secondary" label="Romance" />
        <Badge variant="secondary" label="Romance" />
        <Badge variant="secondary" label="Romance" />
      </ScrollView>
    </View>
  );
};

export default MovieCategoryList;
