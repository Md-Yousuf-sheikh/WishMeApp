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
import {ImageBackground} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import useToggle from '@hooks/useToggle';
import {usePasswordResetMutation, useRegisterMutation} from '@store/apis/auth';
import {
  AppleIcon,
  EmailIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FacebookIcon,
  GoogleIcon,
  LockIcon,
} from '@assets/icons';
import useShowModal from '@hooks/useShowModal';
import useShowToastMessage from '@hooks/useShowToastMessage';
import useNavigate from '@hooks/useNavigate';

const FBgImage = Factory(ImageBackground);

//  validation
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function ResetPassword() {
  const [eyeOpen, toggleEyeOpen] = useToggle(false);
  const [eyeOpen1, toggleEyeOpen1] = useToggle(false);
  // Hooks
  const route = useRoute();
  const toast = useShowToastMessage();
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('Login');
  };
  const [resetPassword, {isLoading}] = usePasswordResetMutation();

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async values => {
      await handelResetPassword(values);
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  const handelResetPassword = async () => {
    const body = {
      email: route?.params?.data?.email,
      otpToken: route?.params?.data?.otpToken,
      password: values?.password,
      confirmPassword: values?.confirmPassword,
    };
    try {
      const res = await resetPassword(body).unwrap();
      navigate('Login');
      toast(res?.data.message);
    } catch (error) {
      toast(error?.data.message, 'error');
    }
  };

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
          Reset Password
        </Text>
        <Text color="gray.4">Please enter your new password</Text>

        <VStack mt={10} space="4">
          <FormControl isInvalid={Boolean(errors.password)}>
            <Input
              bg="white"
              placeholder="Password"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              type={eyeOpen ? 'text' : 'password'}
              _focus={{bg: 'white'}}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              leftElement={<LockIcon style={{marginLeft: 10}} />}
              rightElement={
                <Pressable onPress={toggleEyeOpen} mr={'10px'}>
                  {eyeOpen ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </Pressable>
              }
            />
            <FormControl.ErrorMessage color="white">
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.confirmPassword)}>
            <Input
              bg="white"
              placeholder="Confirm Password"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              type={eyeOpen1 ? 'text' : 'password'}
              _focus={{bg: 'white'}}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              leftElement={<LockIcon style={{marginLeft: 10}} />}
              rightElement={
                <Pressable onPress={toggleEyeOpen1} mr={'10px'}>
                  {eyeOpen1 ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </Pressable>
              }
            />
            <FormControl.ErrorMessage color="#e41e1e">
              {errors.confirmPassword}
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
            onPress={handleSubmit}
            isLoading={isLoading}>
            Sign Up
          </Button>

          <Center
            mt={5}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Box bg="white" height={'0.5px'} width="50" />
            <Text color="white" px={2}>
              or continue with
            </Text>
            <Box bg="white" height={'0.5px'} width="50" />
          </Center>

          <VStack
            width="100%"
            alignItems="center"
            justifyContent={'center'}
            flexDirection="row"
            mt={5}
            style={{
              gap: 10,
            }}>
            <GoogleIcon />
            <FacebookIcon />
            <AppleIcon />
          </VStack>

          <Center
            mt={5}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Text color="white" px={2}>
              Already have an account?{' '}
              <Text
                color="secondary.100"
                px={2}
                fontWeight={600}
                onPress={navigateToLogin}>
                Sign In
              </Text>
            </Text>
          </Center>
        </VStack>
      </VStack>
    </FBgImage>
  );
}
