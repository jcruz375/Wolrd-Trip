import { Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps{
  title: string;
  bannerImage: string;
}

export function ContinentBanner({title, bannerImage}: ContinentBannerProps) {
  return (
    <Flex
      as="main"
      bgImage={`url('/${bannerImage}/${bannerImage}.png')`}
      w={[800, 1240, 1800]}
      h={[400, 600]}
      p={["8", "10"]}
      direction={['column', 'row']}
      justify={['center', 'space-between']}
      align="center"
      bgSize="cover"
    >
      <Text
        as="h1"
        color="gray.00"
        fontSize={48}
        fontWeight="semibold"
        mt={[0,"auto"]}
      >
        {title}
      </Text>
    </Flex>
  );
};