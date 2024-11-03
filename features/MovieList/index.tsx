import { SimpleCard } from "@/components/ui/Card/SimpleCard";
import React from "react";
import { ScrollView } from "react-native";

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = ({}) => {
  return (
    <ScrollView horizontal contentContainerClassName="gap-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return (
          <SimpleCard
            title="Wonder Woman (1984)"
            description="Des 16, 2020"
            image={{
              source: require("../../assets/images/avenger.jpg"),
            }}
          />
        );
      })}
    </ScrollView>
  );
};

export default MovieList;
