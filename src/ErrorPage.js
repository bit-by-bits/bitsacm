import { useRouteError } from "react-router-dom";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <VStack minH="100vh" justify="center" id="error-page">
      <Heading>Oops!</Heading>
      <Text color="red.500">Sorry, an unexpected error has occurred.</Text>
      <VStack>
        <Box as="i">{error.statusText || error.message}</Box>
      </VStack>
    </VStack>
  );
}
