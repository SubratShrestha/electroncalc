import { Box, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";

const NumberButton: FunctionComponent<{value: string}> = ({ value }) => {
  return (
    <Flex
      h={14}
      w={14}
      borderRadius="50%"
      backgroundColor="red"
      justifyContent="center"
      alignItems="center"
    >
      {value}
    </Flex>
  );
};

export default NumberButton;
