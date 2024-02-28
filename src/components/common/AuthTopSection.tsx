import useNavigate from '@hooks/useNavigate';
import {HStack, Image, Pressable, Text, VStack} from 'native-base';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowRightIcon} from 'src/NativeBaseIcon';

interface PropsType {
  title?: string;
  navLabel?: string;
  subTitle?: string;
  titleMt?: any;
  logo?: boolean;
  arrowIcon?: boolean;
}

const AuthTopSection = ({
  title,
  subTitle,
  logo = true,
  navLabel,
  arrowIcon,
  titleMt,
}: PropsType) => {
  const {top} = useSafeAreaInsets();
  const navigate = useNavigate();
  console.log('top', top);
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <VStack pt={Platform.OS === 'android' ? (top > 0 ? 10 : 3) : top}>
        {arrowIcon && (
          <Pressable onPress={() => navigate(undefined, undefined, 'goBack')}>
            <HStack alignItems={'center'} pb={10} space={2}>
              <ArrowRightIcon />
              {navLabel && <Text>{navLabel}</Text>}
            </HStack>
          </Pressable>
        )}
        {logo && (
          <VStack h={20} alignItems={'center'}>
            <Image
              source={require('@assets/images/logo.png')}
              width={'60%'}
              h={'100%'}
              resizeMode="contain"
              alt="logo"
            />
          </VStack>
        )}
        {title && (
          <Text
            mt={titleMt}
            fontSize={'2xl'}
            textAlign={'center'}
            lineHeight={'sm'}>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text
            my={2}
            fontSize={'sm'}
            maxW={'70%'}
            alignSelf={'center'}
            textAlign={'center'}
            lineHeight={'xl'}>
            {subTitle}
          </Text>
        )}
      </VStack>
    </>
  );
};

export default AuthTopSection;
