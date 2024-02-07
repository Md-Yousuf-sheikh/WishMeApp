import {Avatar, CircleIcon, HStack, Text, VStack, Pressable} from 'native-base';
import React from 'react';
import {EditPanIcon} from 'src/NativeBaseIcon';

interface PropsType {
  onPress?: () => void;
  onEditPress?: () => void;
  type?: 'app' | 'mobile';
  image?: string;
  data?: any;
  date?: string;
  name?: string;
  subTitle?: string;
  sendType?: string;
}

export default function ScheduledCard({type, onPress, onEditPress}: PropsType) {
  return (
    <Pressable mb={3} onPress={onPress}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <HStack width={'80%'}>
          <Avatar bg={'amber.800'} mr={2} size={'md'}>
            DD
          </Avatar>
          <VStack maxW={'70%'}>
            <HStack alignItems={'center'} space={2}>
              <Text fontWeight={'800'} color={'gray.800'} numberOfLines={1}>
                Foysal Mahmud Khan
              </Text>
              <Pressable onPress={onEditPress}>
                <EditPanIcon />
              </Pressable>
            </HStack>
            <Text color={'gray.400'} numberOfLines={1}>
              Happy Birthday, Wising kas kajs dakjsd ak sdka skda sd k kjs dj
            </Text>
          </VStack>
        </HStack>
        <VStack>
          <HStack alignItems={'center'} space={1}>
            <Text color={'gray.400'}>from app</Text>
            <CircleIcon
              size={2}
              color={type === 'app' ? '#8C51A5' : '#F47B8A'}
            />
          </HStack>
          <Text color={'gray.400'}>30 Jan 2024</Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
