import { Text, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import useCopyToClipboard from "./content/copy";
import { MdOutlineContentCopy } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RxCode } from "react-icons/rx";
import { MdOutlineComputer } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";

const BasicUsage = () => {
  const [value, copy] = useCopyToClipboard()
  return (
    <>
      <Box
        fontSize={16}
        top={"30%"}
        left={"50%"}
        right={"50%"}
        bottom={"50%"}
        w={"30%"}
        transform={"translate(-50%, -50%);"}
        position={"absolute"}
        borderRadius={"15px"}
        fontFamily={"Lexend"}
      >
        <Box
          bgColor={"rgba(255, 255, 255, 0.05)"}
          backdropFilter={"saturate(300%) blur(40px)"}
          pl={3}
          fontWeight={"300"}
          borderRadius={"15px"}
          color={"#8f9ba8"}
          w={"100%"}
          h={"400px"}
          overflowY={"scroll"}
        >
          <Text pt={'2%'} m={"2%"} fontWeight={"700"} color={"white"} fontSize={10}>
            GERAL
          </Text>
          <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtnwFGgTJvbqZbCxwmBvSBXlSmbJjWXbHgdFtVhPSVqPqbZlgzdLWhfsJgHNpPgjLSCJK" rel="noreferrer">
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <HiOutlineMail size={20} />
            Enviar Email
          </Text>
          </a>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <MdOutlineContentCopy size={20} />
            <button onClick={() => copy('https://ryanvs.dev/')}>Copiar URL</button>
          </Text>
          <Text
            gap={3}
            m={"2%"}
            fontWeight={"700"}
            color={"white"}
            fontSize={10}
          >
            IR PARA
          </Text>
          <a href="http://localhost:3000/">
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <AiOutlineHome size={20} />
            Home
          </Text>
          </a>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <BiUser size={20} />
            Sobre
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <RxCode size={20} />
            Projetos
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <MdOutlineComputer size={20} />
            Setup
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <MdOutlineComputer size={20} />
            Shop
          </Text>
          <Text
            gap={3}
            display={"flex"}
            m={"2%"}
            fontWeight={"700"}
            color={"white"}
            fontSize={10}
          >
            SEGUIR
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <FaInstagram size={20} />
            Instagram
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <AiFillGithub size={20} />
            Github
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <AiFillLinkedin size={20} />
            Linkedin
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <RxDiscordLogo size={20} />
            Discord
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default BasicUsage;
