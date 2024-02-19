import React, {useRef, useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {Button, HStack, Text, VStack} from 'native-base';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import asRoute from 'src/utils/withRoute';
import useNavigate from '@hooks/useNavigate';
import Colors from '@theme/colors';
import AuthTopSection from 'src/components/common/AuthTopSection';
import {WelcomeImage1, WelcomeImage2, WelcomeImage3} from 'src/NativeBaseIcon';
import {hp, wp} from '@theme/ScreenDimensions';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<FlatList<any>>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  const renderCarouselItem = ({item}: {item: any}) => (
    <VStack space={5} width={wp(100)}>
      <HStack h={hp(35)} justifyContent={'center'} overflowY={'hidden'}>
        {item.icon}
      </HStack>
      <Text fontSize={'2xl'} textAlign={'center'} w={'90%'}>
        {item.title}
      </Text>
    </VStack>
  );

  const renderPagination = () => (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      // containerStyle={{paddingVertical: hp(1)}}
      // eslint-disable-next-line react-native/no-inline-styles
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.buttonColor, // Active dot color
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      inactiveDotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#a1a1a1', // Inactive dot color
      }}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.8}
    />
  );

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
      <VStack justifyContent={'flex-end'} space={5}>
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderCarouselItem}
          sliderWidth={wp(100)}
          itemWidth={wp(100)}
          onSnapToItem={(index: any) => setActiveSlide(index)}
          loop={false}
        />
        {renderPagination()}
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
