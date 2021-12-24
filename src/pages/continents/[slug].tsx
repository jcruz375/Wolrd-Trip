import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ContinentBanner } from "../../components/Continent/ContinenentBanner";
import { ContinentInfo } from "../../components/Continent/ContinentInfo";
import { TopCities } from "../../components/Continent/TopCities";

export default function Contnent() {
  const router = useRouter();
  const {slug} = router.query;

  return (
    <>
      <ContinentBanner title={String(slug)} bannerImage={String(slug)}/>

      <Flex as="main" width={[700, 1240, 1800]} px={[70, 140]} direction="column">
        <ContinentInfo />
        <TopCities />
      </Flex>
    </>
  );
}