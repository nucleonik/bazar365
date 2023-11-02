import { Flex, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const TopbreadcrumComponent = () => {
  return (
    <Flex width="100%" bg="#F3F3EF">
      <Stack
        ml="45px"
        mt="32px"
        flexDirection="row"
        justify="center"
        align="center"
      >
        <Text cursor="pointer" fontSize="16px" fontWeight="400">
          Home
        </Text>
        <Img src="Sidearrow.svg" />
        <Text cursor="pointer" fontSize="16px" fontWeight="400">
          Products
        </Text>
        <Img src="Sidearrow.svg" />
        <Text cursor="pointer" fontSize="16px" fontWeight="400">
          Chicken
        </Text>
        <Img src="Sidearrow.svg" />
        <Text cursor="pointer" fontSize="16px" fontWeight="400" color="#11823B">
          Broiler Chicken Drumsticks (± 50gm) 1kg
        </Text>
      </Stack>
    </Flex>
  );
};

export default TopbreadcrumComponent;
