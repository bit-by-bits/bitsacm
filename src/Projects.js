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
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";
import LinkIcon from "./Components/LinkIcon";
import GithubIcon from "./Components/GithubIcon";

function Projects() {
  window.scrollTo(0, 0);
  const [isSmallerThan950] = useMediaQuery("(max-width: 950px)"),
    [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  const main = [
    {
      topic: "Software Development",
      link: "https://litecode.bitsacm.in/",
      github: "https://github.com/bitsacm",
      project: "Litecode",
      data: "LeetCode Premium is one of the best resources for practicing questions and attempting mock interviews. Unfortunately, it is also obscenely expensive! Litecode allows you to discover other BITSians willing to share a LeetCode premium subscription.",
    },
    {
      topic: "Software Development",
      link: "https://github.com/bitsacm/Radar",
      github: "https://github.com/bitsacm/Radar",
      project: "Radar",
      data: "A cross-platform mobile Flutter application, here you can ask for help from nearby strangers anonymously. It was developed keeping in mind the setting of a typical University. However, this can easily be extended to include other scenarios as well.",
    },
    {
      topic: "Software Development",
      link: "https://github.com/bitsacm/ps1data",
      github: "https://github.com/bitsacm/ps1data",
      project: "PS-1 Data",
      data: "Pretty UI to make getting details about PS1 stations easy! Developed and maintained by BITS ACM.",
    },
    {
      topic: "Software Development",
      link: "https://acm-bluff.herokuapp.com/",
      github: "https://github.com/bitsacm/bluff",
      project: "Bluff",
      data: "Open for all, learn as you contribute project for building an online multiplayer game of Bluff maintained by BITS ACM.",
    },
    {
      topic: "Software Development",
      link: "https://github.com/bitsacm/Checkmate2017",
      github: "https://github.com/bitsacm/Checkmate2017",
      project: "CheckMate",
      data: "Checkmate 2017 - A bi-annual event by BITS-ACM",
    },
    {
      topic: "Software Development",
      link: "https://github.com/bitsacm/SMS-18",
      github: "https://github.com/bitsacm/SMS-18",
      project: "SMS",
      data: "Stock Market Simulation 2018 for APOGEE 2018",
    },
  ];

  const projects = [];
  for (let i = 0; i < main.length; i++) {
    projects[i] = (
      <VStack
        p={4}
        spacing={4}
        align="flex-start"
        borderRadius={5}
        border="1px"
        borderColor="#C8C8C8"
        key={i}
      >
        <Badge color="#1FA9CE" bgColor="#E6FAFF">
          {main[i].topic}
        </Badge>
        <Image
          borderRadius="5px"
          src="https://github.com/bitsacm/litecode/blob/master/client/public/poster.png?raw=true"
        />
        <Text fontSize="xl" fontWeight="700" color="#1FA9CE">
          {main[i].project}
        </Text>
        <Text fontSize="sm" colot="#595959">
          {main[i].data}
        </Text>
        <HStack spacing={4}>
          <a target="_blank" rel="noreferrer" href={main[i].github}>
            <HStack cursor="pointer">
              <GithubIcon />
              <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
                GitHub
              </Text>
            </HStack>
          </a>
          <a target="_blank" rel="noreferrer" href={main[i].link}>
            <HStack cursor="pointer">
              <LinkIcon />
              <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
                Website
              </Text>
            </HStack>
          </a>
        </HStack>
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
          head="Projects"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>

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
        {projects}
      </Grid>

      <Footer />
    </Box>
  );
}

export default Projects;
