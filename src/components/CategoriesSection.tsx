import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { BiBuildings, BiDrink, BiWorld } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiGreekTemple } from "react-icons/gi";


export function CategoriesSection() {
  return (
    <Flex as="section" mt="20" display="block" ml="auto" mr="auto" h={610} >
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
    </Flex>
  );
}