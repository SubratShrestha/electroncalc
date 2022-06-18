import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import NumberButton from "./NumberButton";

const InputPad: FunctionComponent = () => {
  const values = [
    ["C", "%", "/", "<"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <Flex flexDir="column">
      {values.map((row) => (
        <Flex>
          {row.map((v) => (
            <NumberButton value={v} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

export default InputPad;
