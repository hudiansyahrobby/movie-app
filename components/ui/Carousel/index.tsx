import * as React from "react";
import { View } from "react-native";
import ReactNativeCarousel, {
  Pagination,
} from "react-native-reanimated-carousel";

type TCarouselProps = React.ComponentPropsWithoutRef<
  typeof ReactNativeCarousel
>;

const Carousel = React.forwardRef<
  React.ComponentRef<typeof ReactNativeCarousel>,
  TCarouselProps
>((props, ref) => {
  return (
    <View className="flex-1">
      <ReactNativeCarousel
        ref={ref}
        loop
        autoPlay={true}
        scrollAnimationDuration={1000}
        pagingEnabled
        autoPlayInterval={3000}
        {...props}
      />
    </View>
  );
});

Carousel.displayName = "Carousel";

type TCarouselPaginationProps = React.ComponentPropsWithoutRef<
  typeof Pagination.Basic
>;

const CarouselPagination = ({
  dotStyle,
  activeDotStyle,
  containerStyle,
  ...props
}: TCarouselPaginationProps) => {
  return (
    <Pagination.Basic
      size={15}
      dotStyle={{
        borderRadius: 100,
        backgroundColor: "#262626",
        ...dotStyle,
      }}
      activeDotStyle={{
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: "#f1f1f1",
        ...activeDotStyle,
      }}
      containerStyle={[
        {
          gap: 5,
        },
        containerStyle,
      ]}
      horizontal
      {...props}
    />
  );
};

export { Carousel, CarouselPagination };
