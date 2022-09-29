import React from "react";
import {
  Badge,
  Box,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";
import SearchIcon from "./Components/SearchIcon";

function Learning() {
  window.scrollTo(0, 0);

  const main = [],
    box = [];

  for (let a = 0; a < 9; a++) {
    main[a] = {
      topic: "Software Development",
      vertical: "Frontend Development",
      data: "Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris.",
    };
  }

  for (let i = 0; i < 9; i++) {
    box[i] = (
      <VStack
        p={4}
        align="flex-start"
        borderRadius={5}
        border="1px"
        borderColor="#C8C8C8"
        key={i}
      >
        <Badge color="#1FA9CE" bgColor="#E6FAFF">
          {main[i].topic}
        </Badge>
        <Text
          mt="60px !important"
          fontSize="lg"
          fontWeight="700"
          color="#1FA9CE"
        >
          {main[i].vertical}
        </Text>
        <Text fontSize="sm" colot="#595959">
          {main[i].data}
        </Text>
      </VStack>
    );
  }

  return (
    <Box px={10} py={3}>
      <NavBar text="black" />
      <Stack spacing={6} maxWidth="60vw" p={4}>
        <ParaOne
          hs="5xl"
          bs="md"
          head="Learning"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
        <ParaOne
          bs="md"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>

      <Stack>
        <InputGroup my={5} borderRadius="60px" width="30vw" bg="#F5F5F5">
          <InputLeftElement children={<SearchIcon />} />
          <Input
            borderRadius="60px"
            _placeholder={{ fontWeight: "600", color: "#7C7C7C0" }}
            type="text"
            placeholder="Search by Topics or Verticals"
          />
        </InputGroup>

        <Grid
          gap="1rem"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3,1fr)"
        >
          {box}
        </Grid>
      </Stack>
      <Footer />
    </Box>
  );
}

export default Learning;
