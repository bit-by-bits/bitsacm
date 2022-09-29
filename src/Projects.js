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
import GithubIcon from "./Components/GithubIcon";

function openGitHub() {
  window.location = `https://github.com/bitsacm`;
}

function openLiteCode() {
  window.location = `https://litecode.bitsacm.in/`;
}

function Projects() {
  window.scrollTo(0, 0);

  const main = [],
    projects = [];

  for (let a = 0; a < 9; a++) {
    main[a] = {
      topic: "Software Development",
      project: "Litecode",
      data: "Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris.",
    };
  }

  for (let i = 0; i < 6; i++) {
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
          <HStack cursor="pointer" onClick={openGitHub}>
            <GithubIcon />
            <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
              GitHub
            </Text>
          </HStack>
          <HStack cursor="pointer" onClick={openLiteCode}>
            <LinkIcon />
            <Text fontSize="sm" fontWeight="700" color="#7D7D7D">
              Visit Link
            </Text>
          </HStack>
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
          head="Projects"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>

      <Grid
        gap="1rem"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3,1fr)"
      >
        {projects}
      </Grid>

      <Footer />
    </Box>
  );
}

export default Projects;
