import Colors from '@theme/colors';
import {Box, HStack, Image, Pressable, Text, VStack} from 'native-base';
import React from 'react';

type Props = {
  setFieldValue?: any;
  value?: any;
};

export default function SelectPaymentMethod({setFieldValue, value}: Props) {
  return (
    <VStack>
      <Text fontSize={'lg'}>Select Payment Method</Text>
      <VStack mt={3} space={3}>
        {/* online pay */}
        <Pressable onPress={() => setFieldValue('online')}>
          <HStack
            px={2}
            minH={10}
            background={'white'}
            justifyContent={'space-between'}
            alignItems={'center'}
            p={1}
            w={'full'}
            borderWidth={1}
            borderColor={Colors.lightBlue}
            rounded={'md'}>
            <HStack space={3} alignItems={'center'}>
              <Box
                borderWidth={2}
                w={5}
                h={5}
                rounded={'full'}
                justifyContent={'center'}
                borderColor={Colors.primaryMain}
                alignItems={'center'}>
                {value === 'online' && (
                  <Box w={3} h={3} rounded={'full'} bg={Colors.primaryMain} />
                )}
              </Box>
              <Text fontSize={'md'}>Online Payment</Text>
            </HStack>
            <Image
              source={require('@assets/images/bank/online-pay.png')}
              w={'60%'}
              h={10}
              mr={-8}
              resizeMode="contain"
            />
          </HStack>
        </Pressable>
        {/* Offline pay */}
        <Pressable onPress={() => setFieldValue('offline')}>
          <HStack
            px={2}
            minH={12}
            background={'white'}
            justifyContent={'space-between'}
            alignItems={'center'}
            p={1}
            w={'full'}
            borderWidth={1}
            borderColor={Colors.lightBlue}
            rounded={'md'}>
            <HStack space={3} alignItems={'center'}>
              <Box
                borderWidth={2}
                w={5}
                h={5}
                rounded={'full'}
                justifyContent={'center'}
                borderColor={Colors.primaryMain}
                alignItems={'center'}>
                {value === 'offline' && (
                  <Box w={3} h={3} rounded={'full'} bg={Colors.primaryMain} />
                )}
              </Box>
              <Text fontSize={'md'}>Make Offline Payment</Text>
            </HStack>
          </HStack>
        </Pressable>
      </VStack>
    </VStack>
  );
}
