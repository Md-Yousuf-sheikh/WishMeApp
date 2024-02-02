import {StyleSheet} from 'react-native';
import React from 'react';
import {VStack, Text} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function PrivacySecurity() {
  return (
    <KeyboardAwareScrollView>
      <VStack w="100%" px={4} pb={'1/2'} mt={2}>
        <Text paddingY={3} fontSize={'xl'}>
          App Cookies
        </Text>
        <Text fontSize={'sm'} color={'#7D7C81'}>
          One of the standout features of Elevate Fitness Hub is its commitment
          to technology integration. The gym leverages the latest advancements
          in fitness tech to provide members with personalized workout plans,
          real-time performance tracking, and virtual training sessions led by
          expert instructors. This marriage of fitness and technology creates an
          immersive and engaging environment, encouraging members to push their
          boundaries and achieve their goals.
        </Text>
        <Text paddingY={3} fontSize={'xl'}>
          Log In Data
        </Text>
        <Text fontSize={'sm'} color={'#7D7C81'}>
          One of the standout features of Elevate Fitness Hub is its commitment
          to technology integration. The gym leverages the latest advancements
          in fitness tech to provide members with personalized workout plans,
          real-time performance tracking, and virtual training sessions led by
          expert instructors. This marriage of fitness and technology creates an
          immersive and engaging environment, encouraging members to push their
          boundaries and achieve their goals.
        </Text>
        {/* 3 */}
        <Text paddingY={3} fontSize={'xl'}>
          Personal Information
        </Text>
        <Text fontSize={'sm'} color={'#7D7C81'}>
          One of the standout features of Elevate Fitness Hub is its commitment
          to technology integration. The gym leverages the latest advancements
          in fitness tech to provide members with personalized workout plans,
          real-time performance tracking, and virtual training sessions led by
          expert instructors. This marriage of fitness and technology creates an
          immersive and engaging environment, encouraging members to push their
          boundaries and achieve their goals.
        </Text>
        {/* 4 */}
        <Text paddingY={3} fontSize={'xl'}>
          Credit Card Information
        </Text>
        <Text fontSize={'sm'} color={'#7D7C81'}>
          One of the standout features of Elevate Fitness Hub is its commitment
          to technology integration. The gym leverages the latest advancements
          in fitness tech to provide members with personalized workout plans,
          real-time performance tracking, and virtual training sessions led by
          expert instructors. This marriage of fitness and technology creates an
          immersive and engaging environment, encouraging members to push their
          boundaries and achieve their goals.
        </Text>
      </VStack>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
