import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

import ProductcardComponent from './ProductcardComponent';

const RelatedproductsComponent = () => {
  return (
    <Flex ml='45px' mt='51px' flexDirection='column'>
        <Flex flexDirection='column'>
        <Flex mb='30px'>
            <Text>Related Products</Text>
        </Flex>
        </Flex>
   <Flex>
<ProductcardComponent/>
</Flex> 
    </Flex>
  )
}

export default RelatedproductsComponent