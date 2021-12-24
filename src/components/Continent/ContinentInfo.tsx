import { Flex, HStack, Text } from "@chakra-ui/react";

export function ContinentInfo() {
  return (
    <Flex
      as="section"
      mt="20"
      align="center"
      justify="space-between"
      direction={['column', 'row']}
    >
      <Text
        maxW={[600]}
        fontSize={24}
        color="gray.600"
        mb={20}
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <HStack spacing={42}>
        <Flex direction="column" align="center" justify="center">
          <Text fontSize={30} fontWeight="semibold" color="yellow.600">50</Text>
          <Text fontSize={24} fontWeight="semibold" color="gray.600">países</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text fontSize={30} fontWeight="semibold" color="yellow.600">60</Text>
          <Text fontSize={24} fontWeight="semibold" color="gray.600">línguas</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text fontSize={30} fontWeight="semibold" color="yellow.600">27</Text>
          <Text fontSize={24} fontWeight="semibold" color="gray.600">cidades +100</Text>
        </Flex>
      </HStack>
    </Flex>
  )
}