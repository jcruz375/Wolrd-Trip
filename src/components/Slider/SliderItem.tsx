import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SliderItemProps {
  url: string;
  imageUrl: string;
  title: string;
  subtitle: string;
};

export function SliderItem({ url, imageUrl, title, subtitle }: SliderItemProps) {
  return (
    <Flex
      w="100%"
      h="450px"
      align="center"
      justify="center"
      direction="column"
      bgImage={imageUrl}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Flex
        w={400}
        h={200}
        direction="column"
        align="center"
        justify="center"
        borderRadius={20}
        bg="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(2px)"
      >
        <Link href={`/${url}`}>
          <a>
            <Heading
              fontSize={["3xl", "4xl", "5xl"]}
              color="gray.50"
              fontWeight="bold">
              {title}
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.100"
              fontSize={["0.8rem", "1xl", "2xl"]}
              mt={["2", "4"]}>
              {subtitle}
            </Text>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}