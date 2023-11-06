import { Button, Flex, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ProductspecComponent = () => {
  return (
    <div><Text
    lineHeight="42.48px"
    letterSpacing="-1.5px"
    fontSize="34px"
    fontWeight="600"
  >
    Broiler Chicken Drumsticks (± 50gm) 1kg
  </Text>
  <Flex
    justify="center"
    align="center"
    width="80px"
    height="16px"
    bg="#FEEBCB"
    mt="4px"
  >
    <Text fontWeight="700" fontSize="14px">
      80g Plastic
    </Text>
  </Flex>
  <Flex mt="16px" align="center">
    <Text fontSize="40px" fontWeight="700">
      ৳ 130.00
    </Text>
    <Text
      ml="16px"
      fontSize="24px"
      fontWeight="700"
      textDecoration="line-through"
      textDecorationColor="red"
      textDecorationThickness="3px"
      color="#11823B"
    >
      ৳ 150.00
    </Text>
  </Flex>
  <Flex flexDirection="column">
    <Flex>
      <Text width="100px" fontSize="14px" fontWeight="700">
        Stock
      </Text>
      <Text fontSize="14px" fontWeight="700" color="#11823B">
        In stock
      </Text>
    </Flex>
    <Flex>
      <Text width="100px" fontSize="14px" fontWeight="700">
        SKU
      </Text>
      <Text fontSize="14px" fontWeight="400" color="#777777">
        B42312
      </Text>
    </Flex>
    <Flex width="400px" mb="42px">
      <Text width="100px" fontSize="14px" fontWeight="700">
        Categories
      </Text>
      <Flex flexDirection="row" flexWrap="wrap" width="300px">
        <Text
          mr="4px"
          pr="4px"
          mt="4px"
          pl="4px"
          color="#22543D"
          bg="#C6F6D5"
          fontSize="12px"
          fontWeight="700"
          borderRadius="2px"
        >
          CLEANING SUPPLIES
        </Text>{' '}
        <Text
          mr="4px"
          ml="4px"
          mt="4px"
          pr="4px"
          pl="4px"
          color="#22543D"
          bg="#C6F6D5"
          fontSize="12px"
          fontWeight="700"
          borderRadius="2px"
        >
          FLOOR & GLASS CLEANER
        </Text>{' '}
        <Text
          mr="4px"
          mt="4px"
          pr="4px"
          pl="4px"
          color="#22543D"
          bg="#C6F6D5"
          fontSize="12px"
          fontWeight="700"
          borderRadius="2px"
        >
          OFFER
        </Text>{' '}
        <Text
          mr="4px"
          ml="4px"
          pr="4px"
          mt="4px"
          pl="4px"
          color="#22543D"
          bg="#C6F6D5"
          fontSize="12px"
          fontWeight="700"
          borderRadius="2px"
        >
          BOGO
        </Text>
      </Flex>
    </Flex>
  </Flex>
  <Flex mb="25px">
    <Text
      fontSize="14px"
      fontWeight="400"
      lineHeight="14.52px"
      letterSpacing="-1"
    >
      Achieve a sparkling clean and hygenic toilet with Shakti Toilet
      Cleaner.
    </Text>
  </Flex>
  <Stack flexDirection="row">
    <Button
      align="center"
      justify="center"
      leftIcon={<Img src="cart.svg" />}
      bg="#0DB04B"
      borderRadius="4px"
      height="48px"
      width="316px"
      color="white"
      _hover={{
        background: '#0DB84B',
        color: 'teal',
      }}
    >
      Add to Cart
    </Button>
    <Flex
      align="center"
      justify="center"
      alignItems="center"
      justifyContent="center"
      height="48px"
      width="48px"
      bg="#FFFFFF"
      borderRadius="4px"
      _hover={{
        background: '#0DB84B',
        color: 'teal',
      }}
      cursor="pointer"
    >
      <Img align="center" justify="center" src="biheart.svg" />
    </Flex>
    <Flex
      align="center"
      justify="center"
      alignItems="center"
      justifyContent="center"
      height="48px"
      width="48px"
      bg="#FFFFFF"
      borderRadius="4px"
      _hover={{
        background: '#0DB84B',
        color: 'teal',
      }}
      cursor="pointer"
    >
      <Img align="center" justify="center" src="share.svg" />
    </Flex>
  </Stack></div>
  )
}

export default ProductspecComponent