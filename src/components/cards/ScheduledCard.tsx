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
    <Pressable onPress={onPress}>
      <HStack
        space={2}
        p={2}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <HStack width={'75%'} space={2}>
          <Avatar bg={'amber.800'} size={'md'}>
            DD
          </Avatar>
          <VStack maxW={'50%'}>
            <HStack alignItems={'center'} space={2}>
              <Text fontWeight={'800'} color={'gray.800'}>
                Foysal Mahmud Khan
              </Text>
              <Pressable onPress={onEditPress}>
                <EditPanIcon />
              </Pressable>
            </HStack>
            <Text color={'gray.400'} numberOfLines={1}>
              Happy Birthday, Wising kas kajs dakjsd ak sdka skda sd k
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
