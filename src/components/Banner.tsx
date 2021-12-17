import { Box, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="nav"
      bgImage="url('banner.png')"
      w={[600, 1000, 1800]}
      h={[500, "96"]}
      p={["10", "8"]}
      justify="space-between"
      align="center"
      bgSize="cover"
    >
      <Stack spacing="5">
        <Box>
          <Text
            w={400}
            fontSize={30}
            fontWeight="medium"
            color="gray.50"
          >
            5 Continentes,
          </Text>
          <Text
            w={480}
            fontSize={30}
            fontWeight="medium"
            color="gray.50"
          >
            infinitas possibilidades.
          </Text>
        </Box>
        <Text
          fontSize={16}
          fontWeight="regular"
          color="gray.100"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      {isWideScreen && (
        <Image src="Airplane.png" alt="Airplane" mt={170} />
      )}
    </Flex>
  );
}