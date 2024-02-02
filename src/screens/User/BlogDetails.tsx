import React from 'react';
import {HStack, Image, Stack, Text, VStack} from 'native-base';
import {useRoute} from '@react-navigation/native';

export default function BlogDetails() {
  const {thumbnail, title, description} = useRoute()?.params?.item;
  // Hooks

  return (
    <VStack h={'100%'} p={4}>
      {/* <HStack alignItems="center">
        <Image
          source={{uri: thumbnail}}
          height={8}
          width={8}
          rounded="full"
          mr={2}
        />
        <Text color="#353340" fontSize="sm" fontWeight={500}>
          {author.name}
        </Text>
      </HStack> */}
      <Image
        source={{uri: thumbnail}}
        alt={title}
        height={'200'}
        width={'full'}
        resizeMode="cover"
      />

      <VStack p="4" space={2}>
        <Text color="black" fontSize="lg" fontWeight={700}>
          {title}
        </Text>
        <Text color="gray.2" fontSize="sm" fontWeight={400}>
          {description}
        </Text>
      </VStack>
    </VStack>
  );
}
