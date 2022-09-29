import React from "react";
import { Link } from "react-router-dom";
import { Image, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

function NavBar(props) {
  return (
    <Flex px={8} py={4}>
      <Image src="logo-main.svg" />
      <Spacer />
      <HStack spacing={6}>
        <Text
          fontSize="sm"
          fontWeight="600"
          fontFamily="Manrope"
          color={props.text}
        >
          <Link to={`/projects`}>Projects</Link>
        </Text>
        <Text
          fontSize="sm"
          fontWeight="600"
          fontFamily="Manrope"
          color={props.text}
        >
          <Link to={`/events`}>Events</Link>
        </Text>
        <Text
          fontSize="sm"
          fontWeight="600"
          fontFamily="Manrope"
          color={props.text}
        >
          <Link to={`/SIGs`}>SIGs</Link>
        </Text>
        <Text
          fontSize="sm"
          fontWeight="600"
          fontFamily="Manrope"
          color={props.text}
        >
          <Link to={`/learning`}>Learning</Link>
        </Text>
        <Text
          fontSize="sm"
          fontWeight="600"
          fontFamily="Manrope"
          color={props.text}
        >
          <Link to={`/about`}>About</Link>
        </Text>
        <Text
          fontSize="sm"
          fontWeight="600"
          fontFamily="Manrope"
          color={props.text}
        >
          <Link to={`/members`}>Members</Link>
        </Text>
        <Text
          fontSize="sm"
          fontWeight="600"
          fontFamily="Manrope"
          color={props.text}
        >
          <Link to={`/contact`}>Contact</Link>
        </Text>
      </HStack>
    </Flex>
  );
}

export default NavBar;
