import MovieCategoryList from "@/features/MovieCategoryList";
import MovieHeroSlide from "@/features/MovieHeroSlide";
import MovieList from "@/features/MovieList";
import * as React from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaView>
      <MovieHeroSlide />
      <View className="mt-64 flex gap-3 px-4">
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
      </View>
    </SafeAreaView>
  );
}

export default App;
