
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#000000',
      '600': '#47585B',
      '400': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA', 
      '00': '#FFFFFF',
    },
    yellow: {
      '600': '#FFBA08',
    },
  },
  fonts: {
    headings: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: { 
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
});