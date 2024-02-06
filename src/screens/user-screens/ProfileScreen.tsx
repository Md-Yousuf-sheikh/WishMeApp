import useNavigate from '@hooks/useNavigate';
import {logout} from '@store/features/authSlice';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {Button, FormControl, HStack, Input, VStack, Text} from 'native-base';
import React from 'react';
import {useDispatch} from 'react-redux';
import AuthTopSection from 'src/components/common/AuthTopSection';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(
      /^(\+88|88)?(01[3-9]\d{8})$/,
      'Please enter a valid Bangladeshi phone number',
    )
    .required('Phone number is required'),
});

const ProfileScreen = () => {
  // hooks
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // form hooks

  // const formik = useFormik({
  //   initialValues: {
  //     mobile: '',
  //     password: '',
  //   },
  //   validationSchema,
  //   onSubmit: async values => {
  //     console.log('values', values);
  //     navigate('numberOtpVerify', values, undefined);
  //   },
  // });

  // const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
  //   formik;
  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <Background type="scroll">
      <Header title="Profile" />
      <VStack px={4} flexGrow={1} justifyContent={'space-between'} pb={5}>
        <Button
          mt={'24'}
          px={4}
          py={2}
          borderRadius={'full'}
          onPress={() => handleSubmit()}
          _text={{fontSize: 'md', color: 'white'}}
          background={Colors.primaryMain}>
          Logout
        </Button>
      </VStack>
    </Background>
  );
};

const profileScreen = asRoute(ProfileScreen, 'profileScreen', {
  title: 'ProfileScreen',
  animation: 'slide_from_right',
});

export default profileScreen;
