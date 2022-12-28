import { Text, Box, Button } from "@chakra-ui/react";
import React from "react";
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
import AlertModal from "./content/alert";
import Link from 'next/link'

type MyAttributes = {
  closemodal: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const BasicUsage: React.FC<MyAttributes> = ({closemodal}) => {
  const [value, copy] = useCopyToClipboard();
  return (
    <>
      <Box
          onClick={closemodal}
          position={"absolute"}
          top={"0%"}
          left={"0%"}
          bottom={"0%"}
          w={"97vw"}
          bgColor={'#00000040'}
      >
      </Box>
      <Box
          left={'29%'}
          top={'15%'}
          padding={'0%'}
          fontSize={16}
          w={"45%"}
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
            color={"gray.500"}
            w={"95%"}
            h={"500px"}
            overflowY={"scroll"}
          >
            <Text
              pt={"2%"}
              m={"2%"}
              fontWeight={"500"}
              color={"white"}
              fontSize={'0.6rem'}
            >
              GERAL
            </Text>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtnwFGgTJvbqZbCxwmBvSBXlSmbJjWXbHgdFtVhPSVqPqbZlgzdLWhfsJgHNpPgjLSCJK"
              rel="noreferrer"
            >
              <Text
                className="highlight"
                p={2}
                gap={3}
                display={"flex"}
                m={"2%"}
              >
                <HiOutlineMail size={20} />
                Enviar Email
              </Text>
            </a>
            <Text
              className="highlight"
              alignItems={"center"}
              p={2}
              gap={3}
              display={"flex"}
              m={"2%"}
            >
              <MdOutlineContentCopy size={20} />
              <Box onClick={() => copy("https://ryanvs.dev/")}>
                <AlertModal />
              </Box>
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
              <Text
                className="highlight"
                p={2}
                gap={3}
                display={"flex"}
                m={"2%"}
              >
                <AiOutlineHome size={20} />
                <Link href="/">Home</Link>
              </Text>
            </a>
            <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
              <BiUser size={20} />
              <Link href="/sobre">Sobre</Link>
            </Text>
            <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
              <RxCode size={20} />
              <Link href="/projetos">Projetos</Link>
            </Text>
            <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
              <MdOutlineComputer size={20} />
              Setup
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
