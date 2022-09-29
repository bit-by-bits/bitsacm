import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {
  const heading = `<acm bits pilani />`;
  const text = `a group of nerds and tech enthusiasts who push the limits of software development, artificial intelligence, theoretical computing, design and research.`;

  return (
    <Box p={2} height="100vh" width="100vw" overflow="hidden">
      <Box
        borderRadius="50px"
        height="100%"
        width="100%"
        sx={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.56) -6.73%, rgba(255, 255, 255, 0) 110.02%), #059FC9;",
        }}
      >
        <NavBar text="white" />
        <Flex
        height="80%"

          direction="column"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          <Text
            fontFamily="Arial"
            fontWeight="700"
            fontSize="80px"
            letterSpacing="-4px"
          >
            {heading}
          </Text>
          <Text
          width="50vw"
textAlign='center'
            fontFamily="Manrope"
            fontWeight="600"
            fontSize="26px"
            letterSpacing="-1px"
          >
            {text}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
