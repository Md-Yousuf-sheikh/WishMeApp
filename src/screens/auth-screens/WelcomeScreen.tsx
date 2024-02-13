import {FlatList, StatusBar} from 'react-native';
import React from 'react';
import {Button, HStack, Text, VStack} from 'native-base';
import asRoute from 'src/utils/withRoute';
import useNavigate from '@hooks/useNavigate';
import Colors from '@theme/colors';
import AuthTopSection from 'src/components/common/AuthTopSection';
import {WelcomeImage1, WelcomeImage2, WelcomeImage3} from 'src/NativeBaseIcon';
import {hp, wp} from '@theme/ScreenDimensions';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  // API
  const data = [
    {
      id: '1#1',
      title:
        'Schedule your greetings, and Wishme will send them on the scheduled date for you.',
      icon: <WelcomeImage1 size={'100%'} />,
    },
    {
      id: '2#2',
      title:
        'Effortlessly purchase gift items for your loved ones to commemorate their special day!',
      icon: <WelcomeImage2 size={'100%'} />,
    },
    {
      id: '3#3',
      title:
        'Easily connect with your family and friends across borders and share greetings!',
      icon: <WelcomeImage3 size={'100%'} />,
    },
  ];
  return (
    <VStack
      flex={1}
      w={'100%'}
      px={4}
      bg={'white'}
      justifyContent={'space-between'}
      pb={7}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <AuthTopSection />
      <VStack justifyContent={'flex-end'} space={10}>
        <HStack width={wp(100)}>
          <FlatList
            data={data}
            horizontal
            keyExtractor={item => item?.id.toString()}
            renderItem={({item}) => {
              return (
                <VStack key={item?.id} space={5} width={wp(100)}>
                  <HStack
                    h={hp(35)}
                    // bg={'#8f1e1e'}
                    justifyContent={'center'}
                    overflowY={'hidden'}>
                    {item?.icon}
                  </HStack>
                  <Text fontSize={'2xl'} textAlign={'center'} w={'90%'}>
                    {item?.title}
                  </Text>
                </VStack>
              );
            }}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </HStack>
        {/* buttons */}
        <VStack space={2}>
          <Button
            variant={'unstyled'}
            _text={{
              fontSize: 'md',
              fontWeight: 'semibold',
            }}>
            Terms & Privacy Policy
          </Button>
          <Button
            px={4}
            py={3}
            borderRadius={'full'}
            onPress={() => navigate('signInWithNumber')}
            _text={{fontSize: 'md', color: 'white'}}
            background={Colors.buttonColor}>
            Start
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

const welcomeScreen = asRoute(WelcomeScreen, 'WelcomeScreen', {
  title: 'welcomeScreen',
  animation: 'slide_from_right',
});

export default welcomeScreen;
