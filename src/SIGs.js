import React from "react";
import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ParaOne from "./Components/ParaOne";
import ParaTwo from "./Components/ParaTwo";

function SIGs() {
  window.scrollTo(0, 0);
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box px={10} py={3}>
      <NavBar text="black" />
      <Stack spacing={6} maxWidth={isSmallerThan600 ? "86vw" : "65vw"} p={4}>
        <ParaOne
          hs={isSmallerThan600 ? "3xl" : "5xl"}
          bs={isSmallerThan600 ? "sm" : "md"}
          head="Special Interest Groups"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />

        <ParaTwo
          hs={isSmallerThan600 ? "2xl" : "3xl"}
          bs={isSmallerThan600 ? "sm" : "md"}
          head="Software Developement"
          body="Pariatur do nisi consectetur quis do culpa laborum voluptate ad consequat nostrud fugiat labore mollit. Sit esse dolor occaecat reprehenderit laboris. Aute in fugiat magna eu dolore Lorem dolore tempor velit dolor culpa commodo. Officia pariatur aute deserunt Lorem commodo voluptate adipisicin."
        />
      </Stack>
      <Footer />
    </Box>
  );
}

export default SIGs;
