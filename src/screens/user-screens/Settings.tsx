import useNavigate from '@hooks/useNavigate';
import {logout, selectUser} from '@store/features/authSlice';
import {Avatar, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AboutIcon,
  AccountIcon,
  ArrowLeftIcon,
  LockIcon,
  NotificationIcon,
  OrderSummaryIcon,
  SMSIcon,
} from 'src/NativeBaseIcon';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const navList = [
  {
    title: 'Account',
    icon: AccountIcon,
    nav: 'profileScreen',
  },
  {
    title: 'Notification',
    icon: NotificationIcon,
    nav: 'notification',
  },
  {
    title: 'Wish Log',
    icon: SMSIcon,
    nav: 'wishLog',
  },
  {
    title: 'Order Summary',
    icon: OrderSummaryIcon,
    nav: 'referralSummary',
  },
  {
    title: 'Privacy and security',
    icon: LockIcon,
    nav: '',
  },
  {
    title: 'Referral',
    icon: AboutIcon,
    nav: 'myReferral',
  },
  {
    title: 'About',
    icon: AboutIcon,
    nav: '',
  },
];

const Settings = () => {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);

  // logout
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Background type="scroll">
      <Header />
      {/* content */}
      <HStack
        borderBottomWidth={1}
        borderColor={'gray.200'}
        p={4}
        alignItems={'center'}
        space={4}>
        <Avatar
          size={'lg'}
          bg="amber.500"
          source={{
            uri: authUser?.avatar,
          }}
          _text={{
            textTransform: 'uppercase',
          }}>
          {authUser?.fullName ? authUser?.fullName.slice(0, 1) : 'N'}
        </Avatar>
        <VStack justifyContent={'centers'}>
          <Text color={'gray.800'} fontSize={'lg'} numberOfLines={1}>
            {authUser?.fullName}
          </Text>
          <Text color={'gray.500'} fontSize={'sm'} numberOfLines={1}>
            Loyalty Pint: 100
          </Text>
        </VStack>
      </HStack>
      <VStack p={4} space={8} mt={4}>
        {navList?.map(item => (
          <Pressable
            onPress={() =>
              item?.nav === 'logout' ? logOut() : navigate(item?.nav)
            }>
            <HStack
              alignItems={'center'}
              w={'full'}
              justifyContent={'space-between'}>
              <HStack alignItems={'center'} space={4}>
                <item.icon size={5} />
                <Text mt={-1} fontSize={'18'} mr={4}>
                  {item?.title}
                </Text>
              </HStack>
              <ArrowLeftIcon size={3} />
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </Background>
  );
};

const settings = asRoute(Settings, 'settings', {
  title: 'Settings',
  animation: 'slide_from_right',
});

export default settings;
