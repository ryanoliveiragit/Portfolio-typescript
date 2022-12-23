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
          <Link href={'#'}>linkedin</Link>
          <Link href={'#'}>Instagram</Link>
          <Link href={'#'}>github</Link>
          <Link href={'#'}>discord</Link>
        </Stack>
      </Container>
    </Box>
  );
}