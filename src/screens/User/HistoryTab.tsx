import React from 'react';
import {
  Button,
  Center,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import ExerciseItem from 'src/components/exercise/ExerciseItem';
import {useNavigation} from '@react-navigation/native';
import {
  AddIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ClockIcon,
  LbsIcon,
  NoteIcon,
  SearchIcon,
  TrophyIcon,
} from '@assets/icons';
import NewExercise from 'src/actionSheets/NewExercise';
import {fontSizes} from '@theme/typography';
import Tab from 'src/components/Tab';
import TableRow from 'src/components/TableRow';

export default function History() {
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
        placeholder="Search"
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
          <Text color="black">Program</Text>
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
          <Text color="black">Exercise</Text>
          <ArrowUpIcon />
        </Pressable>
      </HStack>

      <VStack space={4}>
        <Text fontWeight={700} fontSize={fontSizes.md}>
          February 27, 2023
        </Text>

        <VStack space={4} bg="white" p={3}>
          <VStack space={2}>
            <HStack justifyContent={'space-between'}>
              <Text fontWeight={700} fontSize={fontSizes.sm}>
                Workout Name
              </Text>
              <Text fontSize={fontSizes.xs}>Program Name</Text>
            </HStack>
            <HStack
              space={4}
              borderColor={'#E1E0E6'}
              borderBottomWidth={1}
              py={4}>
              <HStack space={2}>
                <ClockIcon />
                <Text color={'#7D7C81'} fontSize={fontSizes.xs}>
                  49s
                </Text>
              </HStack>
              <HStack space={2}>
                <LbsIcon />
                <Text color={'#7D7C81'} fontSize={fontSizes.xs}>
                  lbs
                </Text>
              </HStack>
              <HStack space={2}>
                <TrophyIcon />
                <Text color={'#7D7C81'} fontSize={fontSizes.xs}>
                  3PRs
                </Text>
              </HStack>
            </HStack>
          </VStack>

          <VStack space={2}>
            <Text fontWeight={700} fontSize={fontSizes.sm}>
              BB RDL
            </Text>
            <TableRow
              cols={[
                {
                  key: 1,
                  title: 'Reps',
                },
                {
                  key: 1,
                  title: 'Total weight',
                },
                {
                  key: 1,
                  title: 'Top weight',
                },
              ]}
              _containerStyle={{
                backgroundColor: '#EFEEF4',
                py: 4,
              }}
              _textStyle={{
                fontWeight: 700,
                fontSize: fontSizes.xs,
              }}
            />
            <TableRow
              cols={[
                {
                  key: 1,
                  title: '47',
                },
                {
                  key: 1,
                  title: '100 KG',
                },
                {
                  key: 1,
                  title: '40 KG',
                },
              ]}
              _containerStyle={{
                backgroundColor: '#F8F8F8',
                py: 3,
              }}
              _textStyle={{
                fontSize: fontSizes.xs,
                color: '#7D7C81',
              }}
            />
          </VStack>
          <VStack space={2}>
            <Text fontWeight={700} fontSize={fontSizes.sm}>
              Warm Up 4
            </Text>
            <TableRow
              cols={[
                {
                  key: 1,
                  title: 'Reps',
                },
                {
                  key: 1,
                  title: 'Total weight',
                },
                {
                  key: 1,
                  title: 'Top weight',
                },
              ]}
              _containerStyle={{
                backgroundColor: '#EFEEF4',
                py: 4,
              }}
              _textStyle={{
                fontWeight: 700,
                fontSize: fontSizes.xs,
              }}
            />
            <TableRow
              cols={[
                {
                  key: 1,
                  title: '47',
                },
                {
                  key: 1,
                  title: '100 KG',
                },
                {
                  key: 1,
                  title: '40 KG',
                },
              ]}
              _containerStyle={{
                backgroundColor: '#F8F8F8',
                py: 3,
              }}
              _textStyle={{
                fontSize: fontSizes.xs,
                color: '#7D7C81',
              }}
            />
          </VStack>

          <Center mt={4}>
            <Pressable
              borderWidth={1}
              px={4}
              py={3}
              borderColor={'#68696B'}
              rounded={9}
              width={'100%'}
              maxW={200}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              >
              <NoteIcon />
              <Text
                ml={2}
                fontSize={fontSizes.xs}
                fontWeight={700}
                color={'#68696B'}>
                Note
              </Text>
            </Pressable>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
