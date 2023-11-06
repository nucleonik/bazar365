import { Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

const RelateditemsComponent = () => {
  return (
    <div><Flex mt="50px" mb="16px">
    <Text fontSize="24px" fontWeight="700">
      Related Items
    </Text>
  </Flex>
  <Flex>
    <Flex flexDirection="row" align="center">
      <Flex mr="14px">
        <Img height="55px" width="61px" src="item1.png" />
      </Flex>
      <Flex>
        <Flex width="170px" flexDirection="column">
          {' '}
          <Text
            fontFamily="14px"
            fontWeight="400"
            lineHeight="17px"
            letterSpacing="-2"
          >
            Qdol Pokemon Limited Edition Soda
          </Text>
          <Text
            fontSize="10px"
            fontWeight="600px"
            color="#888888"
            letterSpacing="-2%"
            mt="3px"
          >
            250 gm
          </Text>
          <Text
            fontSize="15px"
            fontWeight="700"
            lineHeight="20px"
            letterSpacing="-2%"
          >
            BDT. 144
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex ml="19px">
      <Img
        cursor="pointer"
        height="26px"
        width="26px"
        src="addproduct.png"
      />
    </Flex>
  </Flex>
  <Flex mt='16px'>
    <Flex flexDirection="row" align="center">
      <Flex mr="14px">
        <Img height="55px" width="61px" src="item2.png" />
      </Flex>
      <Flex>
        <Flex width="170px" flexDirection="column">
          {' '}
          <Text
            fontFamily="14px"
            fontWeight="400"
            lineHeight="17px"
            letterSpacing="-2"
          >
            Qdol Pokemon Limited Edition Soda
          </Text>
          <Text
            fontSize="10px"
            fontWeight="600px"
            color="#888888"
            letterSpacing="-2%"
            mt="3px"
          >
            250 gm
          </Text>
          <Text
            fontSize="15px"
            fontWeight="700"
            lineHeight="20px"
            letterSpacing="-2%"
          >
            BDT. 144
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex ml="19px">
      <Img
        cursor="pointer"
        height="26px"
        width="26px"
        src="addproduct.png"
      />
    </Flex>
  </Flex>
  <Flex mt='16px'>
    <Flex flexDirection="row" align="center">
      <Flex mr="14px">
        <Img height="55px" width="61px" src="product.png" />
      </Flex>
      <Flex>
        <Flex width="170px" flexDirection="column">
          {' '}
          <Text
            fontFamily="14px"
            fontWeight="400"
            lineHeight="17px"
            letterSpacing="-2"
          >
            Qdol Pokemon Limited Edition Soda
          </Text>
          <Text
            fontSize="10px"
            fontWeight="600px"
            color="#888888"
            letterSpacing="-2%"
            mt="3px"
          >
            250 gm
          </Text>
          <Text
            fontSize="15px"
            fontWeight="700"
            lineHeight="20px"
            letterSpacing="-2%"
          >
            BDT. 144
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex ml="19px">
      <Img
        cursor="pointer"
        height="26px"
        width="26px"
        src="addproduct.png"
      />
    </Flex>
    
  </Flex>
  <Flex mb='55px' mt='24px'><Img height='200px' width='308px' src='ad.png' /></Flex></div>
  )
}

export default RelateditemsComponent