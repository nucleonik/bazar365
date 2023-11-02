import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Marquee from 'react-fast-marquee'

const TopbanComponent = () => {
  return (
    <Flex display='flex' flexDirection='row'>
    <Stack flexDirection='row' align='center' height='28px' width='100%' bg='#4ABD88'>
      <Marquee>
        <Text fontWeight='600' color='white' mr='20px' justifyContent='center' alignContent='center' fontSize='12px'>Free shipping on order value more than BDT. 2000 </Text> 
        <Text fontWeight='600' color='white' mr='20px' justifyContent='center' alignItems='dircenter' fontSize='12px'>Return Plastic to Get Reward Points</Text>  
        <Text fontWeight='600' color='white' mr='20px' justifyContent='center' alignItems='center' fontSize='12px'>Get Same Day Delivery</Text>
        <Text fontWeight='600' color='white' mr='20px' justifyContent='center' alignContent='center' fontSize='12px'>Free shipping on order value more than BDT. 2000 </Text> 
        <Text fontWeight='600' color='white' mr='20px' justifyContent='center' alignItems='center' fontSize='12px'>Get Same Day Delivery</Text>
        </Marquee>
        </Stack>
    <Stack bg='red' flexDirection='row' height='28px' bg='#4ABD88' align='center'>
        <Text cursor='pointer' align='center'  width='50px' fontWeight='600' color='white'  justifyContent='center' alignItems='center' fontSize='10px'>Find Us</Text>
        <Stack   height='7px' width='1px' bg='white'></Stack>
        <Text cursor='pointer' align='center'  width='40px' fontWeight='600' color='white'  justifyContent='center' alignItems='center' fontSize='10px'>Help</Text>
        <Stack   height='7px' width='1px' bg='white'></Stack>
        <Text mr='24px' cursor='pointer' align='center'  width='50px' fontWeight='600' color='white'  justifyContent='center' alignItems='center' fontSize='10px'>Contact Us</Text>
    </Stack>
    </Flex>
  )
}

export default TopbanComponent