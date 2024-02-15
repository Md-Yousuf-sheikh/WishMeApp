import useNavigate from '@hooks/useNavigate';
import {selectUser} from '@store/features/authSlice';
import Colors from '@theme/colors';
import {
  ArrowBackIcon,
  Avatar,
  Button,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {BellIcon} from 'src/NativeBaseIcon';

interface PropsType {
  title?: string;
  type?: string;
  arrowLeft?: boolean;
  rightContent?: boolean;
  onPressLeft1?: () => void;
  onPressLeft2?: () => void;
}

export default function MainHeader({
  title,
  type,
  onPressLeft1,
  onPressLeft2,
  arrowLeft = true,
  rightContent = true,
}: PropsType) {
  // Hooks
  const navigate = useNavigate();
  const insets = useSafeAreaInsets();
  const authUser = useSelector(selectUser);

  // console.log('type', type, onPressLeft2);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingX={4}
        height={'60px'}
        bg={'#ffffff'}
        borderBottomWidth={1}
        borderColor={'gray.100'}
        pt={Platform.OS === 'ios' ? insets.top + 'px' : 0}>
        <VStack>
          {title ? (
            <Pressable
              onPress={() =>
                arrowLeft ? navigate(undefined, undefined, 'goBack') : null
              }>
              <HStack alignItems={'center'} space={2}>
                {arrowLeft && <ArrowBackIcon color={Colors.primaryMain} />}
                <Text fontSize={'lg'} fontWeight={'800'} color={'gray.700'}>
                  {title}
                </Text>
              </HStack>
            </Pressable>
          ) : (
            <Image
              source={require('@assets/images/logo.png')}
              alt="logo"
              height={'10'}
              width={'24'}
              resizeMode="contain"
            />
          )}
        </VStack>

        {rightContent && (
          <HStack>
            <Button variant={'unstyled'} onPress={onPressLeft1}>
              <BellIcon size={6} />
            </Button>
            <Button
              p={0}
              variant={'unstyled'}
              onPress={() => navigate('profileScreen')}>
              <Avatar
                size={8}
                bg="amber.500"
                source={{
                  uri: authUser?.avatar,
                }}
                _text={{
                  textTransform: 'uppercase',
                }}>
                {authUser?.fullName ? authUser?.fullName.slice(0, 1) : 'N'}
              </Avatar>
            </Button>
          </HStack>
        )}
      </HStack>
    </>
  );
}
