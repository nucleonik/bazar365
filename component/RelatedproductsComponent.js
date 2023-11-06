import { Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

import ProductcardComponent from './ProductcardComponent';

const RelatedproductsComponent = () => {
  return (
    <Flex ml="45px" mt="51px" flexDirection="column">
      <Flex flexDirection="row" align="center">
        <Flex>
          <Text fontSize="24px" fontWeight="700" color="#1D1D21">
            Related Products
          </Text>
        </Flex>
        <Flex
          borderRadius="4px"
          cursor="pointer"
          ml="16px"
          height="32px"
          width="32px"
          bg="#DFE3E8"
          _hover={{
            background: 'white',
            color: 'teal.500',
          }}
        >
          <Img src="sideleft.svg" />
        </Flex>
        <Flex
          borderRadius="4px"
          cursor="pointer"
          ml="16px"
          height="32px"
          width="32px"
          bg="#DFE3E8"
          _hover={{
            background: 'white',
            color: 'teal.500',
          }}
        >
          <Img src="sideright.svg" />
        </Flex>
      </Flex>
      <Flex mt="30px">
        <ProductcardComponent />
      </Flex>
    </Flex>
  );
};

export default RelatedproductsComponent;
