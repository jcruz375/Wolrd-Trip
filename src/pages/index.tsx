import { Divider, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { CategoriesSection } from "../components/CategoriesSection";
import { Slider } from "../components/Slider";

function Home() {
  return (
    <Flex as="main" w="100vw" maxWidth={[700, 1800]} h="100vh" direction="column">
      <Banner />

      <CategoriesSection />

      <Divider
        w={[200, 90]}
        my="10"
        borderColor="gray.900"
        display="block"
        mx={[200, "auto"]} 
      />

      <Flex
        as="section"
        w={[600, 1000, 1800]}
        px={[100, 200]}
        align="center"
        justify="center"
        direction="column"
      >
        <Text
          as="h1"
          fontSize="2xl"
        >
          Vamos nessa?
        </Text>
        <Text
          as="h1"
          fontSize="2xl"
        >
          Então escolha seu continente
        </Text>
      </Flex>

      <Slider />
    </Flex>
  );
};

export default Home;
