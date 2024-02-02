import React from 'react';
import {HStack, Image, Pressable, Text, VStack} from 'native-base';

export interface IBlogCardProps {
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  onPress: () => void;
}

export default function BlogCard({
  author,
  image,
  description,
  thumbnail,
  title,
  onPress,
}: IBlogCardProps) {
  return (
    <Pressable
      onPress={onPress}
      display="flex"
      style={{
        gap: 8,
      }}
      borderRadius={16}
      overflow="hidden"
      bg="white">
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
        <Text color="gray.2" noOfLines={3} fontSize="sm" fontWeight={400}>
          {description}
        </Text>
        <HStack alignItems="center">
          {/* <Image
            source={{uri: ''}}
            alt={author.name}
            height={8}
            width={8}
            rounded="full"
            mr={2}
          /> */}
          {/* <Text color="#353340" fontSize="sm" fontWeight={500}>
            {author.name}
          </Text> */}
        </HStack>
      </VStack>
    </Pressable>
  );
}
