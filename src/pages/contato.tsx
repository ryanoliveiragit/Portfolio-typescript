/* eslint-disable @next/next/no-img-element */
import { Text, Stack, Flex, Container } from "@chakra-ui/react";
import Header from "../components/header";
import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RxCode } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import SmallWithNavigation from "../components/footer";
import useCopyToClipboard from "../components/modal/content/copy";

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
      <Header />
      <Container mt={'13%'} mb={'35vh'}>
        <Text
          alignItems={"left"}
          className={"gradientMobile"}
          fontWeight={"700"}
          fontSize={24}
          color={"gray.500"}
        >
          contato:
        </Text>
        <div className="photo">
          <Stack gap={4}>
            <Text lineHeight={5} fontSize={14} pt={"2%"} color={"gray.500"}>
              Voce pode encontra em contato comigo <span>por:</span>
            </Text>
          </Stack>
        </div>
        <div className="photo">
          <Stack>
            <Text fontSize={14} m={'2% 0%'} fontWeight={"600"} color={"gray.100"}>
              Redes sociais
            </Text>
            <Flex mt={'2%'} gap={4}>
            <AiFillLinkedin fill="white" size={25} />
            <FaInstagram fill="white" size={25} />
            <AiFillGithub fill="white" size={25} />
            <RxDiscordLogo color="white" size={25} />
            <FaWhatsapp fill="white" size={25} />
            <TfiEmail fill="white" size={23} />
            </Flex>
            <Text marginTop={'4%'} fontWeight={"600"} color={"gray.100"} fontSize={14}>
              Localização
            </Text>
            <Text color={"gray.500"} fontSize={14} fontWeight={"400"}>
              <a
                href="https://www.viensoft.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <u>Suzano</u>
              </a>{" "}
              • São Paulo, Brasil.
            </Text>
          </Stack>
        </div>
      </Container>
      <SmallWithNavigation />
    </>
  );
}
