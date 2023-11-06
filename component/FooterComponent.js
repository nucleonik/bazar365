import { Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

const FooterComponent = () => {
  return (
    <Flex bg="#ECECE8" flexDirection="column">
      <Flex
        flexDirection="row"
        ml="90px"
        mt="30px"
        borderTop="1px"
        borderBottom="1px"
        borderColor="#E1E1E1"
        flexGrow="3"
      >
        <Flex display="flex" mt="80px" flex="1" flexDirection="column">
          <Flex>
            <Text
              width="236px"
              fontSize="12px"
              lineHeight="14px"
              letterSpacing="-3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
          </Flex>
          <Flex mt="20px">
            <Img mr="8px" height="16px" width="16px" src="headphones.svg" />
            <Flex flexDirection="column">
              <Text fontWeight="600" fontSize="10px">
                Hotline 24/7
              </Text>
              <Text fontSize="16px" fontWeight="600">
                (+880) 9643 3009 400
              </Text>
            </Flex>
          </Flex>
          <Flex mt="16px">
            <Img mr="8px" height="16px" width="16px" src="home.svg" />
            <Text width="108px" fontSize="10px" fontWeight="600">
              House 91/C Rd 24 Dhaka 1212 Bangladesh
            </Text>
          </Flex>
          <Flex mt="16px" mb="48px">
            <Img mr="8px" height="16px" width="16px" src="email.svg" />
            <Text width="108px" fontSize="10px" fontWeight="600">
              thinkcrypt.io
            </Text>
          </Flex>
        </Flex>
        <Flex flexGrow="3" mt="54px" display="flex" flex="1">
          <Flex flex="1" flexDirection="column">
            <Text
              mb="26px"
              letterSpacing="-2%"
              fontSize="16px"
              fontWeight="600"
            >
              Useful Links
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              About Us
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Contact
            </Text>
            <Text mb="8px" cursor="pointer" fontSize="10px" fontWeight="500">
              FAQ
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Career
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Policy
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Offer
            </Text>
          </Flex>
          <Flex flex="1" flexDirection="column">
            <Text
              mb="26px"
              letterSpacing="-2%"
              fontSize="16px"
              fontWeight="600"
            >
              Policy
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Terms of Use
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Contact
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Privacy Policy
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Return & Refund
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Reward Redemption
            </Text>
          </Flex>
          <Flex flex="1" flexDirection="column">
            <Text
              mb="26px"
              letterSpacing="-2%"
              fontSize="16px"
              fontWeight="600"
            >
              Account
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              Sign In
            </Text>
            <Text
              _hover={{ color: '#4ABD88' }}
              mb="8px"
              cursor="pointer"
              fontSize="10px"
              fontWeight="500"
            >
              View Cart
            </Text>
            <Text mb="8px" cursor="pointer" fontSize="10px" fontWeight="500">
              My Wishlist
            </Text>
          </Flex>
        </Flex>
        <Flex display="flex" flex="1">
          <Flex mt="52px" mb="26px" flexDirection="column">
            {' '}
            <Text fontSize="14px" fontWeight="600">
              Install App
            </Text>
            <Text mt="26px" width="171px" fontSize="10px" fontWeight="500">
              Download Our App from App Store or Google Play Store
            </Text>
            <Flex mt="22px">
              <Img mr="8px" src="apple.png" />

              <Img src="google.png" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="10px" mb="10px">
        {' '}
        <Text fontSize="10px" fontWeight="500" ml="90px">
          © 2023 ThinkCrypt, All Rights Reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default FooterComponent;
