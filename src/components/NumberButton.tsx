import { Box, Button, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";

type NumberButtonProps = {
    value: string,
    bg: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const NumberButton = ({value, bg, onClick}: NumberButtonProps) => {
  return (
    <Button
      value={value}
      h={20}
      w={20}
      m={1}
      onClick={onClick}
      bgColor={bg}
      borderRadius="50%"
      justifyContent="center"
      alignItems="center"
    >
    {value}
    </Button>
  );
};

export default NumberButton;
