import {
  Flex,
  Center,
  Text,
  Stack,
  Box,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "../components/header";
import SmallWithNavigation from "../components/footer";
import { useState, useEffect, useRef } from "react";
import BasicUsage from "../components/modal";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
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
  const handleClick = () => {
    onToggle();
    setIsComponentVisible(true);
  };
  const handleClickClose = () => {
    onToggle();
    setIsComponentVisible(false);
  };

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Verifica se o elemento clicado é o mesmo elemento ou um descendente do elemento que você deseja monitorar
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Se não for, chame a função desejada
        console.log("clicked outside");
        setIsComponentVisible(false);
      }
    };

    // Adiciona o manipulador de eventos "click" ao documento
    document.addEventListener("click", handleClick);

    // Retorna uma função de limpeza para remover o manipulador de eventos quando o componente for desmontado
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return (
    <>
      <Header />
      <Container
        display={"flex"}
        flexDirection={"column"}
        min-height={"100vh"}
        position={"relative"}
      >
        <Flex
          fontFamily={"Lexend"}
          minHeight={"75vh"}
          justify-content={"center"}
          w={"100%"}
        >
          <Box mt={"35px"}>
            <Fade
              transition={{ enter: { duration: 0.3 }, exit: { duration: 0.3 } }}
              in={isOpen}
            >
              {isComponentVisible && (
                <BasicUsage closemodal={() => handleClickClose()} />
              )}
            </Fade>
          </Box>
          <Center fontSize={43}>
            <Stack
              alignContent={"center"}
              flexWrap={"wrap"}
              alignItems={"stretch"}
              w={"100%"}
              spacing={3}
            >
              <Text
                fontSize={38}
                fontWeight={"500"}
                className="gradient"
                letterSpacing={-1}
              >
                {"Ryan Oliveira"}
              </Text>
              <Text fontSize="md" color={"white"}>
                Front-end Developer | accessibility and end-user experience.
              </Text>
              <Text fontSize="md" fontWeight={"300"} color={"gray.500"}>
                <Text as={"i"}>
                  For me, everything is a challenge that can be discovered.
                </Text>
              </Text>
              <button onClick={() => handleClick()} className="buttonHome">
                Pressione <kbd className="kbd">ctrl</kbd>{" "}
                <kbd className="kbd">C</kbd> para iniciar →
              </button>
            </Stack>
          </Center>
        </Flex>
      </Container>
      <SmallWithNavigation />
    </>
  );
}
