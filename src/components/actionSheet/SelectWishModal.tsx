/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, HStack, Modal, Pressable, Text, VStack} from 'native-base';
import {wp} from '@theme/ScreenDimensions';
import {MessageIcon} from 'src/NativeBaseIcon';
import Colors from '@theme/colors';
import useNavigate from '@hooks/useNavigate';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  item?: any;
}

export default function SelectWishModal({isOpen, onClose}: IProps) {
  // hooks
  const navigate = useNavigate();
  //  formik
  const handelEditNav = () => {
    navigate('updateWishes');
    onClose();
  };

  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={onClose}
      justifyContent={'flex-end'}>
      <VStack
        w={wp(100)}
        minH="50%"
        p={3}
        bg={'white'}
        style={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <HStack justifyContent={'flex-end'}>
          <Pressable onPress={onClose} pr={1}>
            <Text color={'gray.400'}>Close</Text>
          </Pressable>
        </HStack>
        {/* title */}
        <Text fontSize={'xl'}>Wish View</Text>
        <HStack alignItems={'center'} mt={5} space={2}>
          <MessageIcon size={7} />
          <Text fontSize={'lg'} color={Colors.primaryMain}>
            Receiver: +88 01916546547
          </Text>
        </HStack>
        {/*  */}
        <VStack p={2} mt={3} rounded={'md'} bg={Colors.lightBlue}>
          <Text>
            Wishing you a day as bright and special as you are! 🌟 Enjoy every
            moment! 🎁🥳 Wishing you a day as bright and special as you are! 🌟
            Enjoy every moment! 🎁🥳
          </Text>
        </VStack>
        <VStack mt={4}>
          <Text>Scheduled for September 26, 2024, at 5:30 AM.</Text>
          <Text>From App Credit</Text>
          <Text py={3}>Created on February 5, 2023.</Text>
          {/* button */}
        </VStack>
        {/* button */}
        <Text mt={5} mb={2}>
          To update this message, please click the update button below.
        </Text>
        <Button
          py={3}
          bg={Colors.primaryMain}
          onPress={handelEditNav}
          _focus={{
            backgroundColor: Colors.primaryMain,
          }}
          _text={{
            fontSize: 'md',
          }}>
          Edit
        </Button>
      </VStack>
    </Modal>
  );
}
