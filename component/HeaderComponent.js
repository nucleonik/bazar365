import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const HeaderComponent = () => {
  return (
    <Flex height="64px" width="100%" align="center">
      <Stack marginLeft="45px">
        <Img cursor="pointer" marginRight="10px" src="menu.svg" alt="menu" />
      </Stack>
      <Stack mr="32px">
        <Img
          cursor="pointer"
          height="64px"
          width="73px"
          src="logo.png"
          alt="logo"
        />
      </Stack>
      <Stack align="center" flexDirection="row" mr="114px">
        <Text mr="16px" cursor="pointer" fontSize="14px" fontWeight="400">
          {' '}
          Home
        </Text>
        <Stack mr="16px" height="7px" width="1px" bg="#8E8E8E"></Stack>
        <Text cursor="pointer" fontSize="14px" fontWeight="400">
          {' '}
          Offer
        </Text>
        <Menu>
          <MenuButton>
            <Img
              cursor="pointer"
              mr="16px"
              mt="3px"
              src="Down.svg"
              alt="downbutton"
            />
          </MenuButton>
          <MenuList ml="-42px">
            <MenuItem
              bg="transparent"
              _hover={{
                background: '#0DB04B',
                color: 'white',
              }}
            >
              Today's Offer
            </MenuItem>
          </MenuList>
        </Menu>
        <Stack mr="16px" height="7px" width="1px" bg="#8E8E8E"></Stack>
        <Text cursor="pointer" fontSize="14px" fontWeight="400">
          {' '}
          BOGO
        </Text>
        <Menu>
          <MenuButton>
            <Img
              cursor="pointer"
              mr="16px"
              mt="3px"
              src="Down.svg"
              alt="downbutton"
            />
          </MenuButton>
          <MenuList ml="-48px">
            <MenuItem
              bg="transparent"
              _hover={{
                background: '#0DB04B',
                color: 'white',
              }}
            >
              Today's BOGO Offer
            </MenuItem>
          </MenuList>
        </Menu>
        <Stack mr="16px" height="7px" width="1px" bg="#8E8E8E"></Stack>
        <Text cursor="pointer" fontSize="14px" fontWeight="400">
          {' '}
          Plastic Free
        </Text>
        <Menu>
          <MenuButton>
            <Img
              cursor="pointer"
              mr="16px"
              mt="3px"
              src="Down.svg"
              alt="downbutton"
            />
          </MenuButton>
          <MenuList ml="-78px">
            <MenuItem
              bg="transparent"
              _hover={{
                background: '#0DB04B',
                color: 'white',
              }}
            >
              Today's Offer
            </MenuItem>
          </MenuList>
        </Menu>
        <Stack ml="32px" height="7px" width="1px" bg="#8E8E8E"></Stack>
      </Stack>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Img pt="4px" src="Search.svg" />
          </InputLeftElement>
          <Input
            height="42px"
            width="316px"
            type="text"
            placeholder="I am Searching for ..."
          />
        </InputGroup>
      </Stack>
      <Stack
        ml="48px"
        align="center"
        flexDirection="row"
        justifyContent="flex-end"
      >
        <Stack>
          <Img cursor="pointer" src="Heart.svg" />
          <Flex
            cursor="pointer"
            justify="center"
            align="center"
            ml="7px"
            mt="-38px"
            bg="green"
            borderRadius="50%"
            height="17px"
            width="17px"
            color="white"
            fontSize="10px"
          >
            4
          </Flex>
        </Stack>
        <Stack
          mr="28px"
          ml="28px"
          height="15px"
          width="1px"
          bg="#8E8E8E"
        ></Stack>
        <Stack>
          <Img cursor="pointer" src="Profile.svg" />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default HeaderComponent;
