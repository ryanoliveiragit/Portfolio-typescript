import { Flex, Center, Text, Stack, Box } from "@chakra-ui/react";
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
      <Container>
        <Header />
        <Flex
          fontFamily={"Lexend"}
          alignItems={"center"}
          justify-content={"center"}
          flexDirection={"column"}
          w={"100%"}
          bg={"#08070b"}
        >
          <Center
            pb={"5%"}
            pt={"5%"}
            alignItems={"flex-start"}
            w={"100%"}
            height={"100%"}
            flexDirection={"row"}
            justify-content={"center"}
          >
            <Box boxSize={"sm"} display={"flex"} flexDirection={"column"}>
              <Text className="gradient" fontSize={40}>
                Sobre mim.
              </Text>
              <Image
                boxSize="400px"
                objectFit="cover"
                alt="Ryan Oliveira"
                src="https://cdn.discordapp.com/attachments/695348516918263819/1057103495800553553/b613fb8e-6283-4612-9eb5-9d5eab03a90a.png"
              />
            </Box>
            <Stack
              pt={"3.5%"}
              gap={2}
              flexDirection={"column"}
              marginLeft={"1%"}
              w={"20vw"}
            >
              <Text fontSize={"md"} color={"gray.500"} fontWeight={300}>
                Meu nome é <span>Ryan Oliveira</span> e tenho <span>20</span>{" "}
                anos.
              </Text>
              <Text
                lineHeight={1.7}
                fontSize={"md"}
                color={"gray.500"}
                fontWeight={300}
              >
                Sou programador <span>Front-end</span>, apaixonado por
                tecnologia. Atualmente tenho adquirido <span>experiências</span>{" "}
                desenvolvendo projetos pessoais e tenho{" "}
                <span>conhecimentos</span> em: HTML, CSS,
                JavaScript, TypeScript, Python, ChakraUi, StyledComponent,
                NextJS, ReactJS. <br />
                Conceitos de: <span>SSR, SSG, SPA e SEO</span>
              </Text>

              <Text fontSize={"md"} color={"gray.500"} fontWeight={300}>
                Atualmente estou em busca do meu primeiro desafio profissional
                como programador <span>Front-end</span>
              </Text>
            </Stack>
          </Center>
          <Center
            w={"41vw"}
            pb={"5%"}
            pt={"1%"}
            height={"100%"}
            flexDirection={"column"}
            textAlign={'left'}
            justify-content={"center"}
          >
           <Text textAlign={'left'} color={'gray.600'}><span>Bio: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab unde alias voluptates repellendus doloribus non assumenda cumque, sint laudantium quos molestiae, amet eveniet, quis inventore ad eum minima voluptatem!</Text>
          </Center>
        </Flex>
        <SmallWithNavigation />
      </Container>
    </>
  );
}
