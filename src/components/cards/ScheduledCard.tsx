import Colors from '@theme/colors';
import {Avatar, HStack, Text, VStack, Pressable} from 'native-base';
import React from 'react';

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

export default function ScheduledCard({onPress}: PropsType) {
  return (
    <Pressable mb={3} onPress={onPress}>
      <VStack p={2} rounded={'md'} bg={Colors.lightBlue}>
        <HStack>
          <Avatar bg={'amber.800'} mr={2} size={'md'}>
            DD
          </Avatar>
          <VStack width={'85%'} justifyContent={'space-between'}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              space={2}>
              <Text fontWeight={'800'} color={'gray.900'} numberOfLines={1}>
                Foysal Mahmud Khan
              </Text>
              <Text color={'gray.400'}>30 Jan 2024</Text>
            </HStack>
            <Text color={'gray.600'} numberOfLines={1}>
              Wishing you a day as bright and special as you are! 🌟 Enjoy every
              moment! 🎁🥳
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Pressable>
  );
}
