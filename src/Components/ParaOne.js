import React from "react";
import { Box, Text } from "@chakra-ui/react";

function ParaOne(props) {
  return (
    <Box>
      <Text
        fontSize={props.hs}
        fontWeight="800"
        bgGradient="linear(to-tl, #059FC9 25%, #97D7E8)"
        bgClip="text"
      >
        {props.head}
      </Text>

      <Text mt={3} fontSize={props.bs} fontWeight="500" color="#595959">
        {props.body}
      </Text>
    </Box>
  );
}

export default ParaOne;
