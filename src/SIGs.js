import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";
import ParaTwo from "./Components/ParaTwo";

function SIGs() {
  window.scrollTo(0, 0);

  return (
    <Box px={10} py={3}>
      <NavBar text="black" />
      <Stack spacing={6} maxWidth="60vw" p={4}>
        <ParaOne
          hs="5xl"
          bs="md"
          head="Special Interest Groups"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />

        <ParaTwo
          hs="3xl"
          bs="md"
          head="Software Developement"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>
      <Footer />
    </Box>
  );
}

export default SIGs;
