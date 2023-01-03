import { Text, Box, Divider } from "@chakra-ui/react";
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
import Link from "next/link";

type MyAttributes = {
  closemodal: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const BasicUsage: React.FC<MyAttributes> = ({ closemodal }) => {
  const [value, copy] = useCopyToClipboard();
  return (
    <>
      <Box
        onClick={closemodal}
        position={"fixed"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        width={"100%"}
        inset={"0px"}
        padding={"14vh 16px 16px"}
        bgColor={"#0f0d16d1"}
      ></Box>
      <Box
        top={'2%'}
        left={"-0.3rem"}
        width={"100%"}
        fontSize={14}
        maxWidth={"550px"}
        position={"absolute"}
        borderRadius={"35px"}
        fontFamily={"Lexend"}
      >
        <Box
          p={"2%"}
          background={"rgb(10, 10, 10);"}
          backdropFilter={"saturate(300%) blur(25px);"}
          pl={3}
          fontWeight={"300"}
          borderRadius={"5px"}
          color={"gray.400"}
          w={"100%"}
          h={"490px"}
          overflowY={"scroll"}
        >
          <Text p={2} justifyContent={"space-between"} display={"flex"}>
            <Box display={"flex"}>
              <Text fontWeight={"400"} color={"white"} fontSize={8}>
                GERAL
              </Text>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                borderRadius={"5px"}
                fontWeight={"400"}
                color={"white"}
                fontSize={8}
                w={"60px"}
              >
                PRESS
              </Text>
            </Box>
          </Text>
          <Divider w={"98%"} opacity={"10%"} />
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <HiOutlineMail size={20} />
              <Link
                target={"_blank"}
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtnwFGgTJvbqZbCxwmBvSBXlSmbJjWXbHgdFtVhPSVqPqbZlgzdLWhfsJgHNpPgjLSCJK"
              >
                Enviar email
              </Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                E
              </Text>
            </Box>
          </Text>
          <Text
            onClick={() => copy("https://ryanvs.dev/")}
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <AiOutlineHome size={20} />
              <AlertModal />
            </Box>
            <Box display={"block"}>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                w={"55px"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
              >
                Alt + C
              </Text>
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
          <Divider w={"98%"} opacity={"10%"} />
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <AiOutlineHome size={20} />
              <Link href="/">Home</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                H
              </Text>
            </Box>
          </Text>
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <BiUser size={20} />
              <Link href="/sobre">Sobre</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                S
              </Text>
            </Box>
          </Text>
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <MdOutlineComputer size={20} />
              <Link href="/projetos">Projetos</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                P
              </Text>
            </Box>
          </Text>
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <RxCode size={20} />
              <Link href="/contato">Contato</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"55px"}
              >
                Alt + C
              </Text>
            </Box>
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
          <Divider w={"98%"} opacity={"10%"} />
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <FaInstagram size={20} />
              <Link href="/setup">Instagram</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                I
              </Text>
            </Box>
          </Text>
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <AiFillGithub size={20} />
              <Link href="/setup">Github</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                G
              </Text>
            </Box>
          </Text>
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <AiFillLinkedin size={20} />
              <Link href="/setup">Linkedin</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                L
              </Text>
            </Box>
          </Text>
          <Text
            className="highlight"
            justifyContent={"space-between"}
            p={3}
            gap={2}
            display={"flex"}
            m={"1%"}
          >
            <Box gap={2} display={"flex"}>
              <RxDiscordLogo size={20} />
              <Link href="/setup">Discord</Link>
            </Box>
            <Box>
              <Text
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"gray.600"}
                borderRadius={"5px"}
                fontWeight={"500"}
                fontSize={14}
                w={"20px"}
              >
                D
              </Text>
            </Box>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default BasicUsage;
