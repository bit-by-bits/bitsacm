import React from "react";
import { Link } from "react-router-dom";
import { Image, Flex, HStack, Spacer, useMediaQuery } from "@chakra-ui/react";

function NavBar(props) {
  const [isSmallerThan950] = useMediaQuery("(max-width: 950px)");

  return (
    <Flex px={8} py={4}>
      <Link to={`/`}>
        <Image src="logo-main.svg" />
      </Link>
      <Spacer />

      <HStack
        display={isSmallerThan950 ? "none" : "flex"}
        color={props.text}
        fontSize="sm"
        fontWeight="600"
        spacing={6}
      >
        <Link to={`/projects`}>Projects</Link>
        <Link to={`/events`}>Events</Link>
        <Link to={`/SIGs`}>SIGs</Link>
        <Link to={`/learning`}>Learning</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/members`}>Members</Link>
        <Link to={`/contact`}>Contact</Link>
      </HStack>
    </Flex>
  );
}

export default NavBar;
