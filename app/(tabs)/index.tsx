import MovieCategoryList from "@/features/MovieCategoryList";
import MovieHeroSlide from "@/features/MovieHeroSlide";
import MovieList from "@/features/MovieList";
import * as React from "react";
import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaView>
      <MovieHeroSlide />
      <View className="mt-64 flex gap-3 px-4">
        <MovieCategoryList />
        <MovieList />
      </View>
    </SafeAreaView>
  );
}

export default App;
