import React from "react";
import {
  Badge,
  Box,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";
import LinkIcon from "./Components/LinkIcon";

function openEvent() {
  window.location = `https://icpc.global/`;
}

function Events() {
  window.scrollTo(0, 0);

  const main = [],
    future = [],
    past = [];

  for (let a = 0; a < 9; a++) {
    main[a] = {
      date: "24th July, 2022",
      event: "Hackathon",
      data: "Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris.",
    };
  }

  for (let i = 0; i < 2; i++) {
    future[i] = (
      <VStack
        p={4}
        spacing={4}
        align="flex-start"
        borderRadius={5}
        border="1px"
        borderColor="#C8C8C8"
        key={i}
      >
        <Image
          borderRadius="5px"
          src="https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg="
        />
        <Badge color="#1FA9CE" bgColor="#E6FAFF">
          {main[i].date}
        </Badge>
        <Text fontSize="xl" fontWeight="700" color="#1FA9CE">
          {main[i].event}
        </Text>
        <Text fontSize="sm" colot="#595959">
          {main[i].data}
        </Text>
        <HStack onClick={openEvent} cursor="pointer">
          <LinkIcon />
          <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
            Register Here
          </Text>
        </HStack>
      </VStack>
    );
  }

  for (let i = 0; i < 6; i++) {
    past[i] = (
      <VStack
        p={4}
        spacing={4}
        align="flex-start"
        borderRadius={5}
        border="1px"
        borderColor="#C8C8C8"
        key={i}
      >
        <Image
          borderRadius="5px"
          src="https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg="
        />
        <Badge color="#1FA9CE" bgColor="#E6FAFF">
          {main[i].date}
        </Badge>
        <Text fontSize="xl" fontWeight="700" color="#1FA9CE">
          {main[i].event}
        </Text>
        <Text fontSize="sm" colot="#595959">
          {main[i].data}
        </Text>
        <HStack onClick={openEvent} cursor="pointer">
          <LinkIcon />
          <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
            Register Here
          </Text>
        </HStack>
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
          head="Events"
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
          Upcoming Events
        </Text>

        <Grid
          gap="1rem"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3,1fr)"
        >
          {future}
        </Grid>
      </Stack>

      <Stack>
        <Text
          mt="50px !important"
          mb="20px !important"
          fontSize="3xl"
          fontWeight="700"
          color="#606060"
        >
          Past Events
        </Text>

        <Grid
          gap="1rem"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3,1fr)"
        >
          {past}
        </Grid>
      </Stack>

      <Footer />
    </Box>
  );
}

export default Events;
