import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      as="nav"
      bgImage="url('banner.png')"
      h="96"
      px={140}
      justify="space-between"
      align="center"
      bgSize="cover"
    >
      <Stack spacing="5">
        <Box>
          <Text
            w={400}
            fontSize={36}
            fontWeight="medium"
            color="gray.50"
          >
            5 Continentes,
          </Text>
          <Text
            w={480}
            fontSize={36}
            fontWeight="medium"
            color="gray.50"
          >
            infinitas possibilidades.
          </Text>
        </Box>
        <Text
          fontSize={20}
          fontWeight="regular"
          color="gray.100"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      <Image src="Airplane.png" alt="Airplane" mt={170} />
    </Flex>
  );
}