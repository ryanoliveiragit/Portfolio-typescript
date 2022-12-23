import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#e02045',
    800: '#153e75',
    700: '#2a69ac',
  },
  green: {
    900: '#1E1E1E',
    500: '#34D399'
  }
}


export const theme = extendTheme({ colors })