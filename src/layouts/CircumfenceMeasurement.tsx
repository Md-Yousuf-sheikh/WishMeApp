import {fontSizes} from '@theme/typography';
import {HStack, Text as NText, VStack} from 'native-base';
import {BarChart, XAxis, YAxis} from 'react-native-svg-charts';
import React from 'react';

export default function CircumfenceMeasurement() {
  const data = [14, 80, 100, 55, 60, 80, 95, 100, 55];

  return (
    <VStack space={4}>
      <NText color={'#1A1929'} fontSize={fontSizes.lg} fontWeight={700}>
        Circumference Measurements
      </NText>

      <HStack justifyContent={'space-between'} bg={'white'} p={4} rounded={8}>
        <YAxis
          data={data}
          contentInset={{
            top: 15,
            bottom: 25,
          }}
          min={0}
          max={100}
          svg={{
            fill: 'grey',
            fontSize: 11,
          }}
          style={{width: 'auto'}}
          numberOfTicks={data.length}
          formatLabel={value => `${value}`}
        />
        <VStack w="90%">
          <BarChart
            data={data}
            gridMin={0}
            svg={{fill: '#FFC857'}}
            style={{height: 200, width: 'auto'}}
            spacingInner={0.5}
            xAccessor={({item}) => item}
            yAccessor={({item}) => item}
            contentInset={{
              top: 10,
              bottom: 10,
            }}
          />
          <XAxis
            data={data}
            contentInset={{left: 15, right: 15}}
            svg={{fontSize: 9, fill: 'black'}}
            formatLabel={(value, index) => `${index + 1} Rps`}
          />
        </VStack>
      </HStack>
    </VStack>
  );
}
