import {Text, VStack} from 'native-base';
import React from 'react';
import TableRow from 'src/components/TableRow';

export default function ExerciseHistory() {
  return (
    <VStack space={4}>
      <VStack space="3" mt={5}>
        <Text fontWeight={700} fontSize="lg" color="black">
          February 28, 2023
        </Text>
        <VStack space="4">
          <TableRow
            _containerStyle={{
              bg: '#EFEEF4',
              py: 2,
            }}
            _textStyle={{
              color: '#58565E',
              fontSize: 'sm',
              fontWeight: 700,
            }}
            cols={[
              {
                title: 'Sets',
                key: 'Sets',
              },
              {
                title: 'Reps',
                key: 'Reps',
              },
              {
                title: 'Weight',
                key: 'Weight',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
        </VStack>
      </VStack>
      <VStack space="3" mt={5}>
        <Text fontWeight={700} fontSize="lg" color="black">
          February 27, 2023
        </Text>
        <VStack space="4">
          <TableRow
            _containerStyle={{
              bg: '#EFEEF4',
              py: 2,
            }}
            _textStyle={{
              color: '#58565E',
              fontSize: 'sm',
              fontWeight: 700,
            }}
            cols={[
              {
                title: 'Sets',
                key: 'Sets',
              },
              {
                title: 'Reps',
                key: 'Reps',
              },
              {
                title: 'Weight',
                key: 'Weight',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
        </VStack>
      </VStack>
      <VStack space="3" mt={5}>
        <Text fontWeight={700} fontSize="lg" color="black">
          February 26, 2023
        </Text>
        <VStack space="4">
          <TableRow
            _containerStyle={{
              bg: '#EFEEF4',
              py: 2,
            }}
            _textStyle={{
              color: '#58565E',
              fontSize: 'sm',
              fontWeight: 700,
            }}
            cols={[
              {
                title: 'Sets',
                key: 'Sets',
              },
              {
                title: 'Reps',
                key: 'Reps',
              },
              {
                title: 'Weight',
                key: 'Weight',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '12',
              },
              {
                title: '15kg',
              },
            ]}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
