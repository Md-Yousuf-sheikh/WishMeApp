import useNavigate from '@hooks/useNavigate';
import {selectUser} from '@store/features/authSlice';
import Colors from '@theme/colors';
import {Avatar, Button, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {BellIcon} from 'src/NativeBaseIcon';

interface PropsType {
  title?: string;
  type?: string;
  onPressLeft1?: () => void;
  onPressLeft2?: () => void;
}

export default function MainHeader({
  title,
  type,
  onPressLeft1,
  onPressLeft2,
}: PropsType) {
  // Hooks
  const navigate = useNavigate();
  const insets = useSafeAreaInsets();
  const authUser = useSelector(selectUser);

  console.log('type', type, onPressLeft2);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingX={4}
        height={'60px'}
        bg={'#ffffff'}
        pt={Platform.OS === 'ios' ? insets.top + 'px' : 0}>
        <VStack>
          {title ? (
            <Text
              fontSize={'2xl'}
              fontWeight={'700'}
              color={Colors.primaryMain}>
              {title}
            </Text>
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

        <HStack>
          <Button variant={'unstyled'} onPress={onPressLeft1}>
            <BellIcon size={6} />
          </Button>
          <Button
            p={0}
            variant={'unstyled'}
            onPress={() => navigate('profileScreen')}>
            <Avatar
              size={10}
              bg="amber.500"
              source={{
                uri: authUser?.avatarLink,
              }}
              _text={{
                textTransform: 'uppercase',
              }}>
              {authUser?.full_name.slice(0, 1)}
            </Avatar>
          </Button>
        </HStack>
      </HStack>
    </>
  );
}
