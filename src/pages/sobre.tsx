/* eslint-disable @next/next/no-img-element */
import {
  CardBody,
  Heading,
  Text,
  Stack,
  CardFooter,
  Flex,
  Card,
  Grid,
  Box,
} from "@chakra-ui/react";
import Header from "../components/header";
import { Container } from "../components/layout";
import SmallWithNavigation from "../components/footer";
import { Image } from "@chakra-ui/react";

export default function Sobre() {
  const idade: React.CSSProperties = {
    backgroundColor: "#f3f3f3",
    fontSize: "2.5rem",
    padding: "0.5rem",
    borderRadius: "100%",
  };

  return (
    <>
      <Header />
      <Container>
        <Text
          alignItems={"left"}
          className={"gradientMobile"}
          fontWeight={"700"}
          fontSize={24}
          color={"gray.500"}
        >
          sobre mim.
        </Text>
        <img src="https://cdn.discordapp.com/attachments/695348516918263819/1057103495800553553/b613fb8e-6283-4612-9eb5-9d5eab03a90a.png" alt="" />
        <div className="photo">

          <Stack gap={4}>
            <Text lineHeight={5} fontSize={14} pt={'2%'} color={"gray.500"}>
              Atualmente tenho adquirido <span>experiências</span> desenvolvendo
              projetos pessoais e tenho <br /> <span>conhecimentos</span> em: HTML,
              CSS, JavaScript, TypeScript, Python, ChakraUi, StyledComponent,
              NextJS, ReactJS.
            </Text>
          </Stack>
        </div>
        <div className="photo">
          <Stack>
            <Text fontSize={24} fontWeight={"600"} color={"gray.100"}>
              Bio
            </Text>
            <Text color={"gray.500"} fontSize={14}>
              Me chamo João, mas pode me chamar de Biro.
            </Text>
            <Text fontSize={24} fontWeight={"600"} color={"gray.100"}>
              Carreira
            </Text>
            <Text fontWeight={"600"} color={"gray.100"} fontSize={14}>
              Developer
            </Text>
            <Text color={"gray.500"} fontSize={14} fontWeight={"400"}>
              Rocketseat • Rio do Sul, SC <br />
              set 2019 – Momento • 3 anos 3 meses
            </Text>
            <Text fontWeight={"600"} fontSize={14} color={"gray.100"}>
              N1 Support
            </Text>
            <Text color={"gray.500"} fontSize={14} fontWeight={"400"}>
              Helpfor • Bebedouro, SP nov 2017 <br />
              set 2019 • 1 ano 10 meses
            </Text>
          </Stack>
        </div>
      </Container>
      <SmallWithNavigation />
    </>
  );
}
