import { NextSeo } from "next-seo";

import {
  Flex,
  Center,
  Text,
  Stack,
  Box,
  Container,
  useDisclosure,
  theme,
} from "@chakra-ui/react";
import Header from "../components/header";
import SmallWithNavigation from "../components/footer";
import { useState, useEffect, useRef } from "react";
import BasicUsage from "../components/modal";
import { Fade } from "@chakra-ui/react";
import useCopyToClipboard from "../components/modal/content/copy";
import { bio } from "../utils/bio";
import { text } from "stream/consumers";

export default function Home() {
  const [value, copy] = useCopyToClipboard();
  const { isOpen, onToggle } = useDisclosure();
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "c") {
      setIsComponentVisible(true);
      onToggle();
    }
  };
  const shortcutsHand = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "x") {
      copy("www.ryanvs.dev/");
    }
    if (event.key == "e") {
      window.open(
        "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqVmWVnQJqKwjHbgqBKcjWVwtgZwfDkfdQMXLXsbgWCRgBSfVfnLRSZVPSfdXnsmMmkL"
      );
    }
    if (event.key == "h") {
      window.location.href = "/";
    }
    if (event.key == "s") {
      window.location.href = "/sobre";
    }
    if (event.key == "p") {
      window.location.href = "/projetos";
    }
    if (event.altKey && event.key == "c") {
      window.location.href = "/contato";
    }
    if (event.key == "i") {
      window.open("https://www.instagram.com/ryanvs.dev/");
    }
    if (event.key == "g") {
      window.open("https://github.com/ryanoliveiragit");
    }
    if (event.key == "l") {
      window.open("https://www.linkedin.com/in/ryan-oliveira-169a371a4/");
    }
    if (event.key == "d") {
      window.open("https://discord.gg/nD3YgMYhre");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", shortcutsHand);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.addEventListener("keydown", shortcutsHand);
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <NextSeo
        title="Ryan Oliveira Brito - Front-end Developer"
        description={bio}
        canonical="https://www.ryanvs.dev/"
        openGraph={{
          url: "https://www.ryanvs.dev/",
          title: "Ryan Oliveira Brito - Front-end Developer",
          description: `${bio}`,
          site_name: "Ryan Oliveira Brito - Front-end Developer",
        }}
      />
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
            {isComponentVisible && (
              <BasicUsage closemodal={() => handleClickClose()} />
            )}
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
                color={"principal.100"}
                letterSpacing={-1}
                textShadow={"5px 5px 100px #673fc5;"}
              >
                {"Ryan Oliveira"}
              </Text>
              <Text fontSize="md" color={"white"}>
                {bio}
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
