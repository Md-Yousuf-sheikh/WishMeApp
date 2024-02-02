import React from 'react';
import {HStack, Input, Pressable, ScrollView, Text} from 'native-base';
import ExerciseItem from 'src/components/exercise/ExerciseItem';
import {useNavigation} from '@react-navigation/native';
import {AddIcon, ArrowDownIcon, ArrowUpIcon, SearchIcon} from '@assets/icons';
import NewExercise from 'src/actionSheets/NewExercise';
import { fontSizes } from '@theme/typography';

export default function Exercise() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
      }}>
      <Input
        bg="white"
        placeholder="Search Exercise"
        rounded={8}
        placeholderTextColor={'gray.2'}
        color={'black'}
        _focus={{bg: 'white'}}
        leftElement={<SearchIcon style={{marginLeft: 10}} />}
        backgroundColor={'white'}
        fontSize={fontSizes.xs}
      />

      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Pressable
          w="48%"
          bg="white"
          px={2}
          py={2}
          rounded="xl"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}>
          <Text color="black">Body Part</Text>
          <ArrowDownIcon />
        </Pressable>
        <Pressable
          w="48%"
          bg="white"
          px={2}
          py={2}
          rounded="xl"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}>
          <Text color="black">Body Part</Text>
          <ArrowUpIcon />
        </Pressable>
      </HStack>

      <Pressable
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        borderRadius={8}
        borderWidth={1}
        borderColor="primary.100"
        bg="white"
        py={2}
        onPress={() => setIsOpen(true)}>
        <AddIcon />
        <Text color="primary.100" fontSize="sm" fontWeight={700}>
          New Exercise
        </Text>
      </Pressable>

      <ExerciseItem
        title="Recent"
        items={[
          {
            title: 'Romanian Deadlift',
            description: 'Tags of exercise',
            image:
              'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          },
          {
            title: 'Band Walk',
            description: 'Tags of exercise',
            image:
              'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          },
        ]}
        onPress={id => navigation.navigate('ExerciseDetails', {id})}
      />

      <ExerciseItem
        title="A"
        items={[
          {
            title: 'Abdominal Brace',
            description: 'Tags of exercise',
            image:
              'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          },
          {
            title: 'Alternate Leg Extensions',
            description: 'Tags of exercise',
            image:
              'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
          },
        ]}
        onPress={id => navigation.navigate('ExerciseDetails', {id})}
      />
      <NewExercise
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </ScrollView>
  );
}
