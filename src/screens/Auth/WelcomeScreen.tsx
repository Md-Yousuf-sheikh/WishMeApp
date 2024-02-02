import {ImageBackground} from 'react-native';
import React from 'react';
import {Button, Factory, Image, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const FBgImage = Factory(ImageBackground);

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <FBgImage
      source={require('@assets/images/screen1.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center"
      justifyContent="space-between">
      <Image source={require('@assets/images/logo.png')} alt="logo" mt={16} />

      <VStack
        space={4}
        mt={16}
        alignSelf={'self-end'}
        bg="white"
        px={4}
        py={4}
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        width="100%"
        height="40%"
        alignItems={'center'}>
        <Text
          color="black"
          fontSize="3xl"
          textAlign={'center'}
          fontWeight={700}>
          Welcome to PP FIT
        </Text>
        <Text textAlign={'center'} color="gray.2" maxW={300}>
          A brand new way of training that will guarantee results...... if
          you're up for the challenge. Start today to begin your journey to
          unlocking a better you.
        </Text>

        <Button
          w="full"
          bg={'primary.100'}
          rounded={8}
          py={3}
          mt={4}
          _text={{color: 'white', fontWeight: 700}}
          _pressed={{bg: '#68696B90'}}
          onPress={navigateToLogin}>
          Get Started
        </Button>
      </VStack>
    </FBgImage>
  );
}
