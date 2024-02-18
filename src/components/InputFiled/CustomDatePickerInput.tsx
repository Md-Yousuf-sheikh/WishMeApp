import React from 'react';
import {Text, Button, HStack, VStack, Pressable} from 'native-base';
import useDateTimePicker from '@hooks/useDateTimePicker';
import {CalenderIcon} from 'src/NativeBaseIcon';
import Colors from '@theme/colors';
import moment from 'moment';

interface PropsType {
  label?: string;
  placeholder?: string;
  setValue?: (props: any | undefined) => void;
  value?: any;
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

  const inputDate = new Date(selectedDate || '');

  const formattedDate = inputDate
    ? moment(inputDate).format('YYYY-MM-DD HH:mm:ss')
    : undefined;

  React.useEffect(() => {
    setValue?.(formattedDate); // Invoke the provided setValue function with the selected date
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
          borderColor={Colors.lightGray1}
          backgroundColor={Colors.lightGray1}
          px={4}
          py={3}>
          <Button p={0} variant={'unstyled'}>
            <Text color={selectedDate ? 'gray.800' : 'gray.400'}>
              {selectedDate ? formattedDate : placeholder}
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
