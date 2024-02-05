import {Avatar, CircleIcon, HStack, Text, VStack, Pressable} from 'native-base';
import React from 'react';

interface PropsType {
  onPress?: () => void;
  type?: 'app' | 'mobile';
  image?: string;
  data?: any;
  date?: string;
  name?: string;
  subTitle?: string;
  sendType?: string;
}

export default function ScheduledCard({type}: PropsType) {
  return (
    <Pressable>
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
            <HStack>
              <Text fontWeight={'800'} color={'gray.800'}>
                Foysal Mahmud Khan
              </Text>
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
