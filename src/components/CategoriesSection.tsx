import { Flex, HStack, Icon, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { BiBuildings, BiDrink, BiWorld } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiGreekTemple } from "react-icons/gi";


export function CategoriesSection() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="section" w={["600px", "100px", "1800px"]} px={[100, 165]} mt="20" h={610} >
      {isWideScreen && (
        <HStack spacing={220}>
          <Flex as="article" align="center" justify="center" direction="column">
            <Icon as={BiDrink} color="yellow.600" fontSize={85} />
            <Text fontSize={24} fontWeight="semibold" color="gray.600">vida noturna</Text>
          </Flex>
          <Flex as="article" align="center" justify="center" direction="column">
            <Icon as={FaUmbrellaBeach} color="yellow.600" fontSize={85} />
            <Text fontSize={24} fontWeight="semibold" color="gray.600">praia</Text>
          </Flex>
          <Flex as="article" align="center" justify="center" direction="column">
            <Icon as={BiBuildings} color="yellow.600" fontSize={85} />
            <Text fontSize={24} fontWeight="semibold" color="gray.600">moderno</Text>
          </Flex>
          <Flex as="article" align="center" justify="center" direction="column">
            <Icon as={GiGreekTemple} color="yellow.600" fontSize={85} />
            <Text fontSize={24} fontWeight="semibold" color="gray.600">clássico</Text>
          </Flex>
          <Flex as="article" align="center" justify="center" direction="column">
            <Icon as={BiWorld} color="yellow.600" fontSize={85} />
            <Text fontSize={24} fontWeight="semibold" color="gray.600">e mais...</Text>
          </Flex>
        </HStack>
      )}
      {!isWideScreen && (
        <SimpleGrid columns={2} spacing={["20"]} w="100%">
          <Flex as="article" align="center" justify="space=between" direction="row">
            <Icon as={BiDrink} color="yellow.600" fontSize={60} />
            <Text fontSize={20} fontWeight="semibold" color="gray.600">vida noturna</Text>
          </Flex>
          <Flex as="article" align="center" justify="space=between" direction="row">
            <Icon as={FaUmbrellaBeach} color="yellow.600" fontSize={60} />
            <Text fontSize={20} fontWeight="semibold" color="gray.600">praia</Text>
          </Flex>
          <Flex as="article" align="center" justify="space=between" direction="row">
            <Icon as={BiBuildings} color="yellow.600" fontSize={60} />
            <Text fontSize={20} fontWeight="semibold" color="gray.600">moderno</Text>
          </Flex>
          <Flex as="article" align="center" justify="space=between" direction="row">
            <Icon as={GiGreekTemple} color="yellow.600" fontSize={60} />
            <Text fontSize={20} fontWeight="semibold" color="gray.600">clássico</Text>
          </Flex>
          <Flex as="article" align="center" justify="space=between" direction="row">
            <Icon as={BiWorld} color="yellow.600" fontSize={60} />
            <Text fontSize={20} fontWeight="semibold" color="gray.600">e mais...</Text>
          </Flex>
        </SimpleGrid>
      )}
    </Flex>
  );
}