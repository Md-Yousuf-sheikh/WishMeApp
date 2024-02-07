import Colors from '@theme/colors';
import {
  Avatar,
  CircleIcon,
  HStack,
  Text,
  VStack,
  Pressable,
  Box,
} from 'native-base';
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

export default function SmsPlanCard({type, onPress, onEditPress}: PropsType) {
  return (
    <Pressable onPress={onPress} mb={5}>
      <HStack
        space={2}
        justifyContent={'såpace-between'}
        alignItems={'center'}
        borderWidth={1}
        overflow={'hidden'}
        borderRadius={10}
        h={'24'}
        borderColor={Colors.primaryMain}>
        <VStack width={'75%'} px={2} space={2} py={2}>
          <Text color={Colors.primaryMain}>WishMe Lite</Text>
          <Text color={'gray.400'}>20 SMS (from WishMe App)</Text>
          <Text color={'gray.400'}>Unlimited SMS from your mobile</Text>
        </VStack>
        <VStack
          bg={Colors.primaryMain}
          h={'24'}
          w={'25%'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Text fontSize={'2xl'} color={'white'}>
            Buy
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
