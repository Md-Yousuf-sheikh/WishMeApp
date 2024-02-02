import React from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {AddIcon, ArrowDownIcon, Support} from '@assets/icons';
import {fontSizes} from '@theme/typography';

const tabItems = [
  {
    label: 'Warm-up',
    icon: require('../../../assets/images/exercise.png'),
    description:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
  },
  {
    label: 'Bench Press',
    icon: require('../../../assets/images/dumble-blue.png'),
    description:
      'Exercitationem ullam corporis suscipit laboriosam, nisi ut al.',
    extra: '4 x 5',
    category: {
      name: 'A',
      textColor: '#1AE13A',
    },
  },
  {
    label: 'BB squat',
    icon: require('../../../assets/images/tick.png'),
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
    extra: '4 x 5',
    category: {
      name: 'A',
      textColor: '#1AE13A',
    },
  },
  {
    label: 'Account Management',
    icon: require('../../../assets/images/dumble-blue.png'),
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
    extra: '3 x Till Failure',
    category: {
      name: 'B',
      textColor: '#9747FF',
    },
  },
  {
    label: 'Push Up',
    icon: require('../../../assets/images/dumble-red.png'),
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
    extra: '3 x 10',
    category: {
      name: 'C',
      textColor: '#1AE13A',
    },
  },
  {
    label: 'Goblet Squat',
    icon: require('../../../assets/images/circle.png'),
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
  },
  {
    label: 'Circuit',
    icon: require('../../../assets/images/circle.png'),
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
  },
];

export default function SettingsScreen() {
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
        bgColor: '#F8F8F8',
      }}>
      <HStack
        w="100%"
        bg="white"
        px={4}
        py={4}
        rounded="xl"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        onPress={() => console.log('Pressed')}
        _pressed={{bg: 'gray.100'}}>
        <Pressable>
          <ArrowDownIcon style={{transform: [{rotate: '90deg'}]}} />
        </Pressable>

        <Text
          fontSize={fontSizes.xs}
          color="#1A1929"
          style={{fontWeight: '600'}}>
          Monday - February 28, 23
        </Text>

        <Pressable>
          <ArrowDownIcon style={{transform: [{rotate: '-90deg'}]}} />
        </Pressable>
      </HStack>

      <Text fontWeight={700} fontSize={fontSizes.md}>
        Power Blast Circuit
      </Text>

      {tabItems?.map((item, index) => {
        return (
          <HStack justifyContent={'space-between'} bg="white" px={2} py={2}>
            <VStack width={'15%'}>
              <Box>
                <Image
                  source={item?.icon}
                  alt="image base"
                  size={'50px'}
                  resizeMode="contain"
                />
                {item?.category ? (
                  <Box
                    bg={'#353340'}
                    rounded="full"
                    h={6}
                    w={6}
                    position="absolute"
                    right={-5}
                    top={-5}
                    justifyContent="center"
                    alignItems="center">
                    <Text
                      fontSize={fontSizes?.['2xs']}
                      color={item?.category?.textColor}>
                      {item?.category?.name}
                    </Text>
                  </Box>
                ) : null}
              </Box>
            </VStack>
            <VStack width={'80%'} space={2}>
              <HStack
                space={4}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Text fontWeight={700} fontSize={fontSizes.xs}>
                  {item?.label}
                </Text>
                {item?.extra ? (
                  <Text
                    fontSize={fontSizes['2xs']}
                    bg={'#C7B4A0'}
                    px={4}
                    py={1}
                    fontWeight={600}
                    rounded="xl">
                    {item?.extra}
                  </Text>
                ) : null}
              </HStack>
              <Text fontSize={fontSizes['3xs']} color={'#7D7C81'}>
                {item?.description}
              </Text>
            </VStack>
          </HStack>
        );
      })}
      <VStack space={4} mt={5}>
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

        <Button
          w="full"
          bg={'#68696B'}
          rounded={8}
          py={3}
          _text={{color: 'white', fontWeight: 700}}
          _pressed={{bg: '#68696B90'}}>
          Complete Workout
        </Button>
      </VStack>
    </ScrollView>
  );
}
