import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { TopCityItem } from "./TopCityItem";

const cities = [
  {
    name: "Londres",
    country: "Reino unido",
    cityImageUrl: "/europe/london.png",
    countryImageUrl: "/europe/utd-kingdom.png"
  },
  {
    name: "Paris",
    country: "França",
    cityImageUrl: "/europe/paris.png",
    countryImageUrl: "/europe/france.png"
  },
  {
    name: "Roma",
    country: "Itália",
    cityImageUrl: "/europe/rome.png",
    countryImageUrl: "/europe/italy.png"
  },
  {
    name: "Praga",
    country: "República Tcheca",
    cityImageUrl: "/europe/praga.png",
    countryImageUrl: "/europe/czech.png"
  },
]

export function TopCities() {
  return (
    <Box width={[700, 1240, 1800]}>
      <Text as="h1" fontSize={36} mt={20} fontWeight="medium" color="gray.600">
        Cidades +100
      </Text>

      <SimpleGrid
        columns={4}
        minChildWidth={[400]}
        spacing={["20"]}
        w="100%"
        mt="40px"
        mb={40}
        px={[130, 0]}
      >
        {cities.map(city => {
          return (
            <TopCityItem
              key={city.name}
              cityName={city.name}
              countryName={city.country}
              cityImage={city.cityImageUrl}
              countryImage={city.countryImageUrl}
            />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}