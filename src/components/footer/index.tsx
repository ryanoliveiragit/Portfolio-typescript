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
      color={useColorModeValue('gray.500', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'2xl'}
        py={4}
        direction={{ base: 'column', md: 'colunm' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link target={'_blank'} href={'https://www.linkedin.com/in/ryan-oliveira-169a371a4/'}>linkedin</Link>
          <Link target={'_blank'} href={'https://www.instagram.com/ryan.jsx/'}>Instagram</Link>
          <Link target={'_blank'} href={'https://github.com/ryanoliveiragit'}>github</Link>
          <Link target={'_blank'} href={'https://discord.com/invite/nD3YgMYhre'}>discord</Link>
        </Stack>
      </Container>
    </Box>
  );
}