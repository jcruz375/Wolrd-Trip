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
      width="100%"
      maxW="1240px"
      mx="auto"
      my={["5","10"]}
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
          <SliderItem url="" imageUrl="/europe.png" title="Europa" subtitle="O velho continente." />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem url="" imageUrl="/europe.png" title="São paulo" subtitle="Cidade de gente foda" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem url="" imageUrl="/europe.png" title="RJ" subtitle="Tilt" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}