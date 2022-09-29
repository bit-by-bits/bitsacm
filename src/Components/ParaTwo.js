import React from "react";
import { Box, Text } from "@chakra-ui/react";

function ParaTwo(props) {
  return (
    <Box>
      <Text fontSize={props.hs} fontWeight="700" color="#606060">
        {props.head}
      </Text>

      <Text mt={3} fontSize={props.bs} fontWeight="500" color="#595959">
        {props.body}
      </Text>
    </Box>
  );
}

export default ParaTwo;
