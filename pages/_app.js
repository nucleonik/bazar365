import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Slider from 'react-slick'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
  <Component {...pageProps} /> <Slider/>
  </ChakraProvider>
}
export default MyApp