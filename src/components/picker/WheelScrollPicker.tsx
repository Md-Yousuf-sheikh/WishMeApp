import React from 'react';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RulerPicker} from 'react-native-ruler-picker';
const dataSource = ['1', '2', '3', '4', '5', '6'];

const WheelScrollPicker = () => {
  const ref = React.useRef();
  const [index, setIndex] = React.useState(0);

  const onValueChange = (data, selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onNext = () => {
    if (index === dataSource.length - 1) return;
    setIndex(index + 1);
    ref.current && ref.current.scrollToIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollPicker
        ref={ref}
        dataSource={dataSource}
        selectedIndex={index}
        onValueChange={onValueChange}
        style={{
          backgroundColor: 'red',
          height: 200,
          width: 300,
        }}
      />
      {/* <RulerPicker
        min={0}
        max={240}
        step={1}
        fractionDigits={0}
        initialValue={0}
        onValueChange={number => console.log(number)}
        onValueChangeEnd={number => console.log(number)}
        unit="cm"
      /> */}

      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4285f4', // Change color as needed
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WheelScrollPicker;
