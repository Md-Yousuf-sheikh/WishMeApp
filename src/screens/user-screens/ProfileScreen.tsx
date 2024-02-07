import useNavigate from '@hooks/useNavigate';
import {logout, selectUser} from '@store/features/authSlice';
import Colors from '@theme/colors';
import {
  Avatar,
  Button,
  HStack,
  Link,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ArrowRightIcon, VerifiedIcon} from 'src/NativeBaseIcon';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const ProfileScreen = () => {
  // hooks
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);
  const navigate = useNavigate();
  // form hooks

  const handleSubmit = () => {
    dispatch(logout());
  };
  //
  console.log('authUser', authUser);

  return (
    <Background type="scroll">
      <Header />
      <VStack px={4} py={4}>
        <HStack alignItems={'center'} space={4}>
          <Avatar
            size={'lg'}
            bg="amber.500"
            source={{
              uri: authUser?.avatarLink,
            }}
            _text={{
              textTransform: 'uppercase',
            }}>
            {authUser?.full_name.slice(0, 1)}
          </Avatar>
          <Text
            color={Colors.primaryMain}
            fontSize={'4xl'}
            w={'75%'}
            numberOfLines={1}>
            {authUser?.full_name} hs sjns js
          </Text>
        </HStack>
        {/* Number */}
        <VStack py={4}>
          <HStack
            justifyContent={'space-between'}
            borderBottomWidth={1}
            pb={1}
            mb={1}
            borderColor={'gray.300'}>
            <Text fontSize={'lg'}>{authUser?.contact_number}</Text>
            <Text fontSize={'lg'} color={'#19B74E'}>
              Verified <VerifiedIcon />
            </Text>
          </HStack>
          <HStack justifyContent={'flex-end'} alignItems={'center'}>
            <Text color={'gray.400'} fontSize={'md'} pr={1}>
              Want to update
            </Text>
            <Link
              onPress={() => navigate('numberUpdate')}
              _text={{
                color: '#004ca2a5',
                fontSize: 'md',
              }}>
              your phone number?
            </Link>
          </HStack>
        </VStack>
        {/* SMS Plan */}
        <VStack py={4}>
          <HStack
            justifyContent={'space-between'}
            borderBottomWidth={1}
            pb={1}
            mb={1}
            borderColor={'gray.300'}>
            <Text fontSize={'lg'}>SMS Plan</Text>
            <Text fontSize={'lg'} color={'#F47B8A'}>
              WishMe Lite
            </Text>
          </HStack>
          <HStack justifyContent={'flex-end'} alignItems={'center'}>
            <Text color={'gray.400'} fontSize={'md'} pr={1}>
              Want to update
            </Text>
            <Link
              onPress={() => navigate('smsPlanScreen')}
              _text={{
                color: '#004ca2a5',
                fontSize: 'md',
              }}>
              plan?
            </Link>
          </HStack>
        </VStack>
        {/* NavList */}
        <VStack my={5}>
          {navList?.map(item => (
            <Pressable
              onPress={() => item?.nav === 'logout' && handleSubmit()}
              my={5}
              variant={'unstyled'}
              width={'auto'}
              flexDirection={'row'}
              alignItems={'center'}>
              <Text mt={-1} fontSize={'18'} mr={4}>
                {item?.title}
              </Text>
              <ArrowRightIcon size={3} />
            </Pressable>
          ))}
        </VStack>
      </VStack>
    </Background>
  );
};

const profileScreen = asRoute(ProfileScreen, 'profileScreen', {
  title: 'ProfileScreen',
  animation: 'slide_from_right',
});

export default profileScreen;

// list
const navList = [
  {
    title: 'Wish Log',
    nav: 'w',
  },
  {
    title: 'Your order',
    nav: 'w',
  },
  {
    title: 'Referral',
    nav: 'w',
  },
  {
    title: 'Help',
    nav: 'help',
  },
  {
    title: 'Logout',
    nav: 'logout',
  },
];
