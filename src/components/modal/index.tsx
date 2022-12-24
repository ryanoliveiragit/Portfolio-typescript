import {
  Input,
  Flex,
  InputGroup,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const BasicUsage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Flex
        fontFamily={"Lexend"}
        justifyContent={'center'}
      >
        <InputGroup w={'100%'} size="md">
          <Input
            pr="4.5rem"
            color={"white"}
            type={show ? "text" : "text"}
            placeholder="Pesquisar"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {">"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
};

export default BasicUsage;
