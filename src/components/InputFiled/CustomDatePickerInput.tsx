import React from 'react';
import {Text, Button, HStack, VStack, Pressable} from 'native-base';
import useDateTimePicker from '@hooks/useDateTimePicker';
import {CalenderIcon} from 'src/NativeBaseIcon';
import Colors from '@theme/colors';

interface PropsType {
  label?: string;
  placeholder?: string;
  setValue?: (props: Date | undefined) => void;
  value?: Date | undefined;
  mode?: 'date' | 'time' | 'datetime';
}

const CustomDatePickerInput = ({
  label,
  placeholder,
  setValue,
  value,
  mode,
}: PropsType) => {
  const {showDatePicker, hideDatePicker, selectedDate, datePickerComponent} =
    useDateTimePicker(value, mode);

  React.useEffect(() => {
    setValue?.(selectedDate); // Invoke the provided setValue function with the selected date
    hideDatePicker?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  return (
    <VStack>
      {label && <Text>{label}</Text>}
      <Pressable onPress={showDatePicker}>
        <HStack
          borderWidth={1}
          borderRadius={'md'}
          justifyContent={'space-between'}
          alignItems={'center'}
          borderColor={Colors.primaryMain}
          px={4}
          py={3}>
          <Button p={0} variant={'unstyled'}>
            <Text color={selectedDate ? 'gray.800' : 'gray.300'}>
              {selectedDate ? selectedDate.toDateString() : placeholder}
            </Text>
          </Button>
          <CalenderIcon size={5} />
        </HStack>
      </Pressable>
      {datePickerComponent}
    </VStack>
  );
};

export default CustomDatePickerInput;
