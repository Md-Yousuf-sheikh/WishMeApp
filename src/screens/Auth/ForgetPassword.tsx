import {ImageBackground} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Center,
  Factory,
  FormControl,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import VectorImage from 'react-native-vector-image';
import useToggle from '@hooks/useToggle';
import {useNavigation} from '@react-navigation/native';
import {useForgetPasswordMutation} from '@store/apis/auth';
import useShowToastMessage from '@hooks/useShowToastMessage';

const FBgImage = Factory(ImageBackground);
//
//  validation
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function ForgetPassword() {
  const navigation = useNavigation();
  const toast = useShowToastMessage();
  //  API
  const [resetPassword, {isLoading}] = useForgetPasswordMutation();

  //  form
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async v => {
      await handelReset();
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  const handelReset = async () => {
    // showModal('success', {
    //   title: 'Success',
    //   message: 'Information updated successfully.',
    // });

    try {
      const res = await resetPassword({
        email: values.email,
      }).unwrap();
      console.log('res-', res);

      navigation.navigate('EmailOtpVerify', {
        data: {
          email: values.email,
          ...res.data.data,
        },
      });

      toast(res?.data.message);
    } catch (error) {
      toast(error?.data.message, 'error');
    }
  };
  //
  return (
    <FBgImage
      source={require('@assets/images/screen2.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center">
      <Image
        source={require('@assets/images/logo.png')}
        alt="logo"
        mt={16}
        height={100}
        width={100}
      />

      <VStack w="100%" px={4} mt={10}>
        <Text fontSize="2xl" color="white" fontWeight={700}>
          Forge Password
        </Text>
        <Text color="gray.4">Please enter your email to reset password</Text>
        <VStack mt={10} space="4">
          <FormControl isInvalid={Boolean(errors.email)}>
            <Input
              bg="white"
              placeholder="Email"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              _focus={{bg: 'white'}}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <FormControl.ErrorMessage color="white">
              {errors.email}
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            w="full"
            bg={'secondary.100'}
            rounded={8}
            py={3}
            mt={10}
            _text={{color: 'black', fontWeight: 700}}
            _pressed={{bg: '#68696B90'}}
            isLoading={isLoading}
            onPress={handleSubmit}>
            Sign In
          </Button>
        </VStack>
      </VStack>
    </FBgImage>
  );
}
