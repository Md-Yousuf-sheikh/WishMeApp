import {HStack, Text} from 'native-base';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from '@react-native-community/slider';
const RangeSlider = ({min = 0, max = 100, step, onValueChanged}: any) => {
  const [rangeValue, setRangeValue] = useState({
    min: min,
    max: max,
  });

  return (
    <HStack w={'full'} paddingY={30}>
      <Slider
        minValue={0}
        maxValue={100}
        tintColor={'#da0f22'}
        handleBorderWidth={1}
        handleBorderColor="#454d55"
        selectedMinimum={20}
        handleBorderWidth={20}
        hideLabels={true}
        // tapToSeek={true}
        selectedMaximum={40}
        preffix={'ddd'}
        // hitSlop={'ddd'}
        style={{
          paddingVertical: 10,
          width: '100%',
          height: 20, // Adjust the height as needed
        }}
        onChange={data => {
          console.log(data);
        }}
      />
    </HStack>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 20, // Adjust height as needed
    backgroundColor: 'gray',
    width: '100%',
  },
  thumbStyle: {
    width: 20, // Customize thumb width
    height: 20, // Customize thumb height
    borderRadius: 10, // Customize thumb border radius
    backgroundColor: 'red', // Customize thumb background color
  },
  railStyle: {},
});

export default RangeSlider;
