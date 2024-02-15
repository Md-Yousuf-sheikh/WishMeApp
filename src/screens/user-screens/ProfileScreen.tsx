import {selectUser} from '@store/features/authSlice';
import {Avatar, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const ProfileScreen = () => {
  // hooks
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);
  //console.log('authUser', authUser);

  return (
    <Background type="scroll">
      <Header />
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
      <VStack px={4} py={4}></VStack>
    </Background>
  );
};

const profileScreen = asRoute(ProfileScreen, 'profileScreen', {
  title: 'ProfileScreen',
  animation: 'slide_from_right',
});

export default profileScreen;
