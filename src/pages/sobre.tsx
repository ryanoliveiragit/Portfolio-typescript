/* eslint-disable @next/next/no-img-element */
import { Text, Stack, Container, Box } from "@chakra-ui/react";
import Header from "../components/header";
import React, { useEffect, useState } from "react";
import SmallWithNavigation from "../components/footer";
import useCopyToClipboard from "../components/modal/content/copy";
import { NextSeo } from "next-seo";
import { bio } from '../utils/bio'

export default function Sobre() {
  const [value, copy] = useCopyToClipboard();

  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "c") {
      setIsComponentVisible(true);
    }
  };

  const shortcutsHand = (event: KeyboardEvent) => {
    if (event.altKey && event.key === "c") {
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
    if (event.altKey && event.key == "s") {
      window.location.href = "/setup";
    }
    if (event.key == "i") {
      window.open("https://www.instagram.com/ryan.jsx/");
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
  return (
    <>
    <NextSeo 
    title="Sobre - Ryan Oliveira Brito - Front-end Developer"
    description={bio}
    canonical='https://www.ryanvs.dev/'
    />
      <Header />
      <Container mb={'2%'} mt={"2%"}>
        <Text
          alignItems={"left"}
          className={"gradientMobile"}
          fontWeight={"700"}
          fontSize={24}
          color={"gray.500"}
        >
          sobre mim.
        </Text>
        <Box className="fleximg" w={"100%"}>
          <img
            src="https://cdn.discordapp.com/attachments/695348516918263819/1057103495800553553/b613fb8e-6283-4612-9eb5-9d5eab03a90a.png"
            alt=""
          />
          <Stack>
            <Text
            className="flextxt"
              lineHeight={5}
              fontSize={14}
              color={"gray.500"}
            >
              <span>Olá,</span> Meu nome é Ryan Oliveira e tenho <span>20</span> anos. <br />
            </Text>
            <Text
            className="flextxt"
              lineHeight={5}
              fontSize={14}
              color={"gray.500"}
            >
              Atualmente tenho adquirido <span>experiências</span> com estudos e
              desenvolvendo projetos pessoais
            </Text>
            <Text lineHeight={5}
            className="flextxt"
              fontSize={14}
              color={"gray.500"}>
              <span>conhecimentos</span> em: HTML, CSS, JavaScript, TypeScript,
              Python, ChakraUi, StyledComponent, NextJS, ReactJS.
            </Text>
            <Text lineHeight={5}
            className="flextxt"
              fontSize={14}
              color={"gray.500"}>
              <span>Conceitos de:</span> SSR, SSG, SPA e SEO.
            </Text>
          </Stack>
        </Box>
        <div className="photo">
          <Stack>
            <Text mt={'0.5%'} fontSize={24} fontWeight={"600"} color={"gray.100"}>
              Bio
            </Text>
            <Text color={"gray.500"} fontSize={14}>
              sou apaixonado por programação e gosto de me aprofundar em
              assuntos variados para entender o motivo das coisas funcionarem.
              Sempre curioso e interessado em aprender mais, busco aprimorar
              minhas habilidades e conhecimentos constantemente. Atualmente,
              estou em busca da minha primeira oportunidade como desenvolvedor
              front-end e estou ansioso para começar a minha carreira nesta área
              tão desafiadora e gratificante. Acredito que meu espírito curioso
              e dedicação ao aprendizado constante me ajudarão a enfrentar
              qualquer desafio que possa surgir no caminho.
            </Text>
            <Text fontSize={24} fontWeight={"600"} color={"gray.100"}>
              Carreira
            </Text>
            <Text fontWeight={"600"} color={"gray.100"} fontSize={14}>
              Freelancer front-end
            </Text>
            <Text color={"gray.500"} fontSize={14} fontWeight={"400"}>
              <a
                href="https://www.viensoft.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <u>Viensoft</u>
              </a>{" "}
              • Remoto, SC jan 2022
              <br />
              jan 2022 – Momento
            </Text>
            <Text fontWeight={"600"} fontSize={14} color={"gray.100"}>
              N1 Support
            </Text>
            <Text color={"gray.500"} fontSize={14} fontWeight={"400"}>
              <a
                href="https://www.mutant.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <u>Mutant</u>
              </a>{" "}
              • Barra-funda, SP nov 2017 <br />
              sep 2022 – Momento
            </Text>
          </Stack>
        </div>
      </Container>
      <SmallWithNavigation />
    </>
  );
}
