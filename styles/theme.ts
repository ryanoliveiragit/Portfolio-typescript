import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  principal: {
    100: '#996dff'
  }
}


export const theme = extendTheme({ colors })