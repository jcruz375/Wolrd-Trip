import { Box, Divider, Flex, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { BiBuildings, BiDrink, BiWorld } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiGreekTemple } from "react-icons/gi";
import { Banner } from "../components/Banner";
import { CategoriesSection } from "../components/CategoriesSection";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";



function Home() {
  return (
    <Flex as="main" w="100vw" maxWidth={1800} pb="41" h="100vh" direction="column">
      <Header />

      <Banner />

      <CategoriesSection />

      <Divider
        w={90}
        my="10"
        borderColor="gray.900"
        display="block"
        mr="auto"
        ml="auto" />

      <Flex
        as="section"
        w="100%"
        px={200}
        align="center"
        justify="center"
        direction="column"
      >
        <Text
          as="h1"
          fontSize="4xl"
        >
          Vamos nessa?
        </Text>
        <Text
          as="h1"
          fontSize="4xl"
        >
          Então escolha seu continente
        </Text>
      </Flex>

      <Slider />
    </Flex>
  );
};

export default Home;
