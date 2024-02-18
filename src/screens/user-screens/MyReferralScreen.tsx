import useNavigate from '@hooks/useNavigate';
import {selectUser} from '@store/features/authSlice';
import {Image, Text, VStack} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const MyReferralScreen = () => {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);

  return (
    <Background type="scroll">
      <Header title="My Referral" />
      {/* Content */}
      <VStack px={3} flex={1} pt={4} space={1}>
        <Image
          source={require('@assets/images/refer-icon.png')}
          w={'full'}
          alt="refer"
          h={'40%'}
        />
        <Text
          w={'90%'}
          alignSelf={'center'}
          fontSize={'lg'}
          color={'gray.800'}
          textAlign={'center'}>
          Refer a friend and get 10 WishMe SMS for free!
        </Text>
        <Text
          w={'90%'}
          alignSelf={'center'}
          fontSize={'md'}
          color={'gray.700'}
          textAlign={'center'}>
          Refer your friend to WishMe! Once your friend logs into the WishMe
          app, both of you will receive a 10 WishMe SMS.
        </Text>
      </VStack>
    </Background>
  );
};

const myReferralScreen = asRoute(MyReferralScreen, 'myReferral', {
  title: 'My ',
  animation: 'slide_from_right',
});

export default myReferralScreen;
