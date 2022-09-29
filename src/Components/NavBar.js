import React from "react";
import { Link } from "react-router-dom";
import { Image, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

function NavBar(props) {
  return (
    <Flex px={8} py={4}>
      <Link to={`/`}>
        <Image src="logo-main.svg" />
      </Link>
      <Spacer />

      <HStack color={props.text} fontSize="sm" fontWeight="600" spacing={6}>
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
