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
        <Flex h={"83vh"} w={"100%"} bg={"#08070b"}>
          <Center w={"100%"} fontSize={43} justify-content={"space-around"}>
            <Stack spacing={2}>
              <Text fontSize="5xl" fontWeight={700} className="gradient">
                Ryan Oliveira
              </Text>
              <Text fontSize="lg" color={'white'}>
              Front-end Developer | @Viensoft.
              <Text fontSize="lg" color={'gray.500'}>
                Um programador sempre buscando mais conhecimentos!
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
