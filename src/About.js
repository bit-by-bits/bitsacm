import React from "react";
import {
  Box,
  Grid,
  HStack,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Tr,
  Td,
  Text,
  Thead,
} from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";
import ParaTwo from "./Components/ParaTwo";

function About() {
  window.scrollTo(0, 0);

  const head = ["Year", "Competition", "Organising Institute", "Achievement"],
    body = [];
  const title = [],
    data = [];

  for (let a = 0; a < 10; a++) {
    body[a] = {
      year: "2022",
      competition: "IIT Techniche",
      organiser: "Indian Institute of Tech, Bombay",
      achievement: "Winners",
    };
  }

  for (let i = 0; i < 4; i++) {
    title[i] = (
      <Td fontSize="lg" fontWeight="700" color="#1FA9CE" key={i}>
        {head[i]}
      </Td>
    );
  }

  for (let i = 0; i < 10; i++) {
    data[i] = (
      <Tr fontWeight="600" color="#7D7D7D" key={i}>
        <Td> {body[i].year} </Td>
        <Td> {body[i].competition} </Td>
        <Td> {body[i].organiser} </Td>
        <Td> {body[i].achievement} </Td>
      </Tr>
    );
  }

  return (
    <Box px={10} py={3}>
      <NavBar text="black" />
      <Stack spacing={6} maxWidth="60vw" p={4}>
        <ParaOne
          hs="5xl"
          bs="md"
          head="About"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
        <ParaOne
          bs="md"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>

      <HStack p={4} align="stretch" spacing={10}>
        <ParaTwo
          hs="3xl"
          bs="md"
          head="Our Mission"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />

        <ParaTwo
          hs="3xl"
          bs="md"
          head="Partner with Us"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </HStack>

      <Grid
        gap="1rem"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2,1fr)"
      >
        <Image
          width="100%"
          height="100%"
          borderRadius="10px "
          src="https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg="
        />
        <Image
          width="100%"
          height="100%"
          borderRadius="10px "
          src="https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg="
        />
        <Image
          width="100%"
          height="100%"
          borderRadius="10px "
          src="https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg="
        />
        <Image
          width="100%"
          height="100%"
          borderRadius="10px "
          src="https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg="
        />
      </Grid>

      <Stack p={4}>
        <Text
          mt="50px !important"
          mb="20px !important"
          fontSize="3xl"
          fontWeight="700"
          color="#606060"
        >
          Past Achievements
        </Text>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>{title}</Tr>
            </Thead>
            <Tbody>{data}</Tbody>
          </Table>
        </TableContainer>
      </Stack>

      <Footer />
    </Box>
  );
}

export default About;
