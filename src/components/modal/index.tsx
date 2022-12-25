import { Text, Box } from "@chakra-ui/react";
import React from "react";
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
import { AiOutlineSearch } from "react-icons/ai";

const BasicUsage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
        <Text
          display={"flex"}
          gap={3}
          bgColor={"rgba(255, 255, 255, 0.05)"}
          backdropFilter={"saturate(300%) blur(40px)"}
          p={"4%"}
          borderTopRadius={"15px"}
          color={"#8f9ba865"}
        >
          <AiOutlineSearch size={25} /> Digite um comando ou pesquise...
        </Text>
        <Box
          bgColor={"rgba(255, 255, 255, 0.05)"}
          backdropFilter={"saturate(300%) blur(40px)"}
          pl={3}
          fontWeight={"300"}
          borderBottomRadius={"15px"}
          color={"#8f9ba8"}
          w={"100%"}
          h={"400px"}
          overflowY={"scroll"}
        >
          <Text m={"2%"} fontWeight={"700"} color={"white"} fontSize={10}>
            GERAL
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            {" "}
            <HiOutlineMail size={20} />
            Enviar Email
          </Text>
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <MdOutlineContentCopy size={20} />
            Copiar URL
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
          <Text className="highlight" p={2} gap={3} display={"flex"} m={"2%"}>
            <AiOutlineHome size={20} />
            Home
          </Text>
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
