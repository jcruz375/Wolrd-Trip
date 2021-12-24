import { Flex, Icon, Image, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === '/'
  return (
    <Flex
      as="header"
      width={[800, 1240, 1800]}
      height={[126, 100]}
      align="center"
      justify="center"
      p={["10", "8"]}
    >
      {!isHomePage && (
        <Grid
          mx="auto"
          alignItems="center"
          templateColumns="repeat(3, 1fr)"
          justifyContent="center"
        >
          <Link href="/">
            <a>
              <Icon as={BiArrowBack} />
            </a>
          </Link>
          <Image src="Logo.png" alt="Worldtrip" />
        </Grid>
      )}
      {isHomePage && (
        <Image src="Logo.png" alt="Worldtrip" />
      )}
    </Flex>
  );
}