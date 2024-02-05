import {Image, Text, VStack} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface PropsType {
  title?: string;
}

const AuthTopSection = ({title}: PropsType) => {
  const {top} = useSafeAreaInsets();
  return (
    <VStack pt={Platform.OS === 'android' ? 10 : top}>
      <VStack space={5} pt={10}>
        <Image
          source={require('@assets/images/logo.png')}
          width={'70%'}
          h={'24'}
          resizeMode="contain"
        />
        <Text fontSize={'5xl'} lineHeight={'sm'}>
          {title}
        </Text>
      </VStack>
    </VStack>
  );
};

export default AuthTopSection;
