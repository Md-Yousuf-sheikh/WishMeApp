import {fontSizes} from '@theme/typography';
import {HStack, VStack, Text as NText, View, Box} from 'native-base';
import {Circle, G, Line, Text} from 'react-native-svg';
import {BarChart, PieChart, XAxis, YAxis} from 'react-native-svg-charts';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';

const CUT_OFF = 10;

const Labels = ({slices}) => {
  return slices.map((slice, index) => {
    const {labelCentroid, pieCentroid, data} = slice;
    return (
      <G key={index}>
        <Line
          x1={labelCentroid[0]}
          y1={labelCentroid[1]}
          x2={pieCentroid[0]}
          y2={pieCentroid[1]}
          stroke={'#fff'}
        />
        <Circle
          cx={labelCentroid[0]}
          cy={labelCentroid[1]}
          r={30}
          fill={'#ffffff50'}
        />
        <Circle
          cx={labelCentroid[0]}
          cy={labelCentroid[1]}
          r={20}
          fill={'#ffffff'}
        />

        <Text
          x={labelCentroid[0]}
          y={labelCentroid[1]}
          fill={'#1A1929'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={8}
          fontWeight={700}>
          {data.value}%
        </Text>
      </G>
    );
  });
};

export default function DailyMacroChart() {
  const [selectedSlice, setSelectedSlice] = useState({
    label: '',
    value: 0,
  });
  const [labelWidth, setLabelWidth] = useState(0);

  const {label, value} = selectedSlice;
  const keys = ['google', 'facebook', 'linkedin'];
  const values = [15, 25, 35];
  const colors = ['#FFC857', '#F39479', '#2A9BCE'];
  const data = keys.map((key, index) => {
    return {
      key,
      value: values[index],
      svg: {fill: colors[index]},
      arc: {
        outerRadius: 70 + values[index] + '%',
        padAngle: label === key ? 0.1 : 0,
      },
      onPress: () => setSelectedSlice({label: key, value: values[index]}),
    };
  });
  const deviceWidth = Dimensions.get('window').width;

  return (
    <VStack space={4} mt={4}>
      <NText color={'#1A1929'} fontSize={fontSizes.lg} fontWeight={700}>
        Daily Macros
      </NText>

      <VStack bg={'white'} rounded={'xl'} px={4} py={4} space={4}>
        <NText color={'#1A1929'} fontSize={fontSizes.sm} fontWeight={500}>
          Total
        </NText>
        <View style={{justifyContent: 'center'}} position={'relative'}>
          <PieChart
            style={{height: 250}}
            outerRadius={'80%'}
            innerRadius={'45%'}
            data={data}>
            <Labels />
            <VStack
              position={'absolute'}
              justifyContent={'center'}
              alignItems={'center'}
              width={'100%'}
              height={'100%'}
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={-1}
              space={4}>
              <NText backgroundColor={'#ccc'}>
                {label} {value}%
              </NText>
            </VStack>
          </PieChart>
        </View>

        <HStack justifyContent={'center'} alignItems={'center'} space={8}>
          <HStack space={2} alignItems={'center'}>
            <Box bg={'#FFC857'} w={2} h={2} rounded={'full'} />
            <NText fontSize={fontSizes.xs} color={'#1A1929'}>
              Protein
            </NText>
          </HStack>
          <HStack space={2} alignItems={'center'}>
            <Box bg={'#F39479'} w={2} h={2} rounded={'full'} />
            <NText fontSize={fontSizes.xs} color={'#1A1929'}>
              Carbs
            </NText>
          </HStack>
          <HStack space={2} alignItems={'center'}>
            <Box bg={'#2A9BCE'} w={2} h={2} rounded={'full'} />
            <NText fontSize={fontSizes.xs} color={'#1A1929'}>
              Fats
            </NText>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
