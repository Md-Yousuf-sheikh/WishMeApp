import React from 'react';
import {Image, Pressable, Text, VStack} from 'native-base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import VectorImage from 'react-native-vector-image';
import {PlayIcon} from '@assets/icons';

interface Item {
  title: string;
  image: any;
  description: string;
  id?: string;
}

interface Props {
  items: Item[];
  title: string;
  onPress?: (id: any) => void;
}

export default function ExerciseItem({items, title, onPress}: Props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <VStack space="3">
      <Text fontSize="lg" fontWeight={700} color="black">
        {title}
      </Text>
      {items.map((item, index) => (
        <Pressable
          onPress={() => onPress?.(item?.id)}
          display="flex"
          flexDirection="row"
          gap={4}
          bg="#FFFFFF"
          rounded="xl"
          p={2}
          key={item.title + index}
          position={'relative'}>
          <Image
            source={{uri: item.image}}
            h={65}
            w={70}
            alt="image base"
            rounded="lg"
          />
          <VStack justifyContent="space-between" py={2}>
            <Text fontSize="lg" fontWeight={700} color="black">
              {item.title}
            </Text>
            <Text fontSize="xs" fontWeight={600} color="gray.2">
              {item.description}
            </Text>
          </VStack>

          <PlayIcon style={{position: 'absolute', top: 15, right: 10}} />
        </Pressable>
      ))}
    </VStack>
  );
}
