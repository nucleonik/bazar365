import { Flex, Text } from '@chakra-ui/react';
import React from 'react'

const ProductdescriptionComponent = () => {
  return (
    <Flex ml='45px'>
        <Flex flexDirection='column' >
        <Flex>
        <Flex  flexDirection='column'  mr='24px'>
            <Text fontSize='26px' fontWeight='900'  cursor='pointer'>Details</Text>
            <Flex bg='#11823B' height='3px' width='100%'></Flex>
        </Flex>
        <Flex>
        <Text cursor='pointer' fontSize='28px' fontWeight='600'>More Information</Text>
        </Flex> </Flex>
        <Flex height='1px' width='795px' bg='#DCDCDC'></Flex>
        <Text width='795px' mt='22px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
        </Flex>
    </Flex>
  );
};

export default ProductdescriptionComponent;