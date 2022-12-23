import { Flex, Center, Text, Stack } from "@chakra-ui/react";
import Header from '../components/header'
import { Container } from "../components/layout";
import SmallWithNavigation from '../components/footer'

type Container = {
  children: JSX.Element;
};

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Flex fontFamily={'Lexend'} height={'75vh'} justify-content={'center'} w={"100%"} bg={"#08070b"}>
          <Center w={"100%"} fontSize={43} justify-content={"space-around"}>
            <Stack alignContent={'center'} flexWrap={'wrap'} alignItems={'stretch'} w={'100%'} p={4} spacing={3}>
              <Text fontFamily={'Lexend'} fontWeight={'500'} className="gradient">
                {'Ryan Oliveira'}
              </Text>
              <Text fontSize="md" color={'white'}>
              Front-end Developer | Developer Instructor at Rocketseat
              <Text fontSize="md" fontWeight={'300'} color={'gray.500'}>
              Um programador, focado em ajudar pessoas que estão iniciando na programação.
              </Text>
              </Text>
              <button className="buttonHome">
                Pressione <kbd className="kbd">ctrl</kbd>{" "}
                <kbd className="kbd">K</kbd> para iniciar →
              </button>
            </Stack>
          </Center>
        </Flex>
        <SmallWithNavigation />
      </Container>
    </>
  );
}
