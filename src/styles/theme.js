import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export { colors } from './colors'

export const theme = extendTheme({
  colors: {
    brand: colors
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Inter'
      }
    }
  }
})