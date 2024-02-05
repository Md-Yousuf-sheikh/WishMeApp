import {ImageBackground, StatusBar} from 'react-native';
import React from 'react';
import {Button, Factory, HStack, Text, VStack} from 'native-base';
import asRoute from 'src/utils/withRoute';
import useNavigate from '@hooks/useNavigate';
import Colors from '@theme/colors';
// import {ArrowUpIcon} from '@assets/icons';

const FBgImage = Factory(ImageBackground);
//

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <FBgImage
      source={require('@assets/images/welcome1.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center">
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <VStack flex={1} w={'100%'} px={4} pb={5} justifyContent={'flex-end'}>
        <HStack justifyContent={'space-between'}>
          <Button
            px={4}
            py={2}
            borderRadius={'full'}
            onPress={() => navigate('registerScreen')}
            _text={{fontSize: 'md', color: Colors.primaryLighter3}}
            background={'white'}>
            Create Account
          </Button>
          <Button
            px={4}
            py={4}
            onPress={() => navigate('signInWithNumber')}
            variant={'unstyled'}
            flexDir={'row'}>
            <HStack alignItems={'center'} space={2}>
              <Text fontFamily={'body'} color={'white'} fontSize={'md'} mt={-1}>
                Sign In
              </Text>
              {/* <ArrowUpIcon width={25} height={20} /> */}
            </HStack>
          </Button>
        </HStack>
      </VStack>
    </FBgImage>
  );
};

const welcomeScreen = asRoute(WelcomeScreen, 'WelcomeScreen', {
  title: 'welcomeScreen',
  animation: 'slide_from_right',
});

export default welcomeScreen;
