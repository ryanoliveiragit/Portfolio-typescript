import { Flex, Center, Text, Stack, Box } from "@chakra-ui/react";
import Header from "../components/header";
import { Container } from "../components/layout";
import SmallWithNavigation from "../components/footer";
import { useState, useEffect } from "react";
import BasicUsage from "../components/modal";


export default function Home() {
const [isComponentVisible, setIsComponentVisible] = useState(false);
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key === "c") {
    setIsComponentVisible(true);
  }
  
};
useEffect(() => {
  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  return (
    <>
      <Container>
        <Header />
        <Flex
          fontFamily={"Lexend"}
          height={"75vh"}
          justify-content={"center"}
          w={"100%"}
          bg={"#08070b"}
        >
          <Center w={"100%"} fontSize={43} justify-content={"space-around"}>
            
            <Stack
              alignContent={"center"}
              flexWrap={"wrap"}
              alignItems={"stretch"}
              w={"100%"}
              spacing={3}
              mb={90}
            >
              <Box mb={20}>
              {isComponentVisible && <BasicUsage />}
              </Box>
              <Text
                fontFamily={"Lexend"}
                fontWeight={"500"}
                className="gradient"
              >
                {"Ryan Oliveira"}
              </Text>
              <Text fontSize="md" color={"white"}>
                Front-end Developer | Developer Instructor at viensoft
              </Text>
              <Text fontSize="md" fontWeight={"300"} color={"gray.500"}>
                Um programador, focado em ajudar pessoas que estão iniciando na
                programação.
              </Text>
              <button onClick={setIsComponentVisible} className="buttonHome">
                Pressione <kbd className="kbd">ctrl</kbd>{" "}
                <kbd className="kbd">C</kbd> para iniciar →
              </button>
            </Stack>
          </Center>
        </Flex>
        <SmallWithNavigation />
      </Container>
    </>
  );
}
