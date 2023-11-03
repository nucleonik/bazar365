import { Button, Flex, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import RelateditemsComponent from './RelateditemsComponent';
import ProductspecComponent from './ProductspecComponent';
import ProductdescriptionComponent from './ProductdescriptionComponent';
import RelatedproductsComponent from './RelatedproductsComponent';
import ProductcardComponent from './ProductcardComponent';

const ProductComponent = () => {
  return (
    <Flex
    display="flex"
      flexWrap="row"
      flexDirection="column"
      bg="#F3F3EF"
      height="100%">
    <Flex
      display="flex"
      flexWrap="row"
      flexDirection="row"
      bg="#F3F3EF"
      height="100%"
    >
      <Flex mt="50px" ml="70px" display="flex" flex="1" mr="45px">
        <Img zIndex="20" mr="-70px" height="65px" width="65px" src="off.png" />
        <Img height="322px" width="331px" src="Product.png" />
        <Img
          ml="-190px"
          mt="250px"
          height="118px"
          width="157px"
          src="sale.png"
        />
      </Flex>
      <Flex
        display="flex"
        flex="1"
        flexDirection="column"
        width="410px"
        mt="50px"
        mr="45px"
      >
        <ProductspecComponent/>
      </Flex>
      <Flex display="flex" flex="1" ml="45px" flexDirection="column">
        {' '}
        <RelateditemsComponent/>
      </Flex>
      
    </Flex>
    <Flex>
      <ProductdescriptionComponent/>
    </Flex>
    <Flex>
     <RelatedproductsComponent/>
     
    </Flex>
    
    
    </Flex>
  );
};

export default ProductComponent;
