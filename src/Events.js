import React from "react";
import {
  Badge,
  Box,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";
import LinkIcon from "./Components/LinkIcon";
import { Link } from "react-router-dom";

function Events() {
  window.scrollTo(0, 0);
  const [isSmallerThan950] = useMediaQuery("(max-width: 950px)"),
    [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  const main = [
    {
      date: "Not Decided",
      // link: "http://localhost:3000/recruitments",
      event: "2022 Recruitment",
      data: "Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris.",
    },
  ];

  const future = [],
    past = [];

  const future_index = 1;
  for (let i = 0; i < future_index; i++) {
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
        <Link to={`/recruitments`}>
          <HStack cursor="pointer">
            <LinkIcon />
            <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
              Register Here
            </Text>
          </HStack>
        </Link>
      </VStack>
    );
  }

  for (let i = future_index; i < main.length - future_index; i++) {
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
        <Link to={`/recruitments`}>
          <HStack cursor="pointer">
            <LinkIcon />
            <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
              Register Here
            </Text>
          </HStack>
        </Link>
      </VStack>
    );
  }

  return (
    <Box px={10} py={3}>
      <NavBar text="black" />
      <Stack spacing={6} maxWidth={isSmallerThan600 ? "86vw" : "65vw"} p={4}>
        <ParaOne
          hs={isSmallerThan600 ? "3xl" : "5xl"}
          bs={isSmallerThan600 ? "sm" : "md"}
          head="Events"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>

      <Stack>
        <Text
          mt="50px !important"
          mb="20px !important"
          fontSize={isSmallerThan600 ? "2xl" : "3xl"}
          fontWeight="700"
          color="#606060"
        >
          Upcoming Events
        </Text>

        <Grid
          gap="1rem"
          templateRows={
            isSmallerThan950
              ? isSmallerThan600
                ? "repeat(1, 1fr)"
                : "repeat(1, 1fr)"
              : "repeat(1, 1fr)"
          }
          templateColumns={
            isSmallerThan950
              ? isSmallerThan600
                ? "repeat(1, 1fr)"
                : "repeat(2, 1fr)"
              : "repeat(3, 1fr)"
          }
        >
          {future}
        </Grid>
      </Stack>

      <Stack>
        <Text
          mt="50px !important"
          mb="20px !important"
          fontSize={isSmallerThan600 ? "2xl" : "3xl"}
          fontWeight="700"
          color="#606060"
        >
          Past Events
        </Text>

        <Grid
          gap="1rem"
          templateRows={
            isSmallerThan950
              ? isSmallerThan600
                ? "repeat(6, 1fr)"
                : "repeat(3, 1fr)"
              : "repeat(2, 1fr)"
          }
          templateColumns={
            isSmallerThan950
              ? isSmallerThan600
                ? "repeat(1, 1fr)"
                : "repeat(2, 1fr)"
              : "repeat(3, 1fr)"
          }
        >
          {past}
        </Grid>
      </Stack>

      <Footer />
    </Box>
  );
}

export default Events;
