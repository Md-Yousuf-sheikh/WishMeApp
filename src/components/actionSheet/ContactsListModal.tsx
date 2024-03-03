/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Avatar, HStack, Modal, Pressable, Text, VStack} from 'native-base';
import {wp} from '@theme/ScreenDimensions';
import useContacts from '@hooks/useContacts';
import {FlatList} from 'react-native';
import {avatarColors} from 'src/utils';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  setValue?: (props: any) => void;
}

export default function ContactsListModal({isOpen, onClose, setValue}: IProps) {
  const {contacts} = useContacts();

  // renderItem
  const renderItem = ({item}: any) => {
    // Example usage:
    const randomColor =
      avatarColors[Math.floor(Math.random() * avatarColors.length)];

    return (
      <Pressable
        onPress={() => {
          setValue?.(item?.phoneNumbers?.[0]?.number);
          onClose();
        }}>
        <HStack
          borderWidth={1}
          borderColor={'gray.200'}
          rounded={'md'}
          p={2}
          mt={4}
          bg={'gray.100'}
          space={3}>
          <Avatar size={'md'} bg={randomColor}>
            {item?.displayName?.slice(0, 2)}
          </Avatar>
          <VStack>
            <Text fontWeight="bold" fontSize="lg">
              {item?.displayName}
            </Text>
            <Text fontWeight="bold" fontSize="sm">
              {item?.phoneNumbers?.[0]?.number}
            </Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  };
  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={onClose}
      justifyContent={'flex-end'}>
      <VStack
        w={wp(100)}
        minH="30%"
        maxH={'80%'}
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
        {/* List */}
        <FlatList
          data={contacts}
          renderItem={renderItem}
          ListEmptyComponent={
            <VStack pt={20} alignItems={'center'} justifyContent={'center'}>
              <Text fontSize={'2xl'} color={'gray.400'}>
                No Contacts Available
              </Text>
            </VStack>
          }
        />
      </VStack>
    </Modal>
  );
}
