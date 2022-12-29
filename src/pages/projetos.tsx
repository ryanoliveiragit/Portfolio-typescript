/* eslint-disable @next/next/no-img-element */
import { Text, Stack, Flex, Link, Box, SimpleGrid, Center, Container } from "@chakra-ui/react";
import Header from "../components/header";
import SmallWithNavigation from "../components/footer";
import React, { useState, useEffect } from "react";
import { BiCodeCurly } from 'react-icons/bi'

export default function Sobre() {
  const [repositoreis, setRepositories] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ryanoliveiragit/repos")
      .then((response: { json: () => any }) => response.json())
      .then(data => setRepositories(data));
  }, []);
  const Astethic = repositoreis.filter(repositorys => (repositorys.id == '520384346'));
  const Calculadora = repositoreis.filter(repositorys => (repositorys.id == '496807598'));
  const NodeRam = repositoreis.filter(repositorys => (repositorys.id == '532382319'));
  const nlwRocket = repositoreis.filter(repositorys => (repositorys.id == '489555355'));
  const crud = repositoreis.filter(repositorys => (repositorys.id == '536835745'));
  return (
    <>
      <Header />
      <Container>
        <Center display={'column'}>
        <Text
          mt={'5vh'}
          className={"gradient"}
          fontWeight={"700"}
          fontSize={24}
          color={"gray.500"}
        >
          Trabalho, hobby & open source.
        </Text>
          <Text lineHeight={5} fontSize={16} pt={"2%"} color={"gray.500"}>
            Essa página lista os <span>6</span> principais projetos que venho
            desenvolvendo durante a minha jornada como programador.
          </Text>
          </Center>
        <Text mb={'0%'} mt={'13%'} fontSize={14} fontWeight={"600"} color={"gray.100"}>
            Projetos Populares
          </Text>
        <SimpleGrid pb={'25%'} gap={5} columns={2} spacing={2}>
          <Text color={"gray.500"} fontSize={14}>
            {Astethic.map((repository) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Box  h={'100%'} pl={'4%'} borderLeft={'1px solid white'}>
                   <Text className="gradientApiGit" fontSize={16} fontWeight={'700'} color={'White'}><Link target={'_blank'} href={repository.html_url}>{repository.name}</Link></Text>
                   <Text fontSize={'12px'} color={'gray.4500'}>{repository.description}</Text>
                   <Flex>
                   <Box alignItems={'center'} display={'flex'}>
                   <Text color={'blue.200'}>Linguagem</Text> <Text color={'gray.200'}>: {repository.language}</Text>
                   </Box>
                   </Flex>
                </Box>
              );
            })}
          </Text>
          <Text color={"gray.500"} fontSize={14}>
            {Calculadora.map((repository) => {
              return (
                // eslint-disable-next-line react/jsx-key
                 <Box h={'100%'} pl={'4%'} borderLeft={'1px solid white'}>
                   <Text className="gradientApiGit" fontSize={16} fontWeight={'700'} color={'White'}><Link target={'_blank'} href={repository.html_url}>{repository.name}</Link></Text>
                   <Text fontSize={'12px'} color={'gray.4500'}>{repository.description}</Text>
                   <Box alignItems={'center'} display={'flex'}>
                   <Text as={'i'} color={'blue.200'}>Linguagem</Text> <Text color={'gray.200'}>: {repository.language}</Text>
                   </Box>
                </Box>
              );
            })}
          </Text>
          <Text color={"gray.500"} fontSize={14}>
            {crud.map((repository) => {
              return (
                // eslint-disable-next-line react/jsx-key
                 <Box h={'100%'} pl={'4%'} borderLeft={'1px solid white'}>
                   <Text className="gradientApiGit" fontSize={16} fontWeight={'700'} color={'White'}><Link target={'_blank'} href={repository.html_url}>{repository.name}</Link></Text>
                   <Text fontSize={'12px'} color={'gray.4500'}>{repository.description}</Text>
                   <Flex>
                   <Text as={'i'} color={'blue.200'}>Linguagem</Text> <Text color={'gray.200'}>: {repository.language}</Text>
                   </Flex>
                </Box>
              );
            })}
          </Text>
          <Text color={"gray.500"} fontSize={14}>
            {NodeRam.map((repository) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Box  h={'100%'} pl={'4%'} borderLeft={'1px solid white'}>
                   <Text className="gradientApiGit" fontSize={16} fontWeight={'700'} color={'White'}><Link target={'_blank'} href={repository.html_url}>{repository.name}</Link></Text>
                    <Text fontSize={'12px'} color={'gray.4500'}>{repository.description}</Text>
                   <Flex>
                   <Text as={'i'} color={'blue.200'}>Linguagem</Text> <Text color={'gray.200'}>: {repository.language}</Text>
                   </Flex>
                </Box>
              );
            })}
          </Text>
          <Text color={"gray.500"} fontSize={14}>
            {nlwRocket.map((repository) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Box  h={'100%'} pl={'4%'} borderLeft={'1px solid white'}>
                   <Text className="gradientApiGit" fontSize={16} fontWeight={'700'} color={'White'}><Link target={'_blank'} href={repository.html_url}>{repository.name}</Link></Text>
                    <Text fontSize={'12px'} color={'gray.4500'}>{repository.description}</Text>
                   <Flex>
                   <Text as={'i'} color={'blue.200'}>Linguagem</Text> <Text color={'gray.200'}>: {repository.language}</Text>
                   </Flex>
                </Box>
              );
            })}
          </Text>
          <Text color={"gray.500"} fontSize={14}>
            {nlwRocket.map((repository) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Box  h={'100%'} pl={'4%'} borderLeft={'1px solid white'}>
                   <Text className="gradientApiGit" fontSize={16} fontWeight={'700'} color={'White'}><Link target={'_blank'} href={repository.html_url}>{repository.name}</Link></Text>
                    <Text fontSize={'12px'} color={'gray.4500'}>{repository.description}</Text>
                   <Flex>
                   <Text as={'i'} color={'blue.200'}>Linguagem</Text> <Text color={'gray.200'}>: {repository.language}</Text>
                   </Flex>
                </Box>
              );
            })}
          </Text> 
         </SimpleGrid>  
      </Container>
      <SmallWithNavigation />
    </>
  );
}
function then(arg0: (items: any) => void) {
  throw new Error("Function not implemented.");
}
