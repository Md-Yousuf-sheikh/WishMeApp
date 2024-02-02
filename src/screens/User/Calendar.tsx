import React from 'react';
import {Pressable, ScrollView, Text, VStack} from 'native-base';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import dayjs from 'dayjs';
import {fontSizes} from '@theme/typography';

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const selectedDates = [new Date(2023, 10, 2), new Date(2023, 11, 11)];

const calendarDays = (month: number, year: number) => {
  const dates = [];
  for (let i = 1; i <= 5; i++) {
    const weekdays = [];
    for (let j = 1; j <= 7; j++) {
      const day = i * 7 - (7 - j);
      const date = new Date(year, month - 1, day);
      if (day > getDaysInMonth(month, year)) {
        break;
      } else if (day < 1) {
        weekdays.push(null);
      }
      weekdays.push(date);
    }

    dates.push(weekdays);
  }
  return dates;
};

export default function CalendarScreen() {
  const [containerWidth, setContainerWidth] = React.useState(0);

  console.log(calendarDays(10, 2023));
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
        bgColor: 'white',
      }}>
      <VStack space={2}>
        <Text fontSize={fontSizes.md} fontWeight={'500'}>
          Octber 2023
        </Text>
        <VStack
          py={'8px'}
          px={'4px'}
          _innerContainerStyle={{overflow: 'hidden'}}
          onLayout={event => {
            setContainerWidth(event.nativeEvent.layout.width);
          }}>
          {calendarDays(10, 2023).map((week, index) => (
            <VStack key={index} direction={'row'} justifyContent={'flex-start'}>
              {week.map((day, index) => (
                <Pressable
                  p={2}
                  key={index}
                  width={containerWidth / 7 + 'px'}
                  h={'50px'}
                  backgroundColor={
                    selectedDates.findIndex(
                      date => date.getTime() === day?.getTime(),
                    ) !== -1
                      ? '#F02C20'
                      : ''
                  }>
                  <Text color={'#F02C20'}>{dayjs(day).format('DD')}</Text>
                </Pressable>
              ))}
            </VStack>
          ))}
        </VStack>
      </VStack>
      <VStack space={2}>
        <Text fontSize={fontSizes.md} fontWeight={'500'}>
          November 2023
        </Text>
        <VStack
          py={'8px'}
          px={'4px'}
          _innerContainerStyle={{overflow: 'hidden'}}
          onLayout={event => {
            setContainerWidth(event.nativeEvent.layout.width);
          }}>
          {calendarDays(11, 2023).map((week, index) => (
            <VStack key={index} direction={'row'} justifyContent={'flex-start'}>
              {week.map((day, index) => (
                <Pressable
                  p={2}
                  key={index}
                  width={containerWidth / 7 + 'px'}
                  h={'50px'}>
                  <Text color={'#F02C20'}>{dayjs(day).format('DD')}</Text>
                </Pressable>
              ))}
            </VStack>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}
