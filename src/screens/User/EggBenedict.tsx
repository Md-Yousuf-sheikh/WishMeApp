import React from 'react';
import {HStack, Image, ScrollView, Text, VStack} from 'native-base';
import Tab from 'src/components/Tab';
import VideoDetails from 'src/layouts/VideoDetails';
import ExerciseHistory from 'src/layouts/ExerciseHistory';
import TableRow from 'src/components/TableRow';

const tabs = [
  {
    title: 'Ingredients',
    key: 'Ingredients',
  },
  {
    title: 'Methods',
    key: 'Methods',
  },
];

export default function ExerciseDetails() {
  const [activeTab, setActiveTab] = React.useState('About');
  return (
    <ScrollView
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
      }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        }}
        alt="image base"
        resizeMode="cover"
        height={200}
        rounded="lg"
      />
      <Tab
        tabs={tabs}
        activeTab={activeTab}
        onPress={setActiveTab}
        _containerStyle={{
          px: 3,
        }}
      />

      {activeTab === 'Ingredients' ? (
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
                title: 'Ingredient',
              },
              {
                title: 'Amount/Unit',
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
                title: 'Milk',
              },
              {
                title: '10ml',
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
                title: 'Sugar',
              },
              {
                title: '10g',
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
                title: 'Paprika',
              },
              {
                title: '10g',
              },
            ]}
          />
        </VStack>
      ) : null}
      {activeTab === 'Methods' ? (
        <VStack space={3}>
          <HStack space={2}>
            <Text color="gray.2">1</Text>
            <Text color="gray.2">
              Stand tall with your feet hip-width apart, toes pointing forward
              or slightly turned out.
            </Text>
          </HStack>
          <HStack space={2}>
            <Text color="gray.2">2</Text>
            <Text color="gray.2">
              Position the barbell in front of you on the ground, maintaining a
              shoulder-width grip. Alternatively, you can use dumbbells or
              kettlebells for this exercise.
            </Text>
          </HStack>
          <HStack space={2}>
            <Text color="gray.2">2</Text>
            <Text color="gray.2">
              For the barbell version, use an overhand grip (both palms facing
              you) or a mixed grip (one palm facing you, one palm facing away)
              to hold the bar. Your grip should be just outside your knees.
            </Text>
          </HStack>
        </VStack>
      ) : null}
    </ScrollView>
  );
}
