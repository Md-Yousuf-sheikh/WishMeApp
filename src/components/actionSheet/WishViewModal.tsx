/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, HStack, Modal, Pressable, Text, VStack} from 'native-base';
import {wp} from '@theme/ScreenDimensions';
import {MessageIcon} from 'src/NativeBaseIcon';
import Colors from '@theme/colors';
import useNavigate from '@hooks/useNavigate';
import {IPropsWishItem} from 'src/typedef/navigation.types';
import moment from 'moment';

interface IProps {
  isOpen: boolean;
  type: 'log' | 'normal';
  onClose: () => void;
  item: IPropsWishItem;
}

export default function WishViewModal({isOpen, onClose, item, type}: IProps) {
  // hooks
  const navigate = useNavigate();
  //  formik
  const handelEditNav = () => {
    navigate('updateWishes', item);
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
            Receiver: +88 {item?.receiver?.number}
          </Text>
        </HStack>
        {/*  */}
        <VStack p={2} mt={3} rounded={'md'} bg={Colors.lightBlue}>
          <Text>{item?.wish?.message}</Text>
        </VStack>
        <VStack mt={4}>
          <Text>
            Scheduled for{' '}
            {moment(item?.scheduleDate).format('MMMM DD, YYYY, [at] h:mm A')}
          </Text>
          <Text textTransform={'capitalize'}>
            From {item?.wish?.messageType} Credit
          </Text>
          <Text py={3}>Created on {item?.createdAt}</Text>
          {/* button */}
        </VStack>
        {/* button */}
        {type !== 'log' && item?.status === 'pending' && (
          <>
            <Text mt={5} fontSize={'xs'} mb={2}>
              To update this message, please click the update button below.
            </Text>
            <Button
              py={3}
              bg={Colors.primaryMain}
              onPress={handelEditNav}
              rounded={'md'}
              _focus={{
                backgroundColor: Colors.primaryMain,
              }}
              _pressed={{
                backgroundColor: Colors.primaryMain,
              }}
              _text={{
                fontSize: 'md',
              }}>
              Edit
            </Button>
          </>
        )}
      </VStack>
    </Modal>
  );
}
