import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RangeSlider from 'src/components/picker/RangeSlider';
import {VStack} from 'native-base';
import WheelScrollPicker from 'src/components/picker/WheelScrollPicker';

export default function ProfileCreation() {
  const handleValueChange = (low, high) => {
    // Handle the updated values as needed
    console.log('Low:', low, 'High:', high);
  };
  return (
    <VStack px={10}>
      <RangeSlider
        min={0}
        max={100}
        step={1}
        onValueChanged={handleValueChange}
      />
      <Text>ProfileCreation</Text>
      <WheelScrollPicker />
    </VStack>
  );
}

const styles = StyleSheet.create({});
