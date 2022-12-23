import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import {theme} from '../../styles/theme'
import '../../styles/GlobalStyles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}