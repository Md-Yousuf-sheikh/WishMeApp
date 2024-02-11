import useNavigate from '@hooks/useNavigate';
import {HStack, Image, Pressable, Text, VStack} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowRightIcon} from 'src/NativeBaseIcon';

interface PropsType {
  title?: string;
  navLabel?: string;
  subTitle?: string;
  logo?: boolean;
}

const AuthTopSection = ({
  title,
  subTitle,
  logo = true,
  navLabel,
}: PropsType) => {
  const {top} = useSafeAreaInsets();
  const navigate = useNavigate();
  return (
    <VStack pt={Platform.OS === 'android' ? 10 : top}>
      {logo ? (
        <VStack h={20} alignItems={'center'}>
          <Image
            source={require('@assets/images/logo.png')}
            width={'60%'}
            h={'100%'}
            resizeMode="contain"
          />
        </VStack>
      ) : (
        <Pressable>
          <HStack alignItems={'center'} pb={10} space={2}>
            <ArrowRightIcon />
            {navLabel && <Text>{navLabel}</Text>}
          </HStack>
        </Pressable>
      )}
      {title && (
        <Text fontSize={'2xl'} textAlign={'center'} lineHeight={'sm'}>
          {title}
        </Text>
      )}
      {subTitle && (
        <Text
          my={4}
          fontSize={'sm'}
          maxW={'70%'}
          alignSelf={'center'}
          textAlign={'center'}
          lineHeight={'xl'}>
          {subTitle}
        </Text>
      )}
    </VStack>
  );
};

export default AuthTopSection;
