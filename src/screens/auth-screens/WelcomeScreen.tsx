import {ImageBackground} from 'react-native';
import React from 'react';
import {Factory} from 'native-base';
import asRoute from 'src/utils/withRoute';

const FBgImage = Factory(ImageBackground);
//

const WelcomeScreen = () => {
  // const navigation = useNavigation();

  return (
    <FBgImage
      source={require('@assets/images/screen1.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center">
      {/* <VStack>

      </VStack> */}
    </FBgImage>
  );
};

const welcomeScreen = asRoute(WelcomeScreen, 'WelcomeScreen', {
  title: 'welcomeScreen',
  animation: 'slide_from_right',
});

export default welcomeScreen;
