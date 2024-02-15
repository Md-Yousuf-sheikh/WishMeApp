import Colors from '@theme/colors';
import {HStack, Text, VStack, Pressable, Box} from 'native-base';
import React from 'react';
import {IPropsSmsPlan} from 'src/typedef/navigation.types';

interface PropsType {
  onPress?: () => void;
  onEditPress?: () => void;
  bg?: boolean;
  offerTag?: string;
  item?: IPropsSmsPlan;
}

export default function SmsPlanCard({onPress, offerTag, bg, item}: PropsType) {
  return (
    <Pressable onPress={onPress} mb={5}>
      <HStack
        space={2}
        justifyContent={'space-between'}
        alignItems={'center'}
        overflow={'hidden'}
        borderRadius={10}
        py={1}
        bg={bg ? Colors.lightBlue : 'gray.100'}>
        {/* offer tag */}
        {offerTag && (
          <HStack
            position={'absolute'}
            top={0}
            left={5}
            px={3}
            borderBottomRadius={'md'}
            bg={Colors.primaryMain}>
            <Text fontSize={'xs'} color={'white'}>
              {offerTag}
            </Text>
            <Box
              bg={Colors.primaryMain}
              w={4}
              h={4}
              position={'absolute'}
              left={'55%'}
              bottom={-5}
              zIndex={-2}
              style={{
                transform: [{rotate: '45deg'}],
              }}
            />
          </HStack>
        )}

        {/* content */}
        <VStack width={'75%'} px={2} justifyContent={'center'} py={2}>
          <Text color={'gray.800'} textTransform={'capitalize'} fontSize={'md'}>
            {item?.name}
          </Text>
          <Text color={'gray.800'}>{item?.quantity} SMS (from WishMe App)</Text>
          <Text color={'gray.800'}>{item?.summary}</Text>
        </VStack>
        <VStack w={'25%'}>
          <Text fontSize={'xl'} fontWeight={'bold'} color={'gray.800'}>
            ৳ {item?.salePrice}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
