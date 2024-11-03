import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import React from "react";
import { ScrollView, Text, View } from "react-native";

interface ActorListProps {}

const ActorList: React.FC<ActorListProps> = ({}) => {
  return (
    <ScrollView horizontal contentContainerClassName="gap-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return (
          <View key={item}>
            <Avatar className="h-40 w-40">
              <AvatarImage
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1745949238519803904/ZHwM5B07_400x400.jpg",
                }}
              />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>
            <Text className="text-white text-center mt-2">Chris Hemsworth</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ActorList;
