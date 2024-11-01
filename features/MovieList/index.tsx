import React from "react";
import { Image, ScrollView, View } from "react-native";

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = ({}) => {
  return (
    <ScrollView horizontal contentContainerClassName="gap-3">
      <View>
        <Image
          source={require("../../assets/images/avenger.jpg")}
          className="w-48 h-72 rounded-lg"
          resizeMode="cover"
        />
      </View>
      <View>
        <Image
          source={require("../../assets/images/avenger.jpg")}
          className="w-48 h-72 rounded-lg"
          resizeMode="cover"
        />
      </View>
      <View>
        <Image
          source={require("../../assets/images/avenger.jpg")}
          className="w-48 h-72 rounded-lg"
          resizeMode="cover"
        />
      </View>
      <View>
        <Image
          source={require("../../assets/images/avenger.jpg")}
          className="w-48 h-72 rounded-lg"
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

export default MovieList;
