import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TopCityItemProps { 
  cityName: string;
  countryName: string;
  cityImage: string;
  countryImage: string;
}

export function TopCityItem({
  cityName, 
  countryName, 
  cityImage, 
  countryImage
}: TopCityItemProps) {
  return (
    <Flex as="article" direction="column" w={[400, 256]} h={[420, 279]}>
      <Image src={cityImage} width={256} height={250} objectFit="cover" />
      <Flex
        as="footer"
        w="100%"
        flex={1}
        bg="rgba(255, 185, 8, 0.05)"
        borderX="1px"
        borderBottom="1px"
        borderColor="yellow.600"
        align="center"
        justify="space-evenly"
      >
        <Stack spacing="2">
          <Text fontSize="20" fontWeight="semibold" color="gray.600">{cityName}</Text>
          <Text fontSize="16" fontWeight="medium" color="gray.400">{countryName}</Text>
        </Stack>
        <Box as="span">
          <Image src={countryImage} width={30} height={30} objectFit="cover" />
        </Box>
      </Flex>
    </Flex>
  )
}