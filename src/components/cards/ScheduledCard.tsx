import Colors from '@theme/colors';
import {Avatar, HStack, Text, VStack, Pressable} from 'native-base';
import React from 'react';
import {IPropsWishItem} from 'src/typedef/navigation.types';
import moment from 'moment';

interface PropsType {
  onPress?: () => void;
  onEditPress?: () => void;
  data: IPropsWishItem;
}

export default function ScheduledCard({onPress, data}: PropsType) {
  return (
    <Pressable mb={3} onPress={onPress}>
      <VStack p={2} rounded={'md'} bg={Colors.lightBlue}>
        <HStack>
          <Avatar bg={'amber.800'} mr={2} size={'md'}>
            {data?.receiver?.fullName?.slice(0, 2)}
          </Avatar>
          <VStack width={'85%'} justifyContent={'space-between'}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-between'}
              space={2}>
              <Text fontWeight={'800'} color={'gray.900'} numberOfLines={1}>
                {data?.receiver?.fullName}
              </Text>
              <Text color={'gray.400'}>
                {moment(data?.scheduleDate).format('D-MMM-YYYY')}
              </Text>
            </HStack>
            <Text color={'gray.500'} numberOfLines={1}>
              {data?.wish?.message}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Pressable>
  );
}
