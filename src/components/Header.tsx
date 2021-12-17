import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w={{base:'600px', md:'24px'}}
      height={{base:'400px', md:'24px'}}
      justifyContent="center"
      align="center"
      p={["10", "8"]}
    >
      <Image src="Logo.svg" alt="Worldtrip" />
    </Flex>
  );
}