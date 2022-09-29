import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import GitHub from "./Components/GitHub";
import NavBar from "./Components/NavBar";

function openGitHub() {
  window.location = `https://github.com/bitsacm`;
}

function App() {
  window.scrollTo(0, 0);

  const heading = `<acm bits pilani />`;
  const text = `a group of nerds and tech enthusiasts who push the limits of software development, artificial intelligence, theoretical computing, design and research.`;

  const [isLargerThan1400] = useMediaQuery("(min-width: 1400px)");

  return (
    <Box p={3} height="100vh" width="100vw" overflow="hidden">
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
            fontSize="7xl"
            letterSpacing="-4px"
          >
            {heading}
          </Text>

          <Text
            width={isLargerThan1400 ? "46vw" : "50vw"}
            textAlign="center"
            fontWeight="600"
            fontSize={isLargerThan1400 ? "2xl" : "xl"}
            letterSpacing="-0.5px"
          >
            {text}
          </Text>

          <Button
            onClick={openGitHub}
            cursor="pointer"
            leftIcon={<GitHub />}
            size="sm"
            colorScheme="gray"
            mt={6}
            borderRadius="150px"
          >
            <Text fontWeight="700" fontSize="md" color="#7D7D7D">
              GitHub
            </Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
