import ActorList from "@/features/ActorList";
import MovieCategoryList from "@/features/MovieCategoryList";
import MovieHeroSlide from "@/features/MovieHeroSlide";
import MovieList from "@/features/MovieList";
import * as React from "react";
import { Text, View, ScrollView } from "react-native";

function App() {
  return (
    <ScrollView className="my-4">
      <MovieHeroSlide />
      <View className="mt-4 flex gap-3 px-4">
        {/* input search movie */}

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
