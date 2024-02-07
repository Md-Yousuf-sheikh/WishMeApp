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

const NumberUpdate = () => {
  // hooks
  const authUser = useSelector(selectUser);
  const navigate = useNavigate();
  // form hooks

  return (
    <Background type="scroll">
      <Header title="Update mobile" />
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
      </VStack>
    </Background>
  );
};

const numberUpdate = asRoute(NumberUpdate, 'numberUpdate', {
  title: 'numberUpdate',
  animation: 'slide_from_right',
});

export default numberUpdate;
