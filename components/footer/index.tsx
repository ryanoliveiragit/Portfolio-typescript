import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SmallWithNavigation() {
    return (
      <Box
        bg={useColorModeValue('08070b', 'gray.900')}
        color={useColorModeValue('gray.500', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={9}>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>github</Link>
            <Link href={'#'}>linkedin</Link>
            <Link href={'#'}>rocketseat</Link>
            <Link href={'#'}>twitch</Link>
            <Link href={'#'}>youtube</Link>
            <Link href={'#'}>twitter</Link>
            <Link href={'#'}>tiktok</Link>
            <Link href={'#'}>koo</Link>
          </Stack>
        </Container>
      </Box>
    );
  }