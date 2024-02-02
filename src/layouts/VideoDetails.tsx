import React from 'react';
import {Factory, HStack, Text, VStack} from 'native-base';
import Video from 'react-native-video';



export default function VideoDetails() {
  const FVideo = Factory(Video);
  return (
    <VStack space={8} mt={5}>
      <FVideo
        source={{uri: 'https://www.youtube.com/embed/MxXHui8ozZw'}}
        controls={true}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 8,
          backgroundColor: 'black',
        }}
      />

      <VStack space={3} px={4}>
        <Text fontSize="lg" fontWeight="bold" color="black">
          Instructions
        </Text>

        <HStack space={2}>
          <Text color="gray.2">1</Text>
          <Text color="gray.2">
            Stand tall with your feet hip-width apart, toes pointing forward or
            slightly turned out.
          </Text>
        </HStack>
        <HStack space={2}>
          <Text color="gray.2">2</Text>
          <Text color="gray.2">
            Position the barbell in front of you on the ground, maintaining a
            shoulder-width grip. Alternatively, you can use dumbbells or
            kettlebells for this exercise.
          </Text>
        </HStack>
        <HStack space={2}>
          <Text color="gray.2">2</Text>
          <Text color="gray.2">
            For the barbell version, use an overhand grip (both palms facing
            you) or a mixed grip (one palm facing you, one palm facing away) to
            hold the bar. Your grip should be just outside your knees.
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
