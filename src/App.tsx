import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NumberButton from "./components/NumberButton";
import InputPad from "./components/InputPad";

function App() {
  return (
    <Flex flexDir="column">
      <Box className="result" w="100%" h={200} backgroundColor="red">534,608</Box>
      <InputPad />
    </Flex>
  );
}

export default App;
