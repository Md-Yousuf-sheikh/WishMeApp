import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const useDateTimePicker = (
  initialDate?: Date | undefined,
  mode: 'date' | 'time' | 'datetime' = 'date',
) => {
  const [openDatePicker, setOpenDatePicker] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  console.log('initialDate', initialDate);

  const showDatePicker = () => {
    setOpenDatePicker(true);
  };

  const hideDatePicker = () => {
    setOpenDatePicker(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const datePickerComponent = (
    <DateTimePickerModal
      isVisible={openDatePicker}
      mode={mode}
      minimumDate={new Date()}
      date={selectedDate || new Date()} // Set default value here
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  );

  return {
    showDatePicker,
    hideDatePicker,
    selectedDate,
    datePickerComponent,
  };
};

export default useDateTimePicker;
