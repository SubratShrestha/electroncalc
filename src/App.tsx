import { useState } from "react";
import {
  Flex,
  IconButton,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NumberButton from "./components/NumberButton";
import { create, all } from "mathjs";

/*
 * TODO:
 * [ ] theming
 * [ ] equals button effect
 * [ ] clear effect
 * [ ] readme
 * [ ] release build with electron-forge: https://www.electronjs.org/docs/latest/tutorial/quick-start#package-and-distribute-your-application
 * */

const math = create(all, {});

function App() {
  const [result, setResult] = useState("");
  const { toggleColorMode } = useColorMode();

  // colors
  const bg = useColorModeValue("bgLight", "bgDark");
  const resultColor = useColorModeValue("resultLight", "resultDark");
  const numberBg = useColorModeValue("numberBgLight", "numberBgDark");
  const opBg = useColorModeValue("opLight", "opDark");

  const values = [
    ["C", "(", ")", "<"],
    ["!", "%", "/", "^"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "√", "="],
  ];
  const ops = ["+", "-", "*", "!", "%", "/", ".", "√", "C", "(", ")", "<", "^"];

  const onClickHandler = (v: string) => {
    if (v === "C") setResult(""); // clear
    else if (v === "<") setResult(result.slice(0, -1)); // backspace
    else if (v === "√") setResult(result + "sqrt("); // square root
    // operators can't repeat
    else if (ops.includes(v))
      setResult((prevResult) => {
        if (ops.includes(prevResult[prevResult.length - 1])) return prevResult;
        return prevResult + v;
      });
    else if (v === "=") setResult(math.evaluate(result));
    else setResult(result + v);
  };

  return (
    <Flex flexDir="column" bgColor={bg} h="100vh">
      <Input
        textAlign="right"
        w="100%"
        p={5}
        h={150}
        fontSize={40}
        color={resultColor}
        value={result}
        onChange={(v) => setResult(v.target.value)}
      />
      <IconButton
        position="absolute"
        zIndex={1}
        top={2}
        left={2}
        aria-label="switch theme"
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        h={10}
        w={10}
      />
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        {values.map((row) => (
          <Flex>
            {row.map((v) => (
              <NumberButton
                onClick={() => onClickHandler(v)}
                value={v}
                bg={ops.includes(v) ? opBg : numberBg}
              />
            ))}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default App;
