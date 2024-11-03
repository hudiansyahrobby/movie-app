import { Input, InputContainer } from "@/components/ui/Input";
import ActorList from "@/features/ActorList";
import MovieCategoryList from "@/features/MovieCategoryList";
import MovieHeroSlide from "@/features/MovieHeroSlide";
import MovieList from "@/features/MovieList";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import * as React from "react";
import { ScrollView, Text, View } from "react-native";

function App() {
  return (
    <ScrollView className="my-4">
      <MovieHeroSlide />
      <View className="mt-4 flex gap-3 px-4">
        <InputContainer>
          <Input
            placeholder="Search your favorites movies or actors"
            inputClassName="pr-12"
          />
          <EvilIcons
            name="search"
            size={24}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            color="white"
          />
        </InputContainer>

        <MovieCategoryList />
        <View className="mt-5">
          <Text className="font-bold text-2xl text-white">Popular Movie</Text>
        </View>
        <MovieList />

        <View className="mt-5">
          <Text className="font-bold text-2xl text-white">TV Show</Text>
        </View>
        <MovieList />

        <View className="mt-5">
          <Text className="font-bold text-2xl text-white">Actor</Text>
        </View>
        <ActorList />
      </View>
    </ScrollView>
  );
}

export default App;
