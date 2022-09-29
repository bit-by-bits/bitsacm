import {
  HStack,
  VStack,
  Image,
  Flex,
  Spacer,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");

  return (
    <VStack mt={20}>
      <Flex width={isLargerThan1100 ? "86vw" : "92vw"}>
        <Image src="logoBig.svg" />
        <Spacer />

        <HStack spacing={10} color="#606060" align="stretch">
          <VStack align="flex-start">
            <Text fontWeight="700">General</Text>
            <Link to={`/`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/members`}>Members</Link>
            <Link to={`/contact`}>Contact</Link>
          </VStack>

          <VStack align="flex-start">
            <Text fontWeight="700">Resources</Text>
            <Link to={`/events`}>Events</Link>
            <Link to={`/projects`}>Projects</Link>
            <Link to={`/SIGs`}>SIGs</Link>
            <Link to={`/about`}>Partner with us</Link>
          </VStack>

          <VStack align="flex-start">
            <Text fontWeight="700">Open Source</Text>
            <Link to={`/opensource`}>Events</Link>
            <Link to={`/recruitments`}>Recruitments</Link>
          </VStack>
        </HStack>
      </Flex>

      <HStack mt="60px !important" fontSize="16px" fontWeight="700">
        <Text color="#969696">built with</Text>
        <Text color="red">❤</Text>
        <Text color="#969696">by</Text>
        <Text color="#059FC9">acm bits pilani</Text>
        <Text color="#969696">, 2022</Text>
      </HStack>
    </VStack>
  );
}

export default Footer;
