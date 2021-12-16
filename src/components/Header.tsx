import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" h="25" justifyContent="center" align="center" p="8">
      <Image src="Logo.svg" alt="Worldtrip" />
    </Flex>
  );
}