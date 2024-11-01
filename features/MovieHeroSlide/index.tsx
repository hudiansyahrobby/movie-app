import { Badge } from "@/components/ui/Badge";
import { Carousel, CarouselPagination } from "@/components/ui/Carousel";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { ICarouselInstance } from "react-native-reanimated-carousel";

interface MovieHeroSlideProps {}

const MovieHeroSlide: React.FC<MovieHeroSlideProps> = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const data = [...new Array(6).keys()];
  const width = Dimensions.get("window").width;
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <GestureHandlerRootView>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={progress}
        renderItem={() => (
          <View
            className="relative"
            style={{
              shadowColor: "black",
              shadowRadius: 10,
              shadowOpacity: 1,
            }}
          >
            <Image
              source={require("../../assets/images/avenger.jpg")}
              className="w-full h-full"
              style={{
                shadowColor: "black",
                shadowRadius: 10,
                shadowOpacity: 1,
              }}
            />
            <View
              className="absolute bottom-5 left-4 flex gap-2 right-4"
              style={{
                shadowColor: "black",
                shadowRadius: 10,
                shadowOpacity: 1,
              }}
            >
              <Badge
                className="w-14"
                variant="light"
                label={<>{/* <Entypo name="star" color="yellow" /> 4,5 */}</>}
              />
              <Text className="text-white text-3xl font-bold">
                Doctor Strangers
              </Text>
              <View className="flex items-center gap-2 flex-row">
                <Badge
                  variant="light"
                  label="Action  |  Adventure  |  Fantasy"
                />
              </View>
            </View>

            <LinearGradient
              colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.3)"]}
              className="absolute top-0 right-0 left-0 bottom-0"
            />

            <CarouselPagination
              progress={progress}
              data={data}
              onPress={onPressPagination}
              containerStyle={{
                position: "absolute",
                right: 20,
                bottom: 20,
                gap: 3,
              }}
            />
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
};

export default MovieHeroSlide;
