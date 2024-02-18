import React from 'react';
import {HStack, Skeleton, VStack} from 'native-base';

export const SkeletonsScheduledCard = () => {
  return (
    <HStack bg={'gray.50'} w="100%" space={3} p={3} rounded={'lg'}>
      <Skeleton w={12} h={12} rounded={'full'} />
      <VStack justifyContent={'space-between'} w="80%">
        <HStack justifyContent={'space-between'}>
          <Skeleton.Text w={'60%'} lines={1} />
          <Skeleton.Text w={'30%'} lines={1} />
        </HStack>
        <Skeleton.Text lines={1} />
      </VStack>
    </HStack>
  );
};
