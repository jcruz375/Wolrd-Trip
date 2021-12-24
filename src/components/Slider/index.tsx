import { Flex, Image } from '@chakra-ui/react';
import SwiperCore, {
  Autoplay,
  EffectFade, Navigation, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from './SliderItem';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

export function Slider() {
  return (
    <Flex
      width={[600, 1000, 1240]}
      maxW="1240px"
      mx="auto"
      my={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <SliderItem
            url="/continents/south-america"
            imageUrl="/south-america/south-america.png"
            title="America do sul"
            subtitle="paraíso tropical."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            url="/continents/europe"
            imageUrl="/europe/europe.png"
            title="Europa"
            subtitle="O velho continente."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            url="/continents/asia"
            imageUrl="/asia/asia.png"
            title="Ásia"
            subtitle="grandes tradições."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            url="/continents/oceania"
            imageUrl="/oceania/oceania.png"
            title="Oceania"
            subtitle="Exótico."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            url="/continents/north-america"
            imageUrl="/north-america/north-america.png"
            title="América do norte"
            subtitle="O grande ocidente."
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}