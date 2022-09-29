import React from "react";
import {
  Avatar,
  Box,
  Grid,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";

function Members() {
  window.scrollTo(0, 0);

  const main = [],
    batchOne = [],
    batchTwo = [];

  for (let a = 0; a < 12; a++) {
    main[a] = {
      name: "Parth Sharma",
      role: "Vice-Chairperson",
      avatar: "avatar.png",
    };
  }

  for (let i = 0; i < 12; i++) {
    batchOne[i] = (
      <HStack
        key={i}
        py={3}
        px={6}
        borderRadius="lg"
        border="1px"
        borderColor="#C8C8C8"
      >
        <Avatar name={main[i].name} src={main[i].avatar} />
        <VStack spacing="-4px" align="flex-start">
          <Text fontSize="lg" fontWeight="700" color="#656565">
            {main[i].name}
          </Text>
          <Text fontSize="sm" color="#949494">
            {main[i].role}
          </Text>
        </VStack>
      </HStack>
    );
  }

  for (let i = 0; i < 12; i++) {
    batchTwo[i] = (
      <HStack
        key={i}
        py={3}
        px={6}
        borderRadius="lg"
        border="1px"
        borderColor="#C8C8C8"
      >
        <Avatar name={main[i].name} src={main[i].avatar} />
        <VStack spacing="-4px" align="flex-start">
          <Text fontSize="lg" fontWeight="700" color="#656565">
            {main[i].name}
          </Text>
          <Text fontSize="sm" color="#949494">
            {main[i].role}
          </Text>
        </VStack>
      </HStack>
    );
  }

  return (
    <Box px={10} py={3}>
      <NavBar text="black" />
      <Stack spacing={6} maxWidth="60vw" p={4}>
        <ParaOne
          hs="5xl"
          bs="md"
          head="Members and Alumni"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>

      <Stack>
        <Text
          mt="50px !important"
          mb="20px !important"
          fontSize="3xl"
          fontWeight="700"
          color="#606060"
        >
          Batch of 2020
        </Text>
        <Grid
          gap="1rem"
          maxW="80vw"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(3,1fr)"
        >
          {batchOne}
        </Grid>

        <Text
          mt="50px !important"
          mb="20px !important"
          fontSize="3xl"
          fontWeight="700"
          color="#606060"
        >
          Batch of 2019
        </Text>
        <Grid
          gap="1rem"
          maxW="80vw"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(3,1fr)"
        >
          {batchTwo}
        </Grid>
      </Stack>

      <Footer />
    </Box>
  );
}

export default Members;
