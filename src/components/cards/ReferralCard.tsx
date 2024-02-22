import Colors from '@theme/colors';
import {HStack, Text, VStack, Pressable, Box, Image} from 'native-base';
import React from 'react';
import {IPropsReferralItem} from 'src/typedef/navigation.types';
import {wp} from '@theme/ScreenDimensions';

interface PropsType {
  onPress?: () => void;
  onEditPress?: () => void;
  data: IPropsReferralItem;
}

export default function ReferralCard({onPress, data}: PropsType) {
  return (
    <Pressable mb={3} onPress={onPress}>
      <VStack p={2} rounded={'md'} bg={Colors.lightBlue}>
        <HStack>
          <Box p={2} mr={2} rounded={'full'} bg={'white'}>
            <Image
              source={{
                uri: data?.image,
              }}
              w={'7'}
              h={'7'}
              alt="22"
            />
          </Box>
          <VStack width={'85%'} justifyContent={'space-between'}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              space={2}>
              <Text
                textTransform={'capitalize'}
                fontWeight={'800'}
                color={'gray.900'}
                numberOfLines={1}>
                {data?.fullName}
              </Text>
              <Text
                textTransform={'capitalize'}
                color={data?.status === 'active' ? 'green' : 'yellow'}>
                {data?.status}
              </Text>
            </HStack>
            <HStack
              // alignItems={'center'}
              justifyContent={'space-between'}
              space={2}>
              <Text
                fontWeight={'800'}
                w={wp(55)}
                color={'gray.900'}
                numberOfLines={1}>
                {data?.link}
              </Text>
              <Text color={'gray.400'}>{data?.createdAt}</Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Pressable>
  );
}
