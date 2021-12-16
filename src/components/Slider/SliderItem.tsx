import { Flex, Heading, Text } from "@chakra-ui/react";
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
  );
}