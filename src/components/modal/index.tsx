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
          position={"fixed"}
          display={'flex'}
          alignItems={'flex-start'}
          justifyContent={'center'}
          width={'100%'}
          inset={'0px'}
          padding={'14vh 16px 16px'}
          bgColor={'rgba(0, 0, 0, 0.8)'}
      >
      </Box>
      <Box
          width={'100%'}
          fontSize={14}
          maxWidth={"900px"}
          position={"absolute"}
          borderRadius={"35px"}
          fontFamily={"Lexend"}
        >
          <Box
            background={'rgba(255, 255, 255, 0.062);'}
            backdropFilter={"saturate(300%) blur(25px);"}
            pl={3}
            fontWeight={"300"}
            borderRadius={"5px"}
            color={"gray.400"}
            w={"90%"}
            h={"400px"}
            overflowY={"scroll"}
          >
            <Text
              pt={"2%"}
              m={"1%"}
              fontWeight={"400"}
              color={"white"}
              fontSize={8}
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
                p={1}
                gap={3}
                display={"flex"}
                m={"4% 1%"}
              >
                <HiOutlineMail size={20} />
                Enviar Email
              </Text>
            </a>
            <Text
              className="highlight"
              alignItems={"center"}
              p={1}
              gap={3}
              display={"flex"}
              m={"4% 1%"}
            >
              <MdOutlineContentCopy size={20} />
              <Box onClick={() => copy("https://ryanvs.dev/")}>
                <AlertModal />
              </Box>
            </Text>
            <Text
              gap={3}
              m={"1%"}
              fontWeight={"400"}
              color={"white"}
              fontSize={8}
            >
              IR PARA
            </Text>
            <a href="http://localhost:3000/">
              <Text
                className="highlight"
                p={1}
                gap={3}
                display={"flex"}
                m={"2%"}
              >
                <AiOutlineHome size={20} />
                <Link href="/">Home</Link>
              </Text>
            </a>
            <Text className="highlight" p={1} gap={3} display={"flex"} m={"4% 1%"}>
              <BiUser size={20} />
              <Link href="/sobre">Sobre</Link>
            </Text>
            <Text className="highlight" p={1} gap={3} display={"flex"} m={"4% 1%"}>
              <RxCode size={20} />
              <Link href="/projetos">Projetos</Link>
            </Text>
            <Text className="highlight" p={1} gap={3} display={"flex"} m={"4% 1%"}>
              <MdOutlineComputer size={20} />
              Setup
            </Text>
            <Text
              gap={3}
              display={"flex"}
              m={"1%"}
              fontWeight={"400"}
              color={"white"}
              fontSize={8}
            >
              SEGUIR
            </Text>
            <Text className="highlight" p={1} gap={3} display={"flex"} m={"4% 1%"}>
              <FaInstagram size={20} />
              Instagram
            </Text>
            <Text className="highlight" p={1} gap={3} display={"flex"} m={"4% 1%"}>
              <AiFillGithub size={20} />
              Github
            </Text>
            <Text className="highlight" p={1} gap={3} display={"flex"} m={"4% 1%"}>
              <AiFillLinkedin size={20} />
              Linkedin
            </Text>
            <Text className="highlight" p={1} gap={3} display={"flex"} m={"4% 1%"}>
              <RxDiscordLogo size={20} />
              Discord
            </Text>
          </Box>
        </Box>
    </>
  );
};

export default BasicUsage;
